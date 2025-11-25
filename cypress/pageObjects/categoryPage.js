export class CategoryPage{

    selectProductOnCategoryPage(product){
        cy.get('[data-test="product-name"]')
          .filter((index, el) => el.innerText.trim() === product)
          .should('have.length', 1)          // เจออันเดียว
          .click();
        cy.contains('[data-test="product-name"]', product).should('be.visible');
        
  }
}

export default new CategoryPage()