const express = require("express");  
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8090; // asign the port number

//login and Register
const userLogin = require("./routes/login");
const userRegister = require("./routes/register");

//items
const viewItems = require("./routes/items/viewItems");
const addItem = require("./routes/items/addItem");
const updateItem = require("./routes/items/updateItem");
const removeItem = require("./routes/items/removeItem");


//order
const viewOrders = require("./routes/orders/viewOrders");
const addOrder = require("./routes/orders/addOrder")



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./public"))

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

//login and Register 
app.use("/login",userLogin);
app.use("/register",userRegister);

//Items
app.use("/items",viewItems);
app.use("/itemsadd",addItem);
app.use("/updateitem",updateItem);  
app.use("/removeitem",removeItem);


//order
app.use("/orders",viewOrders);
app.use("/addorder",addOrder);


app.listen(port,()=>{
    console.log(`Server listing at http://localhost:${port} `);
})