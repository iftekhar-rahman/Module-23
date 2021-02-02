// const number = [5, 10, 20, 30];
// const output = [];
// for(let i = 0; i < number.length; i++){
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);


const numbers = [5, 10, 20, 30];


// function square(element){
//     return element * element;
// }

// const square = element => element * element;

// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// });

// const result = numbers.map(function(element){
//     return element * element;
// });

// const result = numbers.map(x => x * x);

const bigger = numbers.filter(x => x > 5);

const isThere = numbers.find(x => x > 5);

console.log(isThere);
