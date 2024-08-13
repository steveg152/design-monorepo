import docgen from "react-docgen-typescript";
import fs from "fs";

// Configure parser options for react-docgen-typescript
const options = {
  savePropValueAsString: true,
  // Ensure enums and optional values are handled correctly
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,
  // Resolve named exports for documentation
  componentNameResolver: (exp) => {
    // Assuming any export that starts with an uppercase letter is a component
    if (exp.name[0] === exp.name[0].toUpperCase()) {
      return exp.name;
    }
    // Return null for non-component exports
    return null;
  },
  // Add any other options you need for your documentation
};

// Read the component file
const file = fs.readFileSync("./src/components/Button/Button.tsx", "utf8");

console.log(file);

// Parse the component file to generate documentation
const docs = docgen.parse("./src/components/Button/Button.tsx", options);

// Output the documentation
console.log(docs[1].props.variant);
