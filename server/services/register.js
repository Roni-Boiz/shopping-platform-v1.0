const db = require('./db');

async function getEmails(){
    return  await db.query( `Select userName  FROM login`);
}

async function register(firstName, lastName, email, hashedPassword) {
     await db.query(  `INSERT INTO  user ( ID , FirstName ,  LastName ,  Email ) VALUES (?,?,?,?)`,['',firstName, lastName, email]);
     await db.query(  `INSERT INTO  login ( userName ,  password  ) VALUES (?,?)`,[email, hashedPassword ]);  
      
}

module.exports = {getEmails, register } 