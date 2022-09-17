const express = require('express');
const router = express.Router();
const user = require('../services/register'); 
const bcrypt = require('bcrypt');
require("dotenv").config();
router.post('/', async function (req, res) {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    const salt = bcrypt.genSaltSync(11);
    const hashedPassword = bcrypt.hashSync(password, salt);

    //get register Emails
    let userEmails;
    //check the email is already register or not
    let checkEmail;

    await user.getEmails().then(
        (emails) => {
            userEmails = emails
            console.log(userEmails)
        }
    )

    for (let i = 0; i < userEmails.length; i++) {
        if (email == userEmails[i].email) {
            checkEmail = false;
        } else {
            checkEmail = true;
        }
    }

    if (checkEmail) {
        await user.register(firstName, lastName, email, hashedPassword).then(
            () => {
                return res.json({
                    message: "success",
    
                });
    
    
            }
        ).catch((err) => {
            console.log(err); 
            res.status(500).json({ message: "unsucess", error: err.message });
    
        });
    
    } else {
        return   res.json({
            message: "unsucess",

        });
    }
});

 
 


module.exports = router;