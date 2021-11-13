# 🧪 React + Cypress + Github Actions

<img alt="Logo" align="right" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" width="128" />

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
