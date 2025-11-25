export class ProductPage{

    addToCartOnProductPage(product){
        cy.get('[data-test="add-to-cart"]')
          .scrollIntoView()
          .should('be.visible')
          .click();
        cy.get('[role="alert"]', { timeout: 20000 })
          .should('contain', 'Product added to shopping cart.')
          .should('be.visible');
        cy.get('[role="alert"]', { timeout: 10000 }).should('not.exist');

                    }
}

export default new ProductPage()