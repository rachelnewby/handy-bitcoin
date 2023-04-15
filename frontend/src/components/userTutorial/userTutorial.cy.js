import UserTutorial from "./userTutorial";

describe("UserTutorial", () => {
  it("loads the carousel on the screen", () => {
    cy.mount(<UserTutorial />);
    cy.get("#user-tutorial").should("exist");
  });

  it("first image of user sat in front of screen loads", () => {
    cy.mount(<UserTutorial />);
    cy.get("#img-1-user-sitting").should("exist");
  });
});
