import express from 'express';
import dotenv from 'dotenv'
import products from './data/products.js'
import dbConnection from "./config/db.js";
import colors from 'colors'
https://www.npmjs.com/package/colors

dotenv.config()
const app = express();
const PORT= process.env.PORT || 8000
dbConnection()

app.get('/api/products', (req, res) => {
    //*recordemos que podemos ver los datos:
    res.json(products);
})

app.get('/api/products/:id', (req, res) => {
    //*recordemos que podemos ver los datos:
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`.yellow);
})