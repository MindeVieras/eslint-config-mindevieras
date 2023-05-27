# eslint-config-mindevieras

Shared ESLint configuration for TypeScript projects.

## Features

- Lints TypeScript based on the latest standards.
- Fixes issues and formatting errors with Prettier.
- Supports node and browser environments.

## Installation

1. Install the package using npm:

   ```bash
   npm install -D github:MindeVieras/eslint-config-mindevieras
   ```

2. Create a `.eslintrc` file in the root directory of your project (where `package.json` resides). Add the following content to the `.eslintrc` file:

   ```json
   {
     "extends": [ "mindevieras" ]
   }
   ```

3. Optionally, you can add scripts to your `package.json` file for linting and fixing:

   ```json
   "scripts": {
     "lint": "eslint .",
     "lint:fix": "eslint . --fix"
   }
   ```

4. You can now manually lint your code by running `npm run lint` and fix fixable issues with `npm run lint:fix`. However, it's recommended to configure your editor to handle this automatically.

## Customization

If you want to override ESLint or Prettier settings, you can add the corresponding rules to your `.eslintrc` file. For ESLint rules, add them under the `"rules"` key. You can refer to the [ESLint rules documentation](https://eslint.org/docs/rules/) for more details.

Example `.eslintrc` file:

```json
{
  "extends": ["mindev"],
  "rules": {
    "no-console": 2,
    // other rules to override
  }
}
```

## Editor Setup (VSCode)

1. Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for Visual Studio Code.

2. Open the `.vscode/settings.json` file in your project and add the following settings:

   ```json
    {
      "editor.formatOnSave": true,
      "[javascript]": {
        "editor.formatOnSave": false,
      },
      "editor.codeActionsOnSave": {
        "source.fixAll": true
      },
      "editor.autoIndent": "full",
      "editor.insertSpaces": true,
      "editor.formatOnPaste": false,
      "editor.defaultFormatter": "dbaeumer.vscode-eslint",
      "editor.renderWhitespace": "boundary",
      "editor.wordWrap": "off",
      "editor.detectIndentation": true,
      "editor.rulers": [
        120
      ],
      "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true
      },
    }
   ```

3. Restart Visual Studio Code for the changes to take effect.

> Note: The extension [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) is not required as it is already integrated with the ESLint configuration.