{
  "extends": "@react-native/eslint-config",
  "rules": {
    "react-native/no-inline-styles": "off",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ]
  },
  "ignorePatterns": [
    "node_modules/",
    "android/",
    "ios/",
    "dist/",
    "*.config.js"
  ]
}
