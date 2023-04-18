// let input = document.getElementById("input");

// function buttonClick(val) {
//   if (val === "=") {
//     input.value = eval(input.value);
//   } else if (val === "clear") {
//     input.value = "";
//   } else {
//     input.value += val;
//   }
// }

// const person = {
//   name: "Test",
//   age: 25,
//   email: "test@mail.ru",
//   // balance: 150

//   // getBalanceResult ()
//   //   {return 'bydjet ivana: ${person1.balance}$'}
// };

// const person1 = { ...person };
// person1.name = "Petya";
// person1.balance = 500;

// const person2 = { ...person };
// person2.name = "roma";
// person2.balance = 1200;

// const person3 = { ...person };
// person3.name = "Din";
// person3.balance = 1500;
// person3.sayHello = function () {};
// return "salam aleikum ${this.name}";

// console.log(person);
// console.log(person1.getBalanceResult());
// console.log(person2.getBalanceResult());
// console.log(person3.getBalanceResult());
// console.log(person3.sayHello());

// let arr = ['alex', 'andrei', 'sereja']
// let arr2 = ['alex2112', 'adrei21', 'artem']

// let arr3 = arr.concat(arr2)
// console.log(arr3);

// let string = 'privet mir!'
// console.log(string.charAt(1));

// starWith
// let string = 'privet novi mir!'
// console.log(string.startsWith('privet'));
// console.log(string.startsWith('novi', 7));
// console.log(string.startsWith('mir'));

// endsWith
// let string = 'privet novi mir!'
// console.log(string.endsWith('!'));
// console.log(string.endsWith('novi'));
// console.log(string.endsWith('novi', 12));

// // split
// let split = 'privet novi mir!'
// console.log(string.split(''));;
// console.log(string.split(""));
// console.log(newString.join(''));

// split
// let string = ['privet', 'novi', 'mir!']
// console.log(string.slice(1)); // ['novi', 'mir!'],
// console.log(string.slice(99)); // []

// // toFixed
// let numObj = 12345.6789;
// console.log(numObj.toFixed());
// console.log(numObj.toFixed(1));
// console.log(numObj.toFixed(3));

// // toPrecision
// let numObj = 12345.6789;
// console.log(numObj.toPrecision(1));
// console.log(numObj.toPrecision(2));
// console.log(numObj.toPrecision(1));

// // to String
// let num = 2345678
// let num2 = '2345678'
// console.log(num.toString()); //'234567'
// console.log(Number(num2)); //2345678
// console.log(+num2); //2345678

// let arr = ['231', '-11', '123', '-78', '10'];

// let newArr = arr.map(str => Number(str));

// console.log(newArr); // Output: [231, -11, 123, -78, 10]

// r
// let b = (student, index, arr)=> {}
// alert("Привет, мир!");

// ZADACHA 1
const num = [3, 8, 1, 6, 2, 9, 4, 5, 7];
num.sort((a, b) => a - b);
console.log(num); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// ZADACHA 2
const fruits = ["apple", "banana", "orange", "mango", "peach"];
const index = fruits.indexOf("orange");
if (index !== -1) {
  fruits.splice(index, 1);
}
console.log(fruits); // ['apple', 'banana', 'mango', 'peach']
// ZADACHA 3
const peopl = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 28 },
  { name: "Eve", age: 22 },
];

peopl.sort((a, b) => a.age - b.age);
console.log(peopl);
// ZADACHA 4
const numbe = [3, 8, 1, 6, 2, 9, 4, 5, 7];
const sum = numbe.reduce((acc, curr, index) => {
  if (index % 2 === 0) {
    return acc + curr;
  }
  return acc;
}, 0);
console.log(sum); // 14
// ZADACHA 5
const fruit = ["apple", "banana", "orange", "mango", "peach"];
const letter = "a";
const count = fruits.filter((fruit) => fruit.startsWith(letter)).length;
console.log(count); // 2
// ZADACHA 6
const products = [
  { name: "apples", price: 0.5 },
  { name: "bananas", price: 0.2 },
  { name: "oranges", price: 0.8 },
  { name: "mangoes", price: 1.5 },
];
const totalPrice = products.reduce((acc, curr) => acc + curr.price, 0);
console.log(totalPrice); // 3
// ZADACHA 7
const numb = [3, 7, 1, 9, 2, 5];
const maxNumb = Math.max(...numb);
const minNumb = Math.min(...numb);
console.log(maxNumb); // 9
console.log(minNumb); // 1
// ZADACHA 8
const words = ["Hello", "world", "!"];
const combinedString = words.join(" ");
console.log(combinedString); // 'Hello world !'
// ZADACHA 9
const people = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 42 },
];

const totalAge = people.reduce((accumulator, person) => {
  return accumulator + person.age;
}, 0);

const averageAge = totalAge / people.length;
console.log(averageAge); // 35
// ZADACHA 10
const number = [1, 2, 3, 4, 5];

const squares = number.map((number) => {
  return number * number;
});

console.log(squares); // [1, 4, 9, 16, 25]
