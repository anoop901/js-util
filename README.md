# js-util

Convenience utilities for writing JS code.

# Release guide

To release a new version to NPM:

1. Make sure the changes to be released are on the `main` branch.
2. [Draft a new release in GitHub.](https://github.com/anoop901/js-util/releases/new)
3. Set the tag to a new tag named after the new version number.
4. Make sure the `main` branch is selected.
5. Publish the release.

This will automatically start an action that builds the package and publishes the built artifacts to NPM under the new version number. Also, a new commit will be automatically made on `main` that updates the version number in `package.json`.
