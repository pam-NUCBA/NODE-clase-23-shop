import Product from "../models/Product.js";
import expressAsyncHandler from "express-async-handler";

const getProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getOneProduct = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    //*lo interesante es que solo va a tirar error si mantiene el formato correcto de largo de caracteres
    //*estas líneas una vez que tenemos el middleware las podemos cambiar
    res.status(404)
    // .json({ msg: "product not found" });
   throw new Error('product not founnnnnnd') 
  }
});

export { getOneProduct, getProducts };
