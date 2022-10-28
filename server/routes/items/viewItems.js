const express = require('express');
const router = express.Router();
const items = require('../../services/items'); 
 
 
router.get('/', async function (req,res) {
    
     await items.getItems().then(
        (items) =>{
            return res.json({
                items: items,

            })
        }
        
    ).catch((err) => {
        console.log(err); 
        res.status(500).json({ message: "unsucess", error: err.message });

    });
    

})
module.exports = router;
