context("ChangeFlavour", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("works properly", () => {
    cy.findByPlaceholderText("Search").type("20Z PT 24LS_CHRY COKE");

    cy.findAllByTestId("product-row").should("have.length", 2);

    cy.findAllByTestId("product-row")
      .eq(0)
      .click();

    cy.document().toMatchImageSnapshot();

    cy.findAllByTestId("product-row")
      .eq(0)
      .click();

    cy.document().toMatchImageSnapshot();

    cy.findByPlaceholderText("Search").type("{selectall}{backspace}");

    cy.document().toMatchImageSnapshot();
  });
});
