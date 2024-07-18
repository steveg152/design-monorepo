// Step 1: Import react-docgen-typescript and fs
// const docgen = require("react-docgen");
import { parse } from "react-docgen";
import fs from "fs";
// const fs = require("fs");

// Step 2: Configure parser options for react-docgen-typescript
const options = {
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,
  // Add any other options you need for your documentation
};

// Step 3: Read the component file
const file = fs.readFileSync("./src/components/Button/Button.jsx", "utf8");

// Step 4: Parse the component file to generate documentation
const docs = parse(file, options);

// Step 5: Output the documentation
docs.forEach((doc) => {
  console.log(doc);
});
