import React from "react";

const Checkout = () => {
  return (
    <>
<section class="payment-form dark">
        <div class="container__payment">
          <div class="block-heading">
            <h2>Card Payment</h2>
            <p>This is an example of a Mercado Pago integration</p>
          </div>
          <div class="form-payment">
            <div class="products">
                {/* mostrar lo que hay en el cart acá */}
              <h2 class="title">Summary</h2>
              <div class="item">
                <span class="price" id="summary-price"></span>
                <p class="item-name">Book x <span id="summary-quantity"></span></p>
              </div>
              <div class="total">Total<span class="price" id="summary-total"></span></div>
            </div>
            <div class="payment-details">
              <form id="form-checkout">
                  <h3 class="title">Buyer Details</h3>
                  <div class="row">
                    <div class="form-group col">
                      <input id="form-checkout__cardholderEmail" name="cardholderEmail" type="email" class="form-control"/>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-sm-5">
                      <select id="form-checkout__identificationType" name="identificationType" class="form-control"></select>
                    </div>
                    <div class="form-group col-sm-7">
                      <input id="form-checkout__identificationNumber" name="docNumber" type="text" class="form-control"/>
                    </div>
                  </div>
                  <br/>
                  {/* acá se podría usar el currencyformatter */}
                  <h3 class="title">Card Details</h3>
                  <div class="row">
                    <div class="form-group col-sm-8">
                      <input id="form-checkout__cardholderName" name="cardholderName" type="text" class="form-control"/>
                    </div>
                    <div class="form-group col-sm-4">
                      <div class="input-group expiration-date">
                        <input id="form-checkout__cardExpirationMonth" name="cardExpirationMonth" type="text" class="form-control"/>
                        <span class="date-separator">/</span>
                        <input id="form-checkout__cardExpirationYear" name="cardExpirationYear" type="text" class="form-control"/>
                      </div>
                    </div>
                    <div class="form-group col-sm-8">
                      <input id="form-checkout__cardNumber" name="cardNumber" type="text" class="form-control"/>
                    </div>
                    <div class="form-group col-sm-4">
                      <input id="form-checkout__securityCode" name="securityCode" type="text" class="form-control"/>
                    </div>
                    <div id="issuerInput" class="form-group col-sm-12 hidden">
                      <select id="form-checkout__issuer" name="issuer" class="form-control"></select>
                    </div>
                    <div class="form-group col-sm-12">
                      <select id="form-checkout__installments" name="installments" type="text" class="form-control"></select>
                    </div>
                    <div class="form-group col-sm-12">
                      <input type="hidden" id="amount" />
                      <input type="hidden" id="description" />
                      <br/>
                      <button id="form-checkout__submit" type="submit" class="btn btn-primary btn-block">Pay</button>
                      <br/>
                      {/* cambiar a link y que vuelva al cart */}
                      <a id="go-back">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 10 10" class="chevron-left">
                          <path fill="#009EE3" fill-rule="nonzero"id="chevron_left" d="M7.05 1.4L6.2.552 1.756 4.997l4.449 4.448.849-.848-3.6-3.6z"></path>
                        </svg>
                        Go back to Shopping Cart
                      </a>
                    </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
