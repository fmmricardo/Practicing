//to transform an arrays items with map, we use a callback funtion 
//to return the  data we want

const strings = ['1','2','3','4','5'];
const numbers =strings.map(string=> parseInt(string,10));

console.log(numbers);

//challenge
//Capitalize all the words

const fruits = ['apple', 'pear', 'cherry'];

const capitalizedFruits = fruits.map(fruit => fruit.toUpperCase());

console.log(capitalizedFruits);

//challenge
// turn the numbers into price strings
const prices = [5, 4.23, 6.4, 8.09, 3.20];

const displayPrices = price.map(price=>`$${price.toFixed(2)}`);
console.log(displayPrices);
