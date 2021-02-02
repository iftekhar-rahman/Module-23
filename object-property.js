
const students = [
    {id: 12, name: "Faruk"},
    {id: 22, name: "Alom"},
    {id: 21, name: "Khan"},
    {id: 42, name: "Miah"},
]

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id> 20);
const biggerone = students.find(s => s.id> 20);
console.log(biggerone);

// const names = [];
// for(let i = 0; i < students.length; i++){
//     const element = students[i];
//     const nameList = element.name;
//     names.push(nameList);
// }
// console.log(names);