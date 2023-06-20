//Json Implementation
let itemList ={
    "lists" : [
        {
            "itemId" : "Item001",
            "itemName" : "rice",
            "qty" : "1kg",
            "price" : "200.00",
            "image" : "./image/rice.jpg"
        },
        {
            "itemId" : "Item002",
            "itemName" : "Dhall",
            "qty" : "1kg",
            "price" : "500.00",
            "image" : "./image/dhall.jpg"
        },
        {
            "itemId" : "Item003",
            "itemName" : "millets",
            "qty" : "1kg",
            "price" : "700.00",
            "image" : "./image/millets.jpg"
        }
    ]

};
for(let list of itemList.lists){
    let itemId = list.itemId,
    itemName = list.itemName,
    qty = list.qty,
    price = list.price,
    image = list.image;
    console.log(itemId + itemName + qty + price + image);
}