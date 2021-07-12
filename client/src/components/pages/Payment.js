import React from 'react'

const Payment = () => {
    return (
        <>
              <section class="shopping-cart dark">
        <div class="container container__result">
          <div class="block-heading">
            <h2>Payment Result</h2>
            <p>This is an example of a Mercado Pago integration</p>
          </div>
          <div class="content">
            <div class="row">
              <div class="col-md-12 col-lg-12">
                <div class="items product info product-details">
                  <div class="row justify-content-md-center">
                    <div class="col-md-4 product-detail">
                      <div class="product-info">
                        <br/>
                        <p><b>Status: </b><span id="payment-status"></span></p>
                        <p><b>Detail: </b><span id="payment-detail"></span></p>
                        <br/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        </>
    )
}

export default Payment
