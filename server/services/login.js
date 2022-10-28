const db = require('./db');

async function userLogin(email) {
    const rows = await db.query(
        `SELECT * FROM login INNER JOIN user ON login.userName = user.email  WHERE login.userName=?`, [email]);
        
     return rows;
}

module.exports = { userLogin } 