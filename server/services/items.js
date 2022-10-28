const db = require('./db');


async function getItems() {

    const rows = await db.query(`SELECT Id,Name,Image,Description,Price FROM item WHERE Quantity>0`);
    return rows;
}


async function addItems(sellerId, itemName, description, quantity, imgsrc, price, category) {
    const shopId = await db.query(`SELECT ID   FROM shop WHERE OwnerId =?`, [sellerId])

    await db.query(`INSERT INTO item ( ID,ShopId,Name,Quantity,Image ,Description,Price,Category) VALUES (?,?,?,?,?,?,?,?)`,
        ['', shopId[0]['ID'], itemName, quantity, imgsrc, description, price, category]);

}
async function updateitems(itemNumber, itemName, description, quantity, imgsrc, price, category) {
    await db.query(`UPDATE item SET Name=? ,Quantity=?,Image=? ,Description=?,Price=?,Category=? WHERE ID=?`,
        [itemName, quantity, imgsrc, description, price, category, itemNumber]);

}
async function removeitems(itemNumber) {

    await db.query(`DELETE FROM item WHERE ID=?`,
        [itemNumber]);

}






module.exports = { getItems, addItems, updateitems, removeitems } 