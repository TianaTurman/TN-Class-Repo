//1.Calculate the product of all elements in an array.

const numbers = [1, 2, 3, 4, 5];
const product = numbers.reduce(/* your code here */, 1);
// product: 120

//2.Find the longest string in an array.

const strings = ['apple', 'banana', 'cherry', 'date'];
const longestString = strings.reduce(/* your code here */, '');
// longestString: 'banana'

//3.Group an array of objects by a property.

const people = [
    { name: 'Alice', group: 'A' },
    { name: 'Bob', group: 'B' },
    { name: 'Charlie', group: 'A' },
    { name: 'David', group: 'B' }
];
const groupedByGroup = people.reduce(/* your code here */, {});
// groupedByGroup: {
//   A: [{ name: 'Alice', group: 'A' }, { name: 'Charlie', group: 'A' }],
//   B: [{ name: 'Bob', group: 'B' }, { name: 'David', group: 'B' }]
// }

//4.Count the total number of characters in an array of strings.

const strings4 = ['apple', 'banana', 'cherry'];
const totalCharacters = strings.reduce(/* your code here */, 0);
// totalCharacters: 18

//5.Calculate the average of an array of numbers.
const numbers5 = [1, 2, 3, 4, 5];
const average = numbers.reduce(/* your code here */, 0);
// average: 3


//6.Flatten a deeply nested array.
const nestedArray = [1, [2, [3, [4, 5]]]];
const flattenedArray = nestedArray.reduce(/* your code here */, []);
// flattenedArray: [1, 2, 3, 4, 5]


//7. Convert an array of arrays into an object.
const keyValuePairs = [['a', 1], ['b', 2], ['c', 3]];
const obj = keyValuePairs.reduce(/* your code here */, {});
// obj: { a: 1, b: 2, c: 3 }

//8.Remove duplicates from an array.

const numbers8 = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = numbers.reduce(/* your code here */, []);
// uniqueNumbers: [1, 2, 3, 4, 5]

//9.Sum only the even numbers in an array.
const numbers9 = [1, 2, 3, 4, 5, 6];
const sumOfEvens = numbers.reduce(/* your code here */, 0);
// sumOfEvens: 12

//10.Transform an array of objects into a single object with keys derived from a property.
const users = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    { id: '3', name: 'Charlie' }
];
const userObject = users.reduce(/* your code here */, {});
// userObject: {
//   '1': { id: '1', name: 'Alice' },
//   '2': { id: '2', name: 'Bob' },
//   '3': { id: '3', name: 'Charlie' }
// }