const globals = require("globals")

module.exports = {
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: {
      ...globals.browser
    },
    parserOptions: {
      ecmaFeatures: {
        "jsx": true
      }
    }
  },
  rules: {
    "strict": ["error", "never"],
    "valid-typeof": "error",
    "no-unsafe-negation": "error",
    "no-unused-vars": "error",
    "no-unexpected-multiline": "error",
    "no-undef": "error",
  }
}