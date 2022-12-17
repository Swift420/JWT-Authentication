const express = require('express'); 
const app = express();

//import Routes
const authRoute = require("./routes/auth");


//Route middlewares
app.use("/api/users", authRoute);

app.listen(3000, ()=> console.log('listening on port 3000'));