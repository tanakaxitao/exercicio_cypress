/// <reference types="cypress" />
describe("Testes para a página de candidatura", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });
  it("Deve preencher o Formulário", () => {
    cy.get('[type="text"]').type("gabriel Leonardo");
    cy.get('[type="email"]').type("tanakaamc1@gmail.com");
    cy.get('[type="tel"]').type("21 997230426");
    cy.get(".adicionar").click();
  });
  it("Deve remover um contato", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .delete").click();
    cy.get(":nth-child(3) > .sc-gueYoa > .delete").click();
    cy.get(":nth-child(4) > .sc-gueYoa > .delete").click();
  });
  it("Deve editar o contato", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click;
    cy.get(":nth-child(3) > .sc-gueYoa > .edit").click;
    cy.get(":nth-child(4) > .sc-gueYoa > .edit").click;
    cy.get('[type="text"]').type("lucas").end();
    cy.get('[type="email"]').type("lucas1@gmail.com");
    cy.get('[type="tel"]').type("21 930185973");
  });
});
