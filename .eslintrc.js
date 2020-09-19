module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  rules: {
    "no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: false,
        printWidth: 100,
        semi: false,
        tabWidth: 2,
        useTabs: false,
        bracketSpacing: false,
        jsxBracketSameLine: true,
      },
    ],
  },
  plugins: ["prettier"],
}
