const db = require('./db');

async function getEmails(){
    return  await db.query( `Select email  FROM login`);
}

async function register(firstName, lastName, email, hashedPassword) {
     await db.query(  `INSERT INTO  user ( firstName ,  lastName ,  email ,image, type) VALUES (?,?,?,?,?)`,[firstName, lastName, email,'','buyer' ]);
     await db.query(  `INSERT INTO  login ( email ,  password  ) VALUES (?,?)`,[email, hashedPassword ]);  
      
}

module.exports = {getEmails, register } 