//*traemos todo porque no está conectada al server
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'

import User from './models/User.js'
import Order from './models/Order.js'
import Product from './models/Product.js'

import dbConnection from './config/db.js'

dotenv.config()
dbConnection()

const importData = async()=> {
    try {
        await Order.deleteMany()
        await User.deleteMany()
        await Product.deleteMany()

        const newUsers = await User.insertMany(users)
        const adminUser = newUsers[0]._id
        const newProducts = products.map(product => {
            return {...product, user:adminUser}
        })

        await Product.insertMany(newProducts)
        console.log('funciona!'.trap);
        process.exit()
    } catch (error) {
        console.error(error.red);
        process.exit(1)
    }
}

const destroyData = async()=> {
    try {
        await Order.deleteMany()
        await User.deleteMany()
        await Product.deleteMany()
        console.log('data borrada!'.trap);
        process.exit()
    } catch (error) {
        console.error(error.red);
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}