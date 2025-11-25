import HomePage from '../../pageObjects/homePage'
import CategoryPage from '../../pageObjects/categoryPage'
import RentalPage from '../../pageObjects/rentalPage';
import ProductPage from '../../pageObjects/productPage'
import CheckoutPage from '../../pageObjects/checkoutPage';

describe('Purchase tool shop', () => {


 // Case1:  Purchase Category Hand Tools pay by Bank transfer
    it('Purchase Category Hand Tools pay by Bank transfer', ()=> {
        const customerKey = 'Customer1';   // เปลี่ยนตรงนี้ได้

        //1. Open website
        HomePage.visit();

        //2. Select Category
        HomePage.selectCategoryOnHomepage('Hand Tools','hand-tools');

        //3. Select Product
        CategoryPage.selectProductOnCategoryPage('Hammer');

        // 4. Click button Add to Cart
        ProductPage.addToCartOnProductPage();

        //5. Click cart icon
        HomePage.clickCartIcon();
        CheckoutPage.expectProductInCart('Hammer');

        //6. Click Procedd to checkout
        CheckoutPage.clickProceedToCheckout();

        //7. Click tab Guest
        CheckoutPage.clickContinueAsGuest();
        
        //8. Fill Guest Info and submit
        cy.fixture('guestInfo').then(data => {
        const customer = data[customerKey];

        CheckoutPage.fillGuestInfo(
            customer.emailAddress,
            customer.firstName,
            customer.lastName
        );
        });
        CheckoutPage.submitGuestInfo();

        //9. Click Procedd to checkout
        CheckoutPage.clickProceedToCheckout2();

        //10. Fill Address Info
        cy.fixture('guestInfo').then(data => {
        const customer = data[customerKey];
        CheckoutPage.fillAddressInfo(
            customer.street,
            customer.city,
            customer.state,
            customer.country,
            customer.postcode
        );
        });  
        
        //11. Click Procedd to checkout
        CheckoutPage.clickProceedToCheckout3();   
        
        //12. Select Payment by Bank Transfer
        cy.fixture('guestInfo').then(data => {
        const customer = data[customerKey];
        CheckoutPage.selectPaymentByBankTransfer(
            customer.bankName,
            customer.accountName,
            customer.accountNumber
        );
        });
        
        //13. Click Confirm
        CheckoutPage.clickConfirm();

        //14. Verify Payment was successful
        CheckoutPage.verifyPayment();

        //15. Click Confirm
        CheckoutPage.clickConfirm();

        //16. Verify Order Success
        CheckoutPage.verifyOrderSuccess();
    });



// Case2:  Purchase Category Hand Tools and Power Tools pay by Cash on Delivery
    it('Purchase Category Hand Tools and Power Tools', ()=> {
        const customerKey = 'Customer2';   // เปลี่ยนตรงนี้ได้

        //1. Open website
        HomePage.visit();

        //2. Select Category
        HomePage.selectCategoryOnHomepage('Hand Tools','hand-tools');

        //3. Select Product
        CategoryPage.selectProductOnCategoryPage('Thor Hammer');

        // 4. Click button Add to Cart
        ProductPage.addToCartOnProductPage();

        //5. Select Category
        HomePage.selectCategoryOnHomepage('Power Tools','power-tools');

        //6. Select Product
        CategoryPage.selectProductOnCategoryPage('Sheet Sander');

        //7. Click button Add to Cart
        ProductPage.addToCartOnProductPage();


        //8. Click cart icon
        HomePage.clickCartIcon();
        CheckoutPage.expectProductInCart('Thor Hammer');
        CheckoutPage.expectProductInCart('Sheet Sander');

        //9. Click Procedd to checkout
        CheckoutPage.clickProceedToCheckout();

        //10. Click tab Guest
        CheckoutPage.clickContinueAsGuest();
        
        //11. Fill Guest Info and submit
        cy.fixture('guestInfo').then(data => {
        const customer = data[customerKey];

        CheckoutPage.fillGuestInfo(
            customer.emailAddress,
            customer.firstName,
            customer.lastName
        );
        });
        CheckoutPage.submitGuestInfo();

        //12. Click Procedd to checkout
        CheckoutPage.clickProceedToCheckout2();

        //13. Fill Address Info
        cy.fixture('guestInfo').then(data => {
        const customer = data[customerKey];
        CheckoutPage.fillAddressInfo(
            customer.street,
            customer.city,
            customer.state,
            customer.country,
            customer.postcode
        );
        });  
        
        //14. Click Procedd to checkout
        CheckoutPage.clickProceedToCheckout3();   
        
        //15. Select Payment by Cash on Delivery
        CheckoutPage.selectPaymentByCashOnDelivery();

        
        //16. Click Confirm
        CheckoutPage.clickConfirm();

        //17. Verify Payment was successful
        CheckoutPage.verifyPayment();

        //18. Click Confirm
        CheckoutPage.clickConfirm();

        //19. Verify Order Success
        CheckoutPage.verifyOrderSuccess();
    });


// Case3:  Purchase Category Hand Tools and Power Tools and Other pay by Credit Card 
    it('Purchase Category Hand Tools, Power Tools and Other pay by Credit Card ', ()=> {
        const customerKey = 'Customer3';   // เปลี่ยนตรงนี้ได้


        //1. Open website
        HomePage.visit();

        //2. Select Category
        HomePage.selectCategoryOnHomepage('Hand Tools','hand-tools');

        //3. Select Product
        CategoryPage.selectProductOnCategoryPage('Claw Hammer with Shock Reduction Grip');

        // 4. Click button Add to Cart
        ProductPage.addToCartOnProductPage();

        //5. Select Category
        HomePage.selectCategoryOnHomepage('Power Tools','power-tools');

        //6. Select Product
        CategoryPage.selectProductOnCategoryPage('Belt Sander');

        //7. Click button Add to Cart
        ProductPage.addToCartOnProductPage();

        //8. Select Category
        HomePage.selectCategoryOnHomepage('Other','other');

        //9. Select Product
        CategoryPage.selectProductOnCategoryPage('Super-thin Protection Gloves');

        //10. Click button Add to Cart
        ProductPage.addToCartOnProductPage();        

        //11. Click cart icon
        HomePage.clickCartIcon();
        CheckoutPage.expectProductInCart('Claw Hammer with Shock Reduction Grip');
        CheckoutPage.expectProductInCart('Belt Sander');
        CheckoutPage.expectProductInCart('Super-thin Protection Gloves');

        //12. Click Procedd to checkout
        CheckoutPage.clickProceedToCheckout();

        //13. Click tab Guest
        CheckoutPage.clickContinueAsGuest();
        
        //14. Fill Guest Info and submit
        cy.fixture('guestInfo').then(data => {
        const customer = data[customerKey];

        CheckoutPage.fillGuestInfo(
            customer.emailAddress,
            customer.firstName,
            customer.lastName
        );
        });
        CheckoutPage.submitGuestInfo();

        //15. Click Procedd to checkout
        CheckoutPage.clickProceedToCheckout2();

        //16. Fill Address Info
        cy.fixture('guestInfo').then(data => {
        const customer = data[customerKey];
        CheckoutPage.fillAddressInfo(
            customer.street,
            customer.city,
            customer.state,
            customer.country,
            customer.postcode
        );
        });  
        
        //17. Click Procedd to checkout
        CheckoutPage.clickProceedToCheckout3();   
        
        //18. Select Payment by Credit Card
        cy.fixture('guestInfo').then(data => {
        const customer = data[customerKey];
        CheckoutPage.selectPaymentByCreditCard(
            customer.creditCardNumber,
            customer.expirationDate,
            customer.cvv,
            customer.cardHolderName
        );
        });
        
        //19. Click Confirm
        CheckoutPage.clickConfirm();

        //20. Verify Payment was successful
        CheckoutPage.verifyPayment();

        //21. Click Confirm
        CheckoutPage.clickConfirm();

        //22. Verify Order Success
        CheckoutPage.verifyOrderSuccess();
    });


// Case4:  Purchase Category Rentals pay by Buy Now Pay Later
    it('Purchase Category Rentals pay by Buy Now Pay Later', ()=> {
        const customerKey = 'Customer4';   // เปลี่ยนตรงนี้ได้

        //1. Open website
        HomePage.visit();

        //2. Select Category
        HomePage.selectCategoryOnHomepage('Rentals','rentals');

        //3. Select Product
        RentalPage.selectProductOnRentalPage('Crane');

        // 4. Click button Add to Cart
        ProductPage.addToCartOnProductPage();

        //5. Click cart icon
        HomePage.clickCartIcon();
        CheckoutPage.expectProductInCart('Crane');

        //6. Click Procedd to checkout
        CheckoutPage.clickProceedToCheckout();

        //7. Click tab Guest
        CheckoutPage.clickContinueAsGuest();
        
        //8. Fill Guest Info and submit
        cy.fixture('guestInfo').then(data => {
        const customer = data[customerKey];

        CheckoutPage.fillGuestInfo(
            customer.emailAddress,
            customer.firstName,
            customer.lastName
        );
        });
        CheckoutPage.submitGuestInfo();

        //9. Click Procedd to checkout
        CheckoutPage.clickProceedToCheckout2();

        //10. Fill Address Info
        cy.fixture('guestInfo').then(data => {
        const customer = data[customerKey];
        CheckoutPage.fillAddressInfo(
            customer.street,
            customer.city,
            customer.state,
            customer.country,
            customer.postcode
        );
        });  
        
        //11. Click Procedd to checkout
        CheckoutPage.clickProceedToCheckout3();   
        
        //12. Select Payment by Buy Now Pay Later
        CheckoutPage.selectPaymentByBuyNowPayLater('12');
        
        //13. Click Confirm
        CheckoutPage.clickConfirm();

        //14. Verify Payment was successful
        CheckoutPage.verifyPayment();

        //15. Click Confirm
        CheckoutPage.clickConfirm();

        //16. Verify Order Success
        CheckoutPage.verifyOrderSuccess();
    });



// Case5:  Purchase All Category except Special Tools pay by Gift card
    it('Purchase All Category except Special Tools pay by Gift card', ()=> {
        const customerKey = 'Customer5';   // เปลี่ยนตรงนี้ได้


        //1. Open website
        HomePage.visit();

        //2. Select Category
        HomePage.selectCategoryOnHomepage('Hand Tools','hand-tools');

        //3. Select Product
        CategoryPage.selectProductOnCategoryPage('Adjustable Wrench');

        // 4. Click button Add to Cart
        ProductPage.addToCartOnProductPage();

        //5. Select Category
        HomePage.selectCategoryOnHomepage('Power Tools','power-tools');

        //6. Select Product
        CategoryPage.selectProductOnCategoryPage('Cordless Drill 24V');

        //7. Click button Add to Cart
        ProductPage.addToCartOnProductPage();

        //8. Select Category
        HomePage.selectCategoryOnHomepage('Other','other');

        //9. Select Product
        CategoryPage.selectProductOnCategoryPage('Wooden Workbench');

        //10. Click button Add to Cart
        ProductPage.addToCartOnProductPage();   
          
        //11. Select Category
        HomePage.selectCategoryOnHomepage('Rentals','rentals');

        //12. Select Product
        RentalPage.selectProductOnRentalPage('Excavator');

        //13. Click button Add to Cart
        ProductPage.addToCartOnProductPage();

        //14. Click cart icon
        HomePage.clickCartIcon();
        CheckoutPage.expectProductInCart('Adjustable Wrench');
        CheckoutPage.expectProductInCart('Cordless Drill 24V');
        CheckoutPage.expectProductInCart('Wooden Workbench');
        CheckoutPage.expectProductInCart('Excavator');

        //15. Click Procedd to checkout
        CheckoutPage.clickProceedToCheckout();

        //16. Click tab Guest
        CheckoutPage.clickContinueAsGuest();
        
        //17. Fill Guest Info and submit
        cy.fixture('guestInfo').then(data => {
        const customer = data[customerKey];

        CheckoutPage.fillGuestInfo(
            customer.emailAddress,
            customer.firstName,
            customer.lastName
        );
        });
        CheckoutPage.submitGuestInfo();

        //18. Click Procedd to checkout
        CheckoutPage.clickProceedToCheckout2();

        //19. Fill Address Info
        cy.fixture('guestInfo').then(data => {
        const customer = data[customerKey];
        CheckoutPage.fillAddressInfo(
            customer.street,
            customer.city,
            customer.state,
            customer.country,
            customer.postcode
        );
        });  
        
        //20. Click Procedd to checkout
        CheckoutPage.clickProceedToCheckout3();   
        
        //21. Select Payment by Gift Card
        cy.fixture('guestInfo').then(data => {
        const customer = data[customerKey];
        CheckoutPage.selectPaymentByGiftCard(
            customer.giftCardNumber,
            customer.validationCode
        );
        });
        
        //22. Click Confirm
        CheckoutPage.clickConfirm();

        //23. Verify Payment was successful
        CheckoutPage.verifyPayment();

        //24. Click Confirm
        CheckoutPage.clickConfirm();

        //25. Verify Order Success
        CheckoutPage.verifyOrderSuccess();
    });

});
