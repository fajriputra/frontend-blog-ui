module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "prettier"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "linebreak-style": ["error", "unix"],
    "no-console": ["warn"],
    "prettier/prettier": ["warn"],
    "react/jsx-sort-props": [
      "warn",
      {
        ignoreCase: true,
      },
    ],
    semi: "error",
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "valid-typeof": "off",
  },
};
