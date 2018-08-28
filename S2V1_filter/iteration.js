// //Filter method
// //remove items from the arry, it return a new array without the items that i want to remove
// const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

// let sNames = [];

// names.forEach(name => {
//   if(name.charAt(0) === 'S') {
//     sNames.push(name);
//   }
// });

// console.log(sNames);

// with filter method
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
//let with forEach because i want to change the array inside the forEach method

//now we don't need to change
// const sNames = names.filter(name => {
//   if(name.charAt(0) === 'S') {
//     return true;
//   }else{
//     return false;
//   }
// });

//alternative cleaner way
// const sNames = names.filter(name => name.charAt(0) === 'S');

// console.log(sNames);

//alternative
const startsWithS = name => name.charAt(0) === 'S';
const sNames = names.filter(startsWithS);
console.log(sNames);


// new exercise
const numbers =[1,2,3,4,5];

//return all the values exept the 3
 const no3 = numbers.filter(number => number !== 3);
console.log(no3);

const only2 = numbers.filter(number=> number ===2);
console.log(only2);

//challenge
//use the filter method to return only even numbers
const newNumbers =[1,2,3,4,5,6,7,8,9,10];
const evens = newNumbers.filter(number=> number % 2 === 0);
console.log(evens);
