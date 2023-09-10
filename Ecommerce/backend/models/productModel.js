const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount:{
        type: Number,
    },
    category:{
        type: mongoose.ObjectId,
        ref: 'Category'
    },
    quantity:{
        type: Number,
        required: true
    },
    photo:{
        data:Buffer,
        contentType: String
    },
    shipping:{
        type: Boolean
    }
},{timestamps: true})

module.exports = mongoose.model('Product', productSchema)