const express = require('express');
const router = express.Router();
const order = require('../../services/items');


router.post('/', async function (req, res) {

     const itemId = req.body.itemId;
      
    await order.removeitems(itemId).then(
     () => {
            return res.json({
                message: "sucess"
            })
        }

    ).catch((err) => {
        console.log(err);
        res.status(500).json({ message: "unsucess", error: err.message });

    });


})
module.exports = router;
