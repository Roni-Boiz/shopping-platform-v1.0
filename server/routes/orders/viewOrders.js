const express = require('express');
const router = express.Router();
const order = require('../../services/orders'); 
 
 
router.post('/', async function (req,res) {
    
     const userId = req.body.userId;

     await order.getOrders(userId).then(
        (orders) =>{
            return res.json({
                orders: orders,

            })
        }
        
    ).catch((err) => {
        console.log(err); 
        res.status(500).json({ message: "unsucess", error: err.message });

    });
    

})
module.exports = router;
