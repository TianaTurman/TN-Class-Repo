const regex = /cat/;
console.log(regex.test("I have a cat.")); // true
console.log(regex.test("I have a dog.")); // false

const regex1 = /\d/;
console.log(regex1.test("There are 3 apples.")); // true
console.log(regex1.test("No numbers here."));    // false

const regex2 = /\s/;
console.log(regex.test("Hello world!"));  // true
console.log(regex.test("NoSpaceHere!"));  // false