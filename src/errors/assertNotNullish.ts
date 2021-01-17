import throwError from "./throwError.ts";

export default function assertNotNullish<T>(t: T | null | undefined): T {
  return t ?? throwError("unexpected nullish value");
}
