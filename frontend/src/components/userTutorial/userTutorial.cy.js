import UserTutorial from "./userTutorial";

describe("UserTutorial", () => {
  it("loads the carousel on the screen", () => {
    cy.mount(<UserTutorial />);
    cy.get("#user-tutorial").should("exist");
  });

  it("first image of user sat in front of screen loads with title and text", () => {
    cy.mount(<UserTutorial />);
    cy.get(".first-image")
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });
});
