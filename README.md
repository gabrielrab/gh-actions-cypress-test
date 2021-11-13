# 🧪 React + Cypress + Github Actions

<img alt="Logo" align="right" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" width="128" />

This is a project that shows the use of automated tests using React + Cypress, and running the tests both in the cli and in a CI process using GitHub Actions.

## Folder structure

- `cypress`: folder containing all test files.
- `src`: default React folder containing application files.
- `.github`: folder containing GitHub Actions workflow file.

## Commands

- `start`: start application.
- `build`: build the application.
- `test`: run tests with Cypress.

## Github Actions

The `ci.yml` file contains all the steps to run the tests in a simple way. You can change it as you like to meet your CI needs such as blocking a PR when tests fail or any other type of validation. [Know more](https://docs.github.com/en/actions).

```yml
name: Cypress Tests

on: [push]

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Cypress run
        uses: cypress-io/github-action@v2
        with:
          build: npm run build
          start: npm start
```

Created by @gabrielrab 🚀
