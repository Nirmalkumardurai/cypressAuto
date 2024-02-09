import { any } from "cypress/types/bluebird";

export class orangeHRM {

    webLocator = {

        userName: "input[placeholder='Username']",
        passWord: "input[placeholder='Password']",
        submitButton: "button[type='Submit']"
    }

    visitURL(){
        cy.visit(Cypress.env('URL'));
    }
    enterUsername(username: any) {
        cy.get(this.webLocator.userName)
            .type(username)
    }

    enterPassword(Password: any) {
        cy.get(this.webLocator.passWord)
            .type(Password);
    }
    Submit() {
        cy.get(this.webLocator.submitButton)
            .click()
    }
}