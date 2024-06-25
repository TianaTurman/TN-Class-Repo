//1.Calculate the product of all elements in an array.

const numbers = [1, 2, 3, 4, 5];
const product = numbers.reduce((acc, num) => acc * num, 1);
// product: 120
console.log(product)

//2.Find the longest string in an array.

const strings = ['apple', 'banana', 'cherry', 'date'];
const longestString = strings.reduce((acc, str) => str.length > acc.length ? str : acc,  '');
// longestString: 'banana'
console.log(longestString)
//3.Group an array of objects by a property.

const people = [
    { name: 'Alice', group: 'A' },
    { name: 'Bob', group: 'B' },
    { name: 'Charlie', group: 'A' },
    { name: 'David', group: 'B' }
];
const groupedByGroup = people.reduce((acc, person) => {
    (acc[person.group] = acc[person.group] || []).push(person)
    return acc;
}, {});
// groupedByGroup: {
//   A: [{ name: 'Alice', group: 'A' }, { name: 'Charlie', group: 'A' }],
//   B: [{ name: 'Bob', group: 'B' }, { name: 'David', group: 'B' }]
// }

//4.Count the total number of characters in an array of strings.

const strings4 = ['apple', 'banana', 'cherry'];
const totalCharacters = strings4.reduce((acc, char) => acc + char.length, 0);
// totalCharacters: 18

//5.Calculate the average of an array of numbers.
const numbers5 = [1, 2, 3, 4, 5];
const average = numbers5.reduce((acc,num,idx,arr) => {
    acc += num;
    if (idx === arr.length -1) {
            return acc / arr.length
    }
    return acc;
}, 0);
// average: 3

console.log(average)
//6.Flatten a deeply nested array.
const nestedArray = [1, [2, [3, [4, 5]]]];
const flatten = (arr) => arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) :acc.concat(val), []);
const flattenedArray = flatten(nestedArray)

console.log(flattenedArray)
// flattenedArray: [1, 2, 3, 4, 5]


//7. Convert an array of arrays into an object.
const keyValuePairs = [['a', 1], ['b', 2], ['c', 3]];
const obj = keyValuePairs.reduce();
// obj: { a: 1, b: 2, c: 3 }

//8.Remove duplicates from an array.

const numbers8 = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = numbers.reduce(/* your code here */ []);
// uniqueNumbers: [1, 2, 3, 4, 5]

//9.Sum only the even numbers in an array.
const numbers9 = [1, 2, 3, 4, 5, 6];
const sumOfEvens = numbers.reduce(/* your code here */ 0);
// sumOfEvens: 12

//10.Transform an array of objects into a single object with keys derived from a property.
const users = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    { id: '3', name: 'Charlie' }
];
const userObject = users.reduce(/* your code here */ {});
// userObject: {
//   '1': { id: '1', name: 'Alice' },
//   '2': { id: '2', name: 'Bob' },
//   '3': { id: '3', name: 'Charlie' }
// }