export class RentalPage{

    selectProductOnRentalPage(product){
        cy.get('.card-title')
          .filter((index, el) => el.innerText.trim() === product)
          .should('have.length', 1)          // เจออันเดียว
          .click();
        cy.contains('[data-test="product-name"]', product).should('be.visible');
        
  }
}

export default new RentalPage()