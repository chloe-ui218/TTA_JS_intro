let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry', 'kiwi', 'grape', 'watermelon',
    'pineapple', 'blueberry'];
let vegetables = ['carrot', 'tomato', 'pepper', 'lettuce', 'cucumber', 'broccoli', 'onion', 'garlic', 'potato', 'ginger'];
let fastFood = ['hamburger', 'fries', 'hotdog', 'pizza', 'ice cream', 'chicken nuggets', 'sandwich', 'onion rings', 
    'tacos', 'burrito'];

console.log("==== Invetory Management System ====");
console.log("---- Fruits ----");
for (let i = 0; i < fruits.length; i++) {
    let j = i + 1;
    console.log(' ' + j + '. '+ fruits[i]);
}
console.log(`Total number of fruits: ${fruits.length}`);
console.log("--------------------");

console.log("==== Vegetables ====");
let n = 0;
while(n < vegetables.length){
    let m = n +1;
    console.log('' + n + '. ' + vegetables[n]);
    n++;
}
console.log("---------------------");
console.log(`Total number of vegetables: ${vegetables.length}`);

console.log("---- Fast Food ----");
fastfood. forEach((food, index) => {
    console.log(' ' + (index + 1) + '. ' + food);
});

console.log("-------------------");
console.log(`Total number of fast food: ${fastFood.length}`);
console.log("===========================");

