let numbers = [1, 2, 3, 4, 5];

// Map -  maps the values of one array to a new array.  Can perform calculations
// on the original array and map the calculated values to the new array.
let newNumbers = numbers.map(num => num * 2);

console.log(newNumbers);

// Reduce - can reduce an array of values down to a single value
let total = numbers.reduce((acc, num) => acc + num);
console.log(total);

// Filter - Remove elements from an array if it does not meet a requirement that
// you specify

// let evenNumbers = numbers.filter(n => {
//   return n % 2 === 0;
// });

let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers);

let oddNumbers = numbers.filter(n => n % 2 !== 0);
console.log(oddNumbers);

// Object Destructuring
const person = {
  name: 'Steve',
  age: 50
};

let { name, age } = person;
console.log(name);
console.log(age);

function printDetails({ name, age }) {
  console.log(`The name is ${name} and they are ${age}`);
}

printDetails(person);

// Capitalize first letter of a sentence
let sentence = 'the quick brown fox jumped over the lazy dog';
let capitalizedSentence = sentence[0].toUpperCase() + sentence.slice(1);

// Make a function to capitalize the fist letter of a string
const capitalizedString = str => {
  return str[0].toUpperCase() + str.slice(1);
};

const capitalizedWords = str => {
  return str
    .split(' ')
    .map(capitalizedString)
    .join(' ');
};

console.log(capitalizedSentence);

sentence = 'i love to be a javascript developer';

console.log(capitalizedString(sentence));

// Capitalize every word
console.log(capitalizedWords(sentence));

// Copy an array using slice method for older browsers
const array1 = [1, 2, 3, 4, 5];

const copyofArray1 = array1.slice();
console.log(array1);
console.log(copyofArray1);

// Copy an array using spread operator ES6
const anotherCopyOfArray1 = [...array1];
console.log(anotherCopyOfArray1);

// Remove item(s) from an array
const moreNumbers = [1, 2, 3, 4, 5, 6, 8, 6, 75, 12, 16, 4, 2, 17];

// Find largest number in array
console.log(Math.max(...moreNumbers));

// Create function for finding largest number in array
const largestNumber = values => {
  let highest = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > highest) {
      highest = values[i];
    }
  }
  return highest;
};

console.log(largestNumber(moreNumbers));

// Removes the last element of the array
console.log(moreNumbers);
// const a = moreNumbers.pop();
// const b = moreNumbers.pop();
// console.log(moreNumbers);
// console.log(a, b);

// Remove values from start of array
// const a = moreNumbers.shift();
// console.log(a, moreNumbers);

// Remove a specific item from the array
// const a = moreNumbers.splice(1, 1);

// console.log(a, moreNumbers);

// Filter function
// const newArray = moreNumbers.filter(number => number > 6);
// console.log(newArray);

// Remove duplicate values from array
const newArray = moreNumbers.filter(
  (number, pos) => moreNumbers.indexOf(number) === pos
);
console.log(newArray);

// Join method to merge array values
const words = ['The', 'quick', 'brown', 'fox'];

console.log(words.join(' '));

// Split a string into an array of elements
str1 = 'the quick brown fox jumped';

console.log(str1.split(' '));

console.log(str1.length);

// Reverse a string - need to convert it to an array first
const newString = str1
  .split('')
  .reverse()
  .join('');
console.log(str1);
console.log(newString);

// Using a for loop
let newStr = '';
for (let i = str1.length - 1; i >= 0; i--) {
  newStr += str1[i];
}
console.log(newStr);

// Find the longest word in a string
const strArr = str1.split(' ');
const sortedStringArr = strArr.sort((strA, strB) => strB.length - strA.length);
console.log(sortedStringArr[0]);
