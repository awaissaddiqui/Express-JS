const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    id:{
        type:Number,
        min:1,
        max: 30
        
    }
})

module.exports = mongoose.model("Products", productSchema)