import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    //*es un user comun, no un admin, pero esa categoria la va a sacar de sus caracteristicas!
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    //*es un array porque son las caracteristicas del producto que tiene en su cart
    orderItems: [
      {
        name: {
          type: String,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        //*lo linkea a productos, para sacar de ahi sus caracteristicas:
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      comments: String,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    //*esto va a venir de paypal
    paymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: Date,
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: Date,
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
