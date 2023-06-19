// Json
let ItemList = {
    "lists": [
        {
            "ItemID": "Item001",
            "ItemName": "Rise",
            "Qty": "1kg",
            "Prize": "200.00",
            "image": "../image/rice.jpg"
        },
        {
            "ItemID": "Item002",
            "ItemName": "Dhall",
            "Qty": "1kg",
            "Prize": "500.00",
            "image": "../image/dhall.jpg"
        },
        {
            "ItemID": "Item003",
            "ItemName": "Oil",
            "Qty": "1kg",
            "Prize": "400.00",
            "image": "../image/oil.jpg"
        }
    ]
};

for (let list of ItemList.lists) {
    let itemID = list.ItemID
    let itemName = list.ItemName
    let qty = list.Qty
    let prize = list.Prize
    let image = list.image
    console.log(itemID + itemName + qty + prize + image);
};