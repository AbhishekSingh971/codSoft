const mongoose = require('mongoose');
const project_schema = new mongoose.Schema({
    name: {
        type:String
    },
    email: {
        type:String
    }
    , photo: {
        type:Array
    },
    text: {
        type: String
    },
    title: {
        type:String
    }
})
const project = mongoose.model('project', project_schema)
module.exports = project;