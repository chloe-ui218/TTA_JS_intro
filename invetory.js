let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry', 'kiwi', 'grape', 'watermelon',
    'pineapple', 'blueberry'];
let vegetables = ['carrot', 'tomato', 'pepper', 'lettuce'];
let fastFood = ['hamburger', 'fries', 'hotdog', 'pizza'];

console.log("==== Invetory Management System ====");
console.log("---- Fruits ----");
for (let i = 0; i < fruits.length; i++) {
    let j = i + 1;
    console.log(' ' + j + '. '+ fruits[i]);
}
console.log("--------------------");

console.log("==== Vegetables ====");
let n = 0;
while(n < vegetables.length){
    let m = n +1;
    console.log('' + n + '. ' + vegetables[n]);
    n++;
}
console.log("---------------------");

console.log("===========================");

