describe("Increment Counter", () => {
  const baseUrl = "http://localhost:3000"; // assuming the app is running locally on port 3000

  it("increments the counter when the button is clicked", () => {
    cy.visit(baseUrl);
    cy.get('#incrementBtn').click();
    cy.get('#counter').should('have.text', '1');
  });
});
