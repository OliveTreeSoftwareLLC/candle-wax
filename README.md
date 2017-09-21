# candle-wax
Reusable building blocks for react-js projects

# Updating the package

When you make changes, you can update the package using npm version <update_type>, where update_type is one of the semantic versioning release types, patch, minor, or major. This command will change the version number in package.json. Note that this will also add a tag with this release number to your git repository if you have one.

After updating the version number, you can npm publish again.

Test: Go to https://npmjs.com/package/<package>. The package number should be updated.

The README displayed on the site will not be updated unless a new version of your package is published, so you would need to run npm version patch and npm publish to have a documentation fix displayed on the site.

More info [here](https://docs.npmjs.com/getting-started/publishing-npm-packages)
