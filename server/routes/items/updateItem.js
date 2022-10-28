const express = require('express');
const router = express.Router();
const items = require('../../services/items'); 
const multer = require('multer')
uuidv4 = require('uuid/v4');
const path = require('path')

const DIR = './public/images';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


 
router.post('/',upload.single('image'),async function (req, res) {
    
    const itemNumber = req.body.itemNumber;
    const itemName = req.body.itemName;
    const description = req.body.description;
    const quantity = req.body.quantity;
    const price = req.body.price;  
    const category = req.body.category;
  
    if (!req.file) {
        console.log("No file upload");
    }else{ 
    const imgsrc = 'http://127.0.0.1:8090/images/' +req.file.filename;

    await items.updateitems(itemNumber,itemName,description,quantity,imgsrc,price,category).then(
         () =>{
            return res.json({
                message: "sucess"

            })
        }
        
    ).catch((err) => {
        console.log(err); 
        res.status(500).json({ message: "unsucess", error: err.message });

    });
}
    

})
module.exports = router;
