const Products = require("../models/Products");
const verifyToken = require("./verifyToken");

const productRouter = require("express").Router();


productRouter.get("/", verifyToken, async(req, res)=>{
    const pid = req.query.pid;
    // console.log(pid);
    const product = await Products.findOne({id: pid})
     if(!product) return res.status(400).send("No product found")

    res.send(product)
})
module.exports = productRouter;