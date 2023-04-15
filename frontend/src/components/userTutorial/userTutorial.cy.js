import UserTutorial from "./userTutorial";

describe("UserTutorial", () => {
  it("loads the carousel on the screen", () => {
    cy.mount(<UserTutorial />);
    cy.get("#user-tutorial").should("exist");
  });

  it("first image of user sat in front of screen loads with title and text", () => {
    cy.mount(<UserTutorial />);
    cy.get("#user-img")
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
    cy.get("#first-image-caption").should("exist");
    cy.get("#first-image-caption").should("have.text", "To Get Started");
    cy.get("#first-image-instructions").should(
      "have.text",
      "Sit facing your webcam"
    );
  });
});
