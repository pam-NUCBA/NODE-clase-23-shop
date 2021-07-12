import mongoose from "mongoose";

//*acá ya van a ver que ts empieza a romper!
const checkoutSchema = new mongoose.Schema(
  {
    //*es un user comun, no un admin, pero esa categoria la va a sacar de sus caracteristicas!
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    //*es un array porque son las caracteristicas del producto que tiene en su cart
    checkoutItems: [
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
  },
  {
    timestamps: true,
  }
);

export default  mongoose.model("Checkout", checkoutSchema);
