//Json Implementation
let itemList = {
    "lists": [
        {
            "itemId": "Item001",
            "itemName": "Rice",
            "qty": "1kg",
            "price": "Rs.129",
            "image": "./image/rice.jpg",
            "itemDes": "India gate Basmati Rice",
            "MRP": "M.R.P: Rs.141",
            "offer": "(8% offer)",
            "checked": false,
            "soldBy": "Reliance Retail"
        },
        {
            "itemId": "Item002",
            "itemName": "Urud Dhall",
            "qty": "1kg",
            "price": "Rs.42",
            "image": "./image/dhall.jpg",
            "itemDes": "Nutrapoorna White Urid Dal",
            "MRP": "M.R.P: Rs.46",
            "offer": "(8% offer)",
            "checked": false,
            "soldBy": "Reliance Retail"
        },
        {
            "itemId": "Item003",
            "itemName": "Millets",
            "qty": "1kg",
            "price": "Rs.495",
            "image": "./image/millets.jpg",
            "itemDes": "Mamma millets",
            "MRP": "M.R.P: Rs.650",
            "offer": "(23% offer)",
            "checked": false,
            "soldBy": "Reliance Retail"
        },
        {
            "itemId": "Item004",
            "itemName": "Oil",
            "qty": "1 Lit.",
            "price": "Rs.106",
            "image": "./image/oil.jpg",
            "itemDes": "Saffola Active pro Oil",
            "MRP": "M.R.P: Rs.199",
            "offer": "(46% offer)",
            "checked": false,
            "soldBy": "Reliance Retail"
        },
        {
            "itemId": "Item005",
            "itemName": "AATA",
            "qty": "1 Kg",
            "price": "Rs.55",
            "image": "./image/wheat.jpg",
            "itemDes": "Chakki Fresh Aata",
            "MRP": "M.R.P: Rs.55",
            "offer": "(8% offer)",
            "checked": false,
            "soldBy": "Reliance Retail"
        }
    ]

};
let checkSelecteArray = new Array;
sessionStorage.setItem("selectedArray", JSON.stringify(checkSelecteArray));
console.log(checkSelecteArray);
for (let item = 0; item < itemList.lists.length; item++) {

    let itemIDLabel = document.createElement("label");
    let itemIDText = document.createElement("input");

    let itemNameLabel = document.createElement("label");
    let itemNameText = document.createElement("input");

    let itemQtyLabel = document.createElement("label");
    let itemQtyText = document.createElement("input");

    let itemPrizeLabel = document.createElement("label");
    let itemPrizeText = document.createElement("input");

    // Item check 
    checkSelected = document.createElement("INPUT");
    checkSelected.setAttribute("type", "checkbox");
    checkSelected.id = "itemCheck" + item;
    checkSelected.name = "itemCheck" + item;
    checkSelected.className = "checkboxAlign";
    checkSelected.onchange = function () {
        getItemDetails();
    };

    // Item ID mapping from Json
    itemIDLabel.htmlFor = "itemId" + item;
    itemIDLabel.innerHTML = "Item ID: ";
    itemIDText.type = "text";
    itemIDText.id = "itemId" + item;
    itemIDText.name = "itemId" + item;
    itemIDText.value = itemList.lists[item].itemId;

    // Item Name mapping from Json
    itemNameLabel.htmlFor = "itemName" + item;
    itemNameLabel.innerHTML = "Item Name: ";
    itemNameText.type = "text";
    itemNameText.id = "itemName" + item;
    itemNameText.name = "itemName" + item;
    itemNameText.value = itemList.lists[item].itemName;

    // Item Qty mapping from Json
    itemQtyLabel.htmlFor = "qty" + item;
    itemQtyLabel.innerHTML = "Quantity : ";
    itemQtyText.type = "text";
    itemQtyText.id = "qty" + item;
    itemQtyText.name = "qty" + item;
    itemQtyText.value = itemList.lists[item].qty;

    // Item Prize mapping from Json
    itemPrizeLabel.htmlFor = "itemPrice" + item;
    itemPrizeLabel.innerHTML = "Prize : ";
    itemPrizeText.type = "text";
    itemPrizeText.id = "itemPrice" + item;
    itemPrizeText.name = "itemPrice" + item;
    itemPrizeText.value = itemList.lists[item].price;

    //main div
    var newDiv = document.createElement("div");
    newDiv.id = 'itemTr' + item;
    newDiv.className = "itemRow"
    document.getElementById("itemCheckList").appendChild(newDiv);

    /////////////////////////////// Creating a div for image and its description///////////////////////////////////
    var newDivforImgAndDes = document.createElement("div");
    newDivforImgAndDes.id = 'imgAndDes' + item;
    newDivforImgAndDes.className = "imgAndDes";

    var newTableforImgAndDes = document.createElement("table");
    newTableforImgAndDes.id = 'imgAndDes' + item;
    newTableforImgAndDes.className = "imgAndDes";

    var newTrforImgAndDes = document.createElement("tr");
    newTrforImgAndDes.id = 'imgAndDes' + item;
    newTrforImgAndDes.className = "imgAndDes";

    var newDivforImg = document.createElement("img");
    newDivforImg.src = itemList.lists[item].image;
    newDivforImg.id = 'itemImage' + item;
    newDivforImg.className = "itemImage";

    var img = document.createElement("td");
    img.id = 'img' + item;
    img.appendChild(newDivforImg);

    var imgDiv = document.createElement("td");
    imgDiv.id = 'imgDiv' + item;
    imgDiv.className = "Description";

    var productNameAndCost = document.createElement("div");
    productNameAndCost.id = 'productNameAndCost' + item;
    productNameAndCost.className = "productNameAndCost";

    var productName = document.createElement("div");
    productName.id = 'productName' + item;
    productName.className = "productName";
    productName.innerHTML = itemList.lists[item].itemDes;

    var productMRP = document.createElement("h5");
    productMRP.id = 'productMRP' + item;
    productMRP.className = "productMRP";
    productMRP.innerHTML = itemList.lists[item].MRP;

    var productOffer = document.createElement("pre");
    productOffer.id = 'productOffer' + item;
    productOffer.className = "productOffer";
    productOffer.innerHTML = itemList.lists[item].offer;
    productOffer.style.backgroundColor = "Green";

    productNameAndCost.appendChild(productName);
    productNameAndCost.appendChild(productMRP);
    productNameAndCost.appendChild(productOffer);

    /////////////////////////////// Appending all child elements to main div///////////////////////////////////

    imgDiv.appendChild(productNameAndCost);
    newTrforImgAndDes.appendChild(img);
    newTrforImgAndDes.appendChild(imgDiv);
    newTableforImgAndDes.appendChild(newTrforImgAndDes);
    newDivforImgAndDes.appendChild(newTableforImgAndDes);

    document.getElementById(newDiv.id).appendChild(checkSelected);
    document.getElementById(newDiv.id).appendChild(itemIDLabel);
    document.getElementById(newDiv.id).appendChild(itemIDText);
    document.getElementById(newDiv.id).appendChild(itemNameLabel);
    document.getElementById(newDiv.id).appendChild(itemNameText);
    document.getElementById(newDiv.id).appendChild(itemQtyLabel);
    document.getElementById(newDiv.id).appendChild(itemQtyText);
    document.getElementById(newDiv.id).appendChild(itemPrizeLabel);
    document.getElementById(newDiv.id).appendChild(itemPrizeText);
    document.getElementById(newDiv.id).appendChild(newDivforImgAndDes);
};

/////////////////////////////// Function for passing a selected item to billing page///////////////////////////////////
function getItemDetails() {
    let checkSelecteArray = new Array;
    for (let item = 0; item < itemList.lists.length; item++) {
        if (document.getElementById("itemCheck" + item).checked == true) {             
                    checkSelecteArray.push(itemList.lists[item]);
            }
    }
    sessionStorage.setItem("selectedArray", JSON.stringify(checkSelecteArray.filter((item, index) => checkSelecteArray.indexOf(item) === index)));
}