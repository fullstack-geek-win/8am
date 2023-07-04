// Select the paragraph element
const paragraph = document.querySelector("#myPara");

// Add a click event listener to the paragraph
paragraph.addEventListener('mouseover', MouseOver);
paragraph.addEventListener('mouseout', MouseOut);

function MouseOver() {
    // Change the background color to red
    paragraph.style.backgroundColor = 'red';
}

function MouseOut() {
    // Change the background color to white
    paragraph.style.backgroundColor = 'white';
}



