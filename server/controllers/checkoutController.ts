import Checkout from "../models/Checkout";
import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import mercadopago from "mercadopago";

//*vamos a tener que hacer auth de user y password para enviar un token que se va a guardar en el client

//? POST: process payment:
//? api/payment/process_payment
const postProcessPayment = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    let payment_data = {
      transaction_amount: Number(req.body.transactionAmount),
      token: req.body.token,
      description: req.body.description,
      installments: Number(req.body.installments),
      payment_method_id: req.body.paymentMethodId,
      issuer_id: req.body.issuerId,
      payer: {
        email: req.body.payer.email,
        identification: {
          type: req.body.payer.identification.docType,
          number: req.body.payer.identification.docNumber,
        },
      },
    };

    mercadopago.payment
      .save(payment_data)
      .then((response) => {
        res.status(response.status).json({
          status: response.body.status,
          message: response.body.status_detail,
          id: response.body.id,
        });
      })
      .catch((error) => {
        res.status(error.status).send(error);
      });
  }
);

//? POST:
//? api/payment/checkout
const postCheckoutButton = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {}
);

//? POST:
//? api/payment/pagar
const postCreatePayment = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {}
);

//? POST
//? api/payment/wallet
const postWalletButton = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {}
);

export {
  postCheckoutButton,
  postWalletButton,
  postCreatePayment,
  postProcessPayment,
};
