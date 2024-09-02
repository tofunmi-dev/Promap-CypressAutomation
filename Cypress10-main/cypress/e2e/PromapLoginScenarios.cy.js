/// <reference types="cypress" /> 


describe("This test is to validate the login functions on the promap website", () => {
    it("Verify that the register page is asper ui design", () => {
        //cypress visits url
        cy.visit("https://www2.promap.co.uk/#/login");
        // user accepts cookies
        cy.get('#onetrust-policy-text').should("be.visible")
        cy.get('#onetrust-accept-btn-handler').click()
        //User can view all the options
        cy.get('[data-test="login-register"]').click()
        cy.contains('Create an account')
        cy.contains('Email address')
        cy.contains('Confirm email')
        cy.contains('Password')
        cy.contains('Confirm Password')
        cy.get('[data-test="reg-button"]').should("be.visible")

    });
    it("Verify that users can register for a promap account successfully ", () => {
        //cypress visits url
        cy.visit("https://www2.promap.co.uk/#/login");
        // user accepts cookies
        cy.get('#onetrust-policy-text').should("be.visible")
        cy.get('#onetrust-accept-btn-handler').click()
        //User clicks on the register option
        cy.get('[data-test="login-register"]').click()
        cy.contains('Create an account')
        cy.get('[data-test="regemailaddress"]').type("Tofunmi37@gmail.com")
        cy.get('[data-test="regconfirmemail"]').type("Tofunmi37@gmail.com")
        cy.get('[data-test="regpassword"]').type("Tofunmi1234")
        cy.get('[data-test="regconfirmpassword"]').type("Tofunmi1234")
        cy.get('.error-message-display-area.ng-tns-c83-27 > .input-wrapper > .form-field-overlays > .suffix > .register-eye-icon > lmk-ui-icon').should("be.visible")
        cy.get('[style="width: 304px; height: 78px;"] > div > iframe').should("be.visible")
        cy.get('[data-test="reg-button"]').click()

    });

    it("Verify that registered users can login successfully", () => {
        //cypress visits url
        cy.visit("https://www2.promap.co.uk/#/login");
        // user accepts cookies
        cy.get('#onetrust-policy-text').should("be.visible")
        cy.get('#onetrust-accept-btn-handler').click()
        //User clicks on the username field 
        cy.get('[data-test="login-username"]').type("Tofunmi37@gmail.com")
        //User clicks on password field 
        cy.get('[data-test="login-password"]').type("Tofunmi1234")
        cy.get('.login-eye-icon > lmk-ui-icon').should("be.visible")
        //User clicks on the login button
        cy.get('[data-test="login-btn"]').click()
        // additional details page for first time users pop up
        // cy.contains('Additional details')
        // cy.get('[data-test="reg-ad-firstName"]').type('Tofunmi')
        // cy.get('[data-test="reg-ad-lastName"]').type('Akodu')
        // cy.get('[data-test="reg-ad-usage-select"] > .mat-select-trigger').click()
        // cy.get('#mat-option-21').click()
        // cy.get('[data-test="reg-ad-terms-cbox"] > .mat-checkbox-layout > .mat-checkbox-inner-container').click()
        // cy.get('[data-test="reg-ad-button"]').click()

    });

    // it("Verify that registered users can login successfully", () => {
    //     //cypress visits url
    //     cy.visit("https://www2.promap.co.uk/#/login");
    //     // user accepts cookies
    //     cy.get('#onetrust-policy-text').should("be.visible")
    //     cy.get('#onetrust-accept-btn-handler').click()
    //     //User clicks on the username field 
    //     cy.get('[data-test="login-username"]').type("Tofunmi37@gmail.com")
    //     //User clicks on password field 
    //     cy.get('[data-test="login-password"]').type("Tofunmi1234")
    //     cy.get('.login-eye-icon > lmk-ui-icon').should("be.visible")
    //     //User clicks on the login button
    //     cy.get('[data-test="login-btn"]').click()
    //     // additional details page for first time users pop up


    // });

});