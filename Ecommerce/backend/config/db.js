const mongoose = require('mongoose');
const colors = require('colors')
const dotenv = require('dotenv')

dotenv.config()


const connection_string = process.env.CONNECTION_STRING || "mongodb+srv://m001-student:abhi@sandbox.1tynyfo.mongodb.net/Ecommerce";

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(connection_string);
        console.log(`Connected To Database ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Error in Connecting Database ${error}`.bgRed.white);
    }
}

module.exports = connectDB;   