const mongoose = require('mongoose')
 const articleSchema = new mongoose.Schema({
    title: {
        type:String,
    required: true,
    },
    description:{
        type: String,

    },
    markdown:{
        type: String,
        required: true
    }
 })
 const Articles = mongoose.model('Article', articleSchema)
 module.exports = Articles