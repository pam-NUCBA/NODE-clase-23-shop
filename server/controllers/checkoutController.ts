// import Checkout from "../models/Checkout";
import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import mercadopago from "mercadopago";

//*vamos a tener que hacer auth de user y password para enviar un token que se va a guardar en el client

//? POST: process payment:
//? api/payment/process_payment
// const postProcessPayment = expressAsyncHandler(
//   async (req: Request, res: Response): Promise<void> => {
//     let payment_data = {
//         transaction_amount: Number(req.body.transactionAmount),
//         token: req.body.token,
//         description: req.body.description,
//         installments: Number(req.body.installments),
//         payment_method_id: req.body.paymentMethodId,
//         issuer_id: req.body.issuerId,
//         payer: {
//           email: req.body.payer.email,
//           identification: {
//             type: req.body.payer.identification.docType,
//             number: req.body.payer.identification.docNumber
//           }
//         }
//       };
    
//       mercadopago.payment.save(payment_data)
//         .then(function(response) {
//           res.status(response.status).json({
//             status: response.body.status,
//             message: response.body.status_detail,
//             id: response.body.id
//           });
//         })
//         .catch(function(error) {
//           res.status(error.status).send(error);
//         });
//   }
// );

const createPreference = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {

	let preference: any;
  
  preference = {
		items: [{
			title: req.body.description,
			unit_price: Number(req.body.price),
			quantity: Number(req.body.quantity),
		}],
		back_urls: {
			"success": "http://localhost:8080/feedback",
			"failure": "http://localhost:8080/feedback",
			"pending": "http://localhost:8080/feedback"
		},
		auto_return: 'approved',
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({id :response.body.id})
		}).catch(function (error) {
			console.log(error);
		});
});

const feedback = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {
	 res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	})
});

export {
  // postProcessPayment,
  createPreference,
  feedback
};
