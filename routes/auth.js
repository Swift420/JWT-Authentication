const { check, validationResult } = require('express-validator');
const {users} = require("../db")
const router = require('express').Router(); 
const bcrypt = require("bcrypt") 

router.post("/signup", [
    check("email", "Please provvide a valid email").isEmail(),
    check("password", "Please provide a password grater than 5 characters")
    .isLength({min: 6})
    
], async (req,res)=> {

    const {password, email} = req.body 
    //Validated Input
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }


    //Validate if user doesn't already exist

    let user  = users.find((user) => {
        return user.email  === email
    });

    if(user){
        return res.status(400).json({
            
    "errors": [
        {
            "msg": "This user already exists",
            }
                ]
                 })
    }


    let hashedPassword  = await bcrypt.hash(password, 10)

    console.log(hashedPassword)

        users.push({
            email: email,
            password: hashedPassword
        })

    res.send("signup")
})



router.get("/allUsers", (req, res)=>{

    res.json(users)
})
module.exports = router;