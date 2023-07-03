function viewCart() {
    let selectedArray = JSON.parse(sessionStorage.getItem("selectedArray"));
    console.log(selectedArray);
    document.getElementById("itemHeader").innerHTML = "Groceries selected (" + selectedArray.length + ")";
    document.getElementById("paymentDetail").innerHTML = "Payment Detail";

    for (let i = 0; i < selectedArray.length; i++) {
        /////////////////////////////// Creating a main div for image and its description///////////////////////////////////
        var selectedItemDiv = document.createElement("div");
        selectedItemDiv.id = 'selectedItemDiv' + i;
        selectedItemDiv.className = "selectedItemDiv";

        /////////////////////////////// Creating a table for image and its description///////////////////////////////////
        var newTableforImgAndDes = document.createElement("table");
        newTableforImgAndDes.id = 'selectedTable' + i;
        newTableforImgAndDes.className = "selectedTable";

        var selectedItemRow = document.createElement("tr");
        selectedItemRow.id = 'selectedItemRow' + i;
        selectedItemRow.className = "selectedItemRow";

        var selectedItemImg = document.createElement("td");
        selectedItemImg.id = 'selectedImg' + i;
        selectedItemImg.className = "selectedImg";

        var newDivforImg = document.createElement("img");
        newDivforImg.src = selectedArray[i].image;
        newDivforImg.id = 'selecteItemImage' + i;
        newDivforImg.className = "selecteItemImage";

        selectedItemImg.appendChild(newDivforImg);

        var selectedItemDes = document.createElement("td");
        selectedItemDes.id = 'selectedDes' + i;
        selectedItemDes.className = "selectedDes";

        /////////////////////////////// Creating a div for individual item///////////////////////////////////

        var selectedIndividualItem = document.createElement("div");
        selectedIndividualItem.id = 'selectedIndividualItem' + i;
        selectedIndividualItem.className = "selectedIndividualItem";

        var itemName = document.createElement("div");
        itemName.id = 'itemName' + i;
        itemName.className = "itemName";
        itemName.innerHTML = selectedArray[i].itemDes;

        var discountAmt = document.createElement("div");
        discountAmt.id = 'discountAmt' + i;
        discountAmt.className = "discountAmt";
        discountAmt.innerHTML = selectedArray[i].price;

        var soldBy = document.createElement("div");
        soldBy.id = 'soldBy' + i;
        soldBy.className = "soldBy";
        soldBy.innerHTML = "Sold by: " + selectedArray[i].soldBy;

        var MRPAndOffer = document.createElement("pre");
        MRPAndOffer.id = 'MRPAndOffer' + i;
        MRPAndOffer.className = "MRPAndOffer";
        MRPAndOffer.innerHTML = selectedArray[i].MRP + " You are enjoying " + selectedArray[i].offer;

        /////////////////////////////// Appending all child elements to main div///////////////////////////////////

        selectedIndividualItem.appendChild(itemName);
        selectedIndividualItem.appendChild(discountAmt);
        selectedIndividualItem.appendChild(soldBy);
        selectedIndividualItem.appendChild(MRPAndOffer);

        selectedItemDes.appendChild(selectedIndividualItem);

        selectedItemRow.appendChild(selectedItemImg);
        selectedItemRow.appendChild(selectedItemDes);
        newTableforImgAndDes.appendChild(selectedItemRow);
        selectedItemDiv.appendChild(newTableforImgAndDes);
        document.getElementById("productDetails").appendChild(selectedItemDiv);

        paymentCalculation(selectedArray);
    }

    /////////////////////////////// Function for payment calculation///////////////////////////////////
    function paymentCalculation(items) {
        var mrp = 0, total = 0;
        for (let i = 0; i < items.length; i++) {
            let b = 0;
            let a = items[i].MRP.replace(/[^0-9]/g, "");
            b = parseInt(a) + mrp;
            mrp = b;

            let c = 0;
            let d = items[i].price.replace(/[^0-9]/g, "");
            c = parseInt(d) + total;
            total = c;
        }
        if (total > 500) {
            document.getElementById("deliveryFee").innerHTML = "Free Shipping";
            document.getElementById("deliveryFee").style.color = "green";
        } else {
            document.getElementById("deliveryFee").innerHTML = "Rs. 40";
            document.getElementById("deliveryFee").style.color = "red";
        }
        document.getElementById("mrpTotal").innerHTML = "Rs. " + mrp;
        document.getElementById("Total").innerHTML = "Rs. " + total;
        document.getElementById("discountTotal").innerHTML = "- Rs. " + (mrp - total);
        console.log(mrp);
        console.log(total);
    }
}
/////////////////////////////// Function for order placed or warning popup///////////////////////////////////

function showPopup() {
    if (document.getElementById("Total").innerHTML == 0) {
        alert("Plese select atleast one item to place the order!!!");
    } else {
        alert("Your order has been placed successfully!!!");
    }
}


