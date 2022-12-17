const { check, validationResult } = require('express-validator');

const router = require('express').Router(); 


router.post("/signup", [
    check("email", "Please provvide a valid email").isEmail(),
    check("password", "Please provide a password grater than 5 characters")
    .isLength({min: 6})
    
],(req,res)=> {

    const {password, email} = req.body 

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }

    res.send("signup")
})


module.exports = router;