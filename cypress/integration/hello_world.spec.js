/// <reference types="cypress">

describe("Application test", () => {
  it(`Visit index page`, () => {
    cy.visit(`/`);
  });

  it(`Validate index page texts`, () => {
    cy.get(".App-header > :nth-child(2)").contains(`Hello World!`);
    cy.get(".App-header > :nth-child(3)").contains(
      `This project propose is create automated test using Cypress + React + Github Actions`
    );
    cy.get(".App-link").contains("Go to GitHub Repository");
  });

  it(`Visit Github repo page`, () => {
    cy.get(".App-link").click();
  });
});
