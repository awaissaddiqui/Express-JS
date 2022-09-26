const { regValidation } = require('../validation');
const User = require('../models/User')
const userRoutes = require("express").Router()
const bcrypt = require('bcrypt')

userRoutes.get("/register", async(req, res)=>{
    const {name, email,password , address}= req.body;
    const {error} = regValidation(req.body)
    if(error) return res.send(error.details[0].message)

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt)
     
    const findUser=await User.findOne({email:req.body.email})
    if(findUser) return res.send("email already exist ")
    
    const user = new User({
        name,
        email,
        password: hash,
        address
    })

    try{
        const savedUser=  await user.save()
        res.send(savedUser)
    }
    catch{
        res.status(400).send("error")
    }
    
})
userRoutes.post("/register", (req, res)=>{

})
userRoutes.patch("/register", (req, res)=>{

})
userRoutes.delete("/register", (req, res)=>{

})
userRoutes.get("/login", (req, res)=>{

})
userRoutes.post("/login", (req, res)=>{

})
userRoutes.delete("/login", (req, res)=>{

})
userRoutes.patch("/login", (req, res)=>{

})

module.exports = userRoutes;