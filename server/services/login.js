const db = require('./db');

async function userLogin(email) {
    const rows = await db.query(
        `SELECT * FROM login INNER JOIN user ON login.email = user.email  WHERE login.email=?`, [email]);
        
     return rows;
}

module.exports = { userLogin } 