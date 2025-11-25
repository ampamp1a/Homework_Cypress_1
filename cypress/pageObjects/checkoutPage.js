export class CheckoutPage{

    //Step Cart
    expectProductInCart(productName){
        cy.contains('[data-test="product-title"]', productName).should('be.visible');
        
    }

    clickProceedToCheckout(){
        cy.contains('[data-test="proceed-1"]', 'Proceed to checkout').should('be.visible').click();
    }

    //Step Sign in
    clickContinueAsGuest(){
        cy.get('a[role="tab"]').contains('Continue as Guest').click();
    }

    fillGuestInfo(emailAddress, firstName, lastName){
        cy.contains('.label', 'Sign in').should('be.visible');
        cy.get('[data-test="guest-email"]').clear().type(emailAddress);
        cy.get('[data-test="guest-first-name"]').clear().type(firstName);
        cy.get('[data-test="guest-last-name"]').clear().type(lastName);

    }

    submitGuestInfo(){
        cy.contains('[data-test="guest-submit"]', 'Continue as Guest').should('be.visible').click();
    }

    clickProceedToCheckout2(){
        cy.contains('[data-test="proceed-2-guest"]', 'Proceed to checkout').should('be.visible').click();
    }

    //Step Billing Address

    fillAddressInfo(street,city,state,country,postcode){
        cy.contains('Billing Address').should('be.visible');
        cy.get('[data-test="street"]').clear().type(street);
        cy.get('[data-test="city"]').clear().type(city);
        cy.get('[data-test="state"]').clear().type(state);    
        cy.get('[data-test="country"]').clear().type(country);
        cy.get('[data-test="postal_code"]').clear().type(postcode);    
    }

    clickProceedToCheckout3(){
        cy.contains('[data-test="proceed-3"]', 'Proceed to checkout').should('be.visible').click();
    }


    //Step Payment

    selectPaymentByBankTransfer(bankName,accountName,accountNumber){
        cy.get('[data-test="payment-method"]').select('bank-transfer'); 
        cy.contains('Payment').should('be.visible');
        cy.get('[data-test="bank_name"]').clear().type(bankName);
        cy.get('[data-test="account_name"]').clear().type(accountName);
        cy.get('[data-test="account_number"]').clear().type(accountNumber);  

    }

    selectPaymentByCashOnDelivery(){
        cy.get('[data-test="payment-method"]').select('cash-on-delivery');
    }

    selectPaymentByCreditCard(creditCardNumber,expirationDate,cvv,cardHolderName){
        cy.get('[data-test="payment-method"]').select('credit-card');
        cy.contains('Payment').should('be.visible');
        cy.get('[data-test="credit_card_number"]').clear().type(creditCardNumber);
        cy.get('[data-test="expiration_date"]').clear().type(expirationDate);
        cy.get('[data-test="cvv"]').clear().type(cvv);  
        cy.get('[data-test="card_holder_name"]').clear().type(cardHolderName);  
       
    }

    selectPaymentByBuyNowPayLater(month){
        cy.get('[data-test="payment-method"]').select('buy-now-pay-later');
        cy.get('[data-test="monthly_installments"]').select(`${month} Monthly Installments`);
        cy.contains('Payment').should('be.visible');
 
    }  

    selectPaymentByGiftCard(giftCardNumber,validationCode){
        cy.get('[data-test="payment-method"]').select('gift-card');
        cy.contains('Payment').should('be.visible');
        cy.get('[data-test="gift_card_number"]').clear().type(giftCardNumber);
        cy.get('[data-test="validation_code"]').clear().type(validationCode);        
        
    }  
    
    clickConfirm(){
        cy.contains('[data-test="finish"]', 'Confirm').should('be.visible').click();
    }

    verifyPayment(){
        cy.contains('[data-test="payment-success-message"]', 'Payment was successful').should('be.visible');
    }

    verifyOrderSuccess(){
        cy.get('#order-confirmation')
        .invoke('text')
        .then(text => {

            // 1) จัดรูปแบบข้อความให้เป็นบรรทัดเดียว
            const clean = text.replace(/\s+/g, ' ').trim();

            // 2) ตรวจข้อความเต็มประโยคด้วย regex
            expect(clean).to.match(/Thanks for your order! Your invoice number is INV-\d+/);

            // 3) ดึงเฉพาะเลข Invoice ออกมา
            const invoice = clean.match(/INV-\d+/)[0];
            cy.log('Invoice Number: ' + invoice);

            // 4) เก็บ invoice ไว้ใช้ต่อ
            cy.wrap(invoice).as('invoiceNumber');
  });


    }

}

export default new CheckoutPage()