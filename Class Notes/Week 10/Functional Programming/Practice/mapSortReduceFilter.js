//https://dev.to/ivanadokic/javascript-array-methods-filter-map-reduce-and-sort-32m5
//***MAP METHOD QUESTIONS***

//1. Square all elements of an array:

const numbers1 = [1, 2, 3, 4, 5];
// Expected output: [1, 4, 9, 16, 25]



//2.Convert all strings in an array to uppercase:

const words1 = ['hello', 'world'];
// Expected output: ['HELLO', 'WORLD']


//3.Extract the names from an array of objects:

const users1 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
];
// Expected output: ['Alice', 'Bob']


//4.Add a specific number to each element in an array:

const numbers2 = [10, 20, 30];
const addValue = 5;
// Expected output: [15, 25, 35]


//5.Convert an array of numbers to their string equivalents:


const numbers3 = [1, 2, 3];
// Expected output: ['1', '2', '3']

//***FILTER QUESTIONS***

//1.Filter out odd numbers from an array:

const numbers4 = [1, 2, 3, 4, 5];
// Expected output: [2, 4]


//2.Filter out words shorter than 4 characters:

const words2 = ['apple', 'cat', 'banana', 'dog'];
// Expected output: ['apple', 'banana']


//3.Filter objects based on a property value:

const users2 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
const ageLimit = 30;
// Expected output: [{ name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]


//4.Filter out non-positive numbers from an array:

const numbers5 = [-3, -2, 0, 1, 2];
// Expected output: [1, 2]


//5.Filter out falsy values from an array:

const values = [0, 1, false, 2, '', 3];
// Expected output: [1, 2, 3]


//***SORT METHOD QUESTIONS***

//1.Sort an array of numbers in ascending order:

const numbers6 = [3, 1, 4, 1, 5, 9];
// Expected output: [1, 1, 3, 4, 5, 9]


//2.Sort an array of strings alphabetically:

const words3 = ['banana', 'apple', 'cherry'];
// Expected output: ['apple', 'banana', 'cherry']


//3.Sort an array of objects by a numeric property:

const users3 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 }
];
// Expected output: [
//   { name: 'Charlie', age: 20 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 }
// ]


//4.Sort an array of objects by a string property:

const users4 = [
    { name: 'Charlie', age: 20 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
];
// Expected output: [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 20 }
// ]

//5.Sort an array of numbers in descending order:

const numbers7 = [3, 1, 4, 1, 5, 9];
// Expected output: [9, 5, 4, 3, 1, 1]

//***REDUCE METHOD QUESTIONS***

//1.Sum all elements in an array:

const numbers8 = [1, 2, 3, 4, 5];
// Expected output: 15


//2.Find the maximum value in an array:

const numbers9 = [1, 5, 3, 9, 2];
// Expected output: 9


//3.Count the occurrences of each element in an array:

const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];
// Expected output: { apple: 2, banana: 3, orange: 2 }


//4.Flatten a nested array:

const nestedArray = [[1, 2], [3, 4], [5]];
// Expected output: [1, 2, 3, 4, 5]



//5.Create a single object from an array of objects using a specific property as the key:

const users = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    { id: '3', name: 'Charlie' }
];
// Expected output: { '1': { id: '1', name: 'Alice' }, '2': { id: '2', name: 'Bob' }, '




