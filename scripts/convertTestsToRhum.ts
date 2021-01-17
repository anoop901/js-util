import chain from "https://raw.githubusercontent.com/anoop901/js-util/migrate-to-deno/src/chain.ts";

import max from "https://raw.githubusercontent.com/anoop901/js-util/migrate-to-deno/src/iterables/max.ts";
import repeat from "https://raw.githubusercontent.com/anoop901/js-util/migrate-to-deno/src/iterables/repeat.ts";
import map from "https://raw.githubusercontent.com/anoop901/js-util/migrate-to-deno/src/iterables/map.ts";
import zip from "https://raw.githubusercontent.com/anoop901/js-util/migrate-to-deno/src/iterables/zip.ts";
import toArray from "https://raw.githubusercontent.com/anoop901/js-util/migrate-to-deno/src/iterables/toArray.ts";
import drop from "https://raw.githubusercontent.com/anoop901/js-util/migrate-to-deno/src/iterables/drop.ts";
import takeWhile from "https://raw.githubusercontent.com/anoop901/js-util/migrate-to-deno/src/iterables/takeWhile.ts";

async function* readDirRecursive(
  path: string,
  followSymlinks = true
): AsyncGenerator<string, void, undefined> {
  for await (const dirEntry of Deno.readDir(path)) {
    if (dirEntry.isFile || (followSymlinks && dirEntry.isSymlink)) {
      yield dirEntry.name;
    } else if (dirEntry.isDirectory) {
      for await (const subPath of readDirRecursive(
        `${path}/${dirEntry.name}`
      )) {
        yield `${dirEntry.name}/${subPath}`;
      }
    }
  }
}

function lengthOfLongestString(strings: string[]): number {
  return chain(strings)
    .then(map((line) => line.length))
    .then(max)
    .end();
}

function encloseInBox(s: string): string {
  const lines = s.split("\n");
  const maxLength = lengthOfLongestString(lines);
  const header = ["┌─", ...repeat("─", maxLength), "─┐"].join("");
  const footer = ["└─", ...repeat("─", maxLength), "─┘"].join("");
  const boxedLines = [
    header,
    ...chain(lines)
      .then(map((line) => `│ ${line.padEnd(maxLength)} │`))
      .end(),
    footer,
  ];
  return boxedLines.join("\n");
}

function sideBySideLines(leftLines: string[], rightLines: string[]): string[] {
  const sharedLines = chain(zip(leftLines, rightLines))
    .then(map(({ first, second }) => `${first} ${second}`))
    .end();
  if (leftLines.length > rightLines.length) {
    return [
      ...sharedLines,
      ...chain(leftLines).then(drop(rightLines.length)).end(),
    ];
  } else {
    const maxLength = lengthOfLongestString(leftLines);
    return [
      ...sharedLines,
      ...chain(rightLines)
        .then(drop(leftLines.length))
        .then(map((line) => `${[...repeat(" ", maxLength)].join("")} ${line}`))
        .end(),
    ];
  }
}

function sideBySide(left: string, right: string): string {
  return sideBySideLines(left.split("\n"), right.split("\n")).join("\n");
}

function convert(testCode: string, fileName: string): string {
  const testCodeLines = testCode.trim().split("\n");
  const importLines = chain(testCodeLines)
    .then(takeWhile((line) => line === "" || line.startsWith("import")))
    .then(toArray)
    .end();
  const remainingLines = chain(testCodeLines)
    .then(drop(importLines.length))
    .end();
  return (
    `${importLines
      .map((line) => line.replace(/assertEquals|assertThrows|assert/, "Rhum"))
      .join("\n")}\n` +
    `Rhum.testPlan("${fileName}", () => {\n` +
    `  Rhum.testSuite("${fileName.split(".")[0]}", () => {\n` +
    `${[...remainingLines]
      .map(
        (line) =>
          `    ${line
            .replace("Deno.test", "Rhum.testCase")
            .replace("assert", "Rhum.asserts.assert")}`
      )
      .join("\n")}\n` +
    `  });\n` +
    `});\n` +
    `\n` +
    `Rhum.run()\n` +
    `\n`
  );
}

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

for await (const fileName of readDirRecursive(".")) {
  if (fileName.endsWith(".test.ts")) {
    console.log(fileName);
    const fileContents = textDecoder.decode(await Deno.readFile(fileName));
    const convertedFileContents = convert(
      fileContents,
      fileName.split("/").slice(-1)[0]
    );
    console.log(
      sideBySide(
        encloseInBox(fileContents),
        encloseInBox(convertedFileContents)
      )
    );
    await Deno.writeFile(fileName, textEncoder.encode(convertedFileContents));
    console.log();
  }
}

export {};
