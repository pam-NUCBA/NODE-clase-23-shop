import React, { useEffect, useRef } from "react";

const Checkout = () => {

  return(<></>)

//   const cardNumber = useRef(null);
//   const paymentMethodId = useRef(null);
//   const installments = useRef(null);
//   const paymentForm = useRef(null);

//   useEffect(() => {
//     const key = process.env.REACT_APP_MP_ACCESS_TOKEN;
//     console.log(key);
//   }, []);

//   //*metodo tarjeta

//   function guessPaymentMethod(event) {
//     let cardnumber = cardNumber.value;
//     if (cardnumber.length >= 6) {
//       let bin = cardnumber.substring(0, 6);
//       window.Mercadopago.getPaymentMethod(
//         {
//           bin: bin,
//         },
//         setPaymentMethod
//       );
//     }
//   }

//   function setPaymentMethod(status, response) {
//     if (status == 200) {
//       let paymentMethod = response[0];
//       paymentMethodId.value = paymentMethod.id;

//       getIssuers(paymentMethod.id);
//     } else {
//       alert(`payment method info error: ${response}`);
//     }
//   }

//   //*issuer id
//   function getIssuers(paymentMethodId) {
//     window.Mercadopago.getIssuers(paymentMethodId, setIssuers);
//   }

//   function setIssuers(status, response) {
//     if (status == 200) {
//       let issuerSelect = document.getElementById("issuer");
//       response.forEach((issuer) => {
//         let opt = document.createElement("option");
//         opt.text = issuer.name;
//         opt.value = issuer.id;
//         issuerSelect.appendChild(opt);
//       });

//       getInstallments(
//         document.getElementById("paymentMethodId").value,
//         document.getElementById("transactionAmount").value,
//         issuerSelect.value
//       );
//     } else {
//       alert(`issuers method info error: ${response}`);
//     }
//   }

//   //*cuotas
//   function getInstallments(paymentMethodId, transactionAmount, issuerId) {
//     window.Mercadopago.getInstallments(
//       {
//         payment_method_id: paymentMethodId,
//         amount: parseFloat(transactionAmount),
//         issuer_id: parseInt(issuerId),
//       },
//       setInstallments
//     );
//   }

//   function setInstallments(status, response) {
//     if (status == 200) {
//       installments.options.length = 0;
//       response[0].payer_costs.forEach((payerCost) => {
//         let opt = document.createElement("option");
//         opt.text = payerCost.recommended_message;
//         opt.value = payerCost.installments;
//         installments.appendChild(opt);
//       });
//     } else {
//       alert(`installments method info error: ${response}`);
//     }
//   }

//   //*token tarjeta
//   let doSubmit = false;

//   function getCardToken(event) {
//     event.preventDefault();
//     if (!doSubmit) {
//       let $form = paymentForm;
//       window.Mercadopago.createToken($form, setCardTokenAndPay);
//       return false;
//     }
//   }

//   function setCardTokenAndPay(status, response) {
//     if (status == 200 || status == 201) {
//       let form = paymentForm;
//       let card = document.createElement("input");
//       card.setAttribute("name", "token");
//       card.setAttribute("type", "hidden");
//       card.setAttribute("value", response.id);
//       form.appendChild(card);
//       doSubmit = true;
//       form.submit();
//     } else {
//       alert("Verify filled data!\n" + JSON.stringify(response, null, 4));
//     }
//   }

//   return (
//     <>
//       {/* este form action lo vamos a transformar a react */}
//       <form
//         action="/process_payment"
//         method="post"
//         id="paymentForm"
//         ref={paymentForm}
//         onSubmit={getCardToken}
//       >
//         <h3>Detalles del comprador</h3>
//         <div>
//           <div>
//             <label htmlFor="email">E-mail</label>
//             <input id="email" name="email" type="text" value="test@test.com" />
//           </div>
//           <div>
//             <label htmlFor="docType">Tipo de documento</label>
//             <select
//               id="docType"
//               name="docType"
//               data-checkout="docType"
//               type="text"
//             ></select>
//           </div>
//           <div>
//             <label htmlFor="docNumber">Número de documento</label>
//             <input
//               id="docNumber"
//               name="docNumber"
//               data-checkout="docNumber"
//               type="text"
//             />
//           </div>
//         </div>
//         <h3>Detalles de la tarjeta</h3>
//         <div>
//           <div>
//             <label htmlFor="cardholderName">Titular de la tarjeta</label>
//             <input
//               id="cardholderName"
//               data-checkout="cardholderName"
//               type="text"
//             />
//           </div>
//           <div>
//             <label htmlFor="">Fecha de vencimiento</label>
//             <div>
//               <input
//                 type="text"
//                 placeholder="MM"
//                 id="cardExpirationMonth"
//                 data-checkout="cardExpirationMonth"
//                 onselectstart="return false"
//                 onPaste="return false"
//                 onCopy="return false"
//                 onCut="return false"
//                 onDrag="return false"
//                 onDrop="return false"
//                 autoComplete="false"
//               />
//               <span className="date-separator">/</span>
//               <input
//                 type="text"
//                 placeholder="YY"
//                 id="cardExpirationYear"
//                 data-checkout="cardExpirationYear"
//                 onselectstart="return false"
//                 onPaste="return false"
//                 onCopy="return false"
//                 onCut="return false"
//                 onDrag="return false"
//                 onDrop="return false"
//                 autoComplete="false"
//               />
//             </div>
//           </div>
//           <div>
//             <label htmlFor="cardNumber">Número de la tarjeta</label>
//             <input
//               type="text"
//               id="cardNumber"
//               data-checkout="cardNumber"
//               ref={cardNumber}
//               onChange={guessPaymentMethod}
//               onselectstart="return false"
//               onPaste="return false"
//               onCopy="return false"
//               onCut="return false"
//               onDrag="return false"
//               onDrop="return false"
//               autoComplete="false"
//             />
//           </div>
//           <div>
//             <label htmlFor="securityCode">Código de seguridad</label>
//             <input
//               id="securityCode"
//               data-checkout="securityCode"
//               type="text"
//               onselectstart="return false"
//               onPaste="return false"
//               onCopy="return false"
//               onCut="return false"
//               onDrag="return false"
//               onDrop="return false"
//               autoComplete="false"
//             />
//           </div>
//           <div id="issuerInput">
//             <label htmlFor="issuer">Banco emisor</label>
//             <select id="issuer" name="issuer" data-checkout="issuer"></select>
//           </div>
//           <div>
//             <label htmlFor="installments">Cuotas</label>
//             <select
//               type="text"
//               id="installments"
//               name="installments"
//               ref={installments}
//             ></select>
//           </div>
//           <div>
//             <input
//               type="hidden"
//               name="transactionAmount"
//               id="transactionAmount"
//               value="100"
//             />
//             <input
//               type="hidden"
//               name="paymentMethodId"
//               id="paymentMethodId"
//               ref={paymentMethodId}
//             />
//             <input type="hidden" name="description" id="description" />
//             <br />
//             <button type="submit">Pagar</button>
//             <br />
//           </div>
//         </div>
//       </form>
//     </>
//   );
};

export default Checkout;
