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

// for (let list of ItemList.lists) {
//     let itemID = list.ItemID
//     let itemName = list.ItemName
//     let qty = list.Qty
//     let prize = list.Prize
//     let image = list.image
//     console.log(itemID + itemName + qty + prize + image);
// };

for (let list of ItemList.lists) {
    let itemIDLabel = document.createElement("label");
    let itemIDText = document.createElement("input");

    let itemNameLabel = document.createElement("label");
    let itemNameText = document.createElement("input");

    let itemQtyLabel = document.createElement("label");
    let itemQtyText = document.createElement("input");

    let itemPrizeLabel = document.createElement("label");
    let itemPrizeText = document.createElement("input");

    let itemImageLabel = document.createElement("label");
    let itemImage = document.createElement("img");

    // Item ID mapping from Json
    itemIDLabel.htmlFor = list.ha;
    itemIDLabel.innerHTML = "Item ID: ";

    itemIDText.type = "text";
    itemIDText.id = list.ItemID;
    itemIDText.name = list.ItemID;

    // Item Name mapping from Json
    itemNameLabel.htmlFor = list.ItemName;
    itemNameLabel.innerHTML = "Item Name: ";

    itemNameText.type = "text";
    itemNameText.id = list.ItemName;
    itemNameText.name = list.ItemName;

    // Item Qty mapping from Json
    itemQtyLabel.htmlFor = list.Qty;
    itemQtyLabel.innerHTML = "Quantity : ";
    console.log(itemQtyLabel.htmlFor + itemQtyLabel.innerHTML);

    itemQtyText.type = "text";
    itemQtyText.id = list.Qty;
    itemQtyText.name = list.Qty;
    console.log(itemQtyText.type + itemQtyText.id + itemQtyText.name);

    // Item Prize mapping from Json
    itemPrizeLabel.htmlFor = list.Prize;
    itemPrizeLabel.innerHTML = "Prize : ";
    console.log(itemPrizeLabel.htmlFor + itemPrizeLabel.innerHTML);

    itemPrizeText.type = "text";
    itemPrizeText.id = list.Prize;
    itemPrizeText.name = list.Prize;
    console.log(itemPrizeText.type + itemPrizeText.id + itemPrizeText.name);

    // "ItemID": "Item001",
    //         "ItemName": "Rise",
    //         "Qty": "1kg",
    //         "Prize": "200.00",
    //         "image": "../image/rice.jpg"

    // str = [
    //     { "name1": "user1" },
    //     { "name2": "user2" }
    // ];

    var jsonData = JSON.parse({ "name1": "user1" }, { "name2": "user2" });
    console.log(jsonData[0].name)
}
