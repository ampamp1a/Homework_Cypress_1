export class HomePage{
    visit (){
        cy.visit('/');
    }

    expectOnHomepage() {
        cy.contains('Home').should('be.visible');
        cy.contains('Categories').should('be.visible');
        cy.contains('Contact').should('be.visible');
        cy.contains('Sign in').should('be.visible');
    }

    selectCategoryOnHomepage(category,url){
        cy.get('[data-test="nav-categories"]').click();
        cy.contains(`[data-test="nav-${url}"]`, category).should('be.visible').click();  
        if (url === 'rentals') {
            cy.url().should('include', url);               // ไม่มี category/
        } else {
            cy.url().should('include', `category/${url}`); // มี category/
        }
        cy.contains('[data-test="page-title"]', category).should('be.visible');  
    }

    clickCartIcon(){
        cy.get('[data-test="nav-cart"]').click();
        cy.url().should('include', 'checkout');
        cy.contains('.label', 'Cart').should('be.visible');
        cy.contains('.label', 'Sign in').should('be.visible');
        cy.contains('.label', 'Billing Address').should('be.visible');
        cy.contains('.label', 'Payment').should('be.visible');
    }




}

export default new HomePage()