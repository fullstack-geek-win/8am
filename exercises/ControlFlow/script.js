// Control Flow

// if
// var
// let
// const
// let a, b;
// a = 10;
// b = 30;
// = assignment
// == comparison
// === all are equal

// if (a === 1) {
//     console.log(true + "   a = 1");
// }
// else if (b == 2) {
//     console.log(true + " come to 1st else if");
// }
// else if (b == 3) {
//     console.log(true + " come to 2nd else if");
// }
// else {
//     console.log(false);
// }

// let m = 4;
// // switch
// switch (m) {
//     case 1:
//         console.log("1");
//         break;
//     case 2:
//         console.log("2");
//         break;
//     case 3:
//         console.log("3");
//         break;
//     case 4:
//         console.log("4");
//         break;
//     default:
//         console.log("nothing");
// }


// Loop
// for
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i == 5) {
        console.log("continue before");
        continue;
        console.log("continue after");
    }
}

console.log("breaks");

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i + "-> Even Number");
//     }
//     else {
//         console.log(i + "-> Odd Number");
//     }
// }

// let s = 0;
// while (s < 10) {
//     console.log(s + 1);

//     s++;
// }

// let k = 0;
// do {
//     console.log(k);
//     k++;
// } while (k == "suraj")

