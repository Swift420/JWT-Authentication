const router = require('express').Router(); 


router.post("/signup", (req,res)=> {

    const {password, email} = req.body 

    console.log(password, email);

    
    res.send("signup")
})


module.exports = router;