require("dotenv").config();
const hostname = process.env.SERVER;
const userName = process.env.UID;
const database = process.env.DATABASE;
const password =   process.env.PASSWORD;;
 
const config = {
    db:{
        host : hostname,
        user : userName,
        password :password,
        database : database
    }
}

module.exports = config