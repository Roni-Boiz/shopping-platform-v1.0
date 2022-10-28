const db = require('./db');

 
async function getOrders(userId) {
      
    const rows = await db.query(`SELECT * FROM orders LEFT JOIN item ON orders.itemId=item.ID  WHERE orders.userId=?`,[userId]);
    return rows;
}

async function addOrders(userId,itemId,address,state,postalCode,contactNumber){
    await db.query(`INSERT INTO orders (id,userId,itemId,Address,State,PostalCode,ContactNumber) VALUES (?,?,?,?,?,?,?)`,
    ['',userId,itemId,address,state,postalCode,contactNumber]);
}

module.exports = {getOrders,addOrders} 