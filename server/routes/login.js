const express = require('express');
const router = express.Router();
const login = require('../services/login');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/', async function (req, res) {
   
   const email = req.body.email;
   const password = req.body.password;
   
   await login.userLogin(email).then(
      (user) => {
        if(user != null) { 
         const hashedPassword = user[0].password;
         const firstName = user[0].firstName;
         const lastName = user[0].lastname;
         const image = user[0].image;
         const type = user[0].type;

         if (bcrypt.compareSync(password, hashedPassword)) {
      
            const token = jwt.sign({ email }, '123%Readwtevzeaaccvrv');
            return res.json({
               message: "success",
               token: token,
               firstName: firstName,
               lastName: lastName,
               image : image,
               type: type
            });
         } else {
            return res.json({ 
               message: "unsuccess"
             });
         }

      }else{
         return res.json({ 
            message: "not found"
          });
      } }
   ).catch((err) => {
      console.log(err);
     
   });


});

module.exports = router;