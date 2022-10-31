const router = require("express").Router();
const Products = require("../models/Products");
const verifyToken = require("./verifyToken");

router.get("/", verifyToken, async(req, res)=>{
    const all = await Products.find({})
    if(!all) return res.status(400).send("You need to Login First !!")
    res.send(all);
})
module.exports = router;