const express = require('express');
const router = express.Router();
const order = require('../../services/orders');


router.post('/', async function (req, res) {

    const userId = req.body.userId;
    const itemId = req.body.itemId;
    const address = req.body.address;
    const state = req.body.state;
    const postalCode = req.body.postalCode;
    const contactNumber = req.body.contactNumber;
    await order.addOrders(userId, itemId, address, state, postalCode, contactNumber).then(
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
