const express = require("express");  
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8090; // asign the port number
const userLogin = require("./routes/login");
const userRegister = require("./routes/register");





app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({origin: true, credentials: true}));
require("dotenv").config();





app.use(
    express.urlencoded({
        extended:true,
    }) 
); 

app.get("/",(req,res) => {
    res.json({message : `Server listing at http://localhost:${port} `})
});
 
app.use("/login",userLogin);
app.use("/register",userRegister);

 

app.listen(port,()=>{
    console.log(`Server listing at http://localhost:${port} `);
})