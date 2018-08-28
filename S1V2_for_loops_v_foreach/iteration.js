const fruits = ['apple', 'pear', 'cherry'];

//For
for(i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
//For each
//easier to read and understant
//bugs easier to avoid, infinit loops impossible
//cons: can't brake out early

fruits.forEach(fruit => console.log(fruit));

let capitalizeFruits =[];
fruits.forEach(fruit=>{
    let capitalizeFruit=fruit.toUpperCase();
    capitalizeFruits.push(capitalizeFruit)
});
console.log(capitalizeFruits);

//challenge 1
const prices = [6.75, 3.10, 4.00, 8.12];
let totalPreice =0;

prices.forEach(price=>{
    totalPreice +=price;
});
console.log(totalPreice);

////challenge 1.1
// const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
// let sNames= [];

// names.forEach(name=>{
//     if (name.charAt(0)==='S'){
//         sNames.push(name);
//     }
// });
// console.log(sNames);

//Print all the names in the array and number them
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
let sNames= [];

names.forEach((name,index)=> console.log(`${index + 1}) ${name}`));
