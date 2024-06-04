const regex = /cat/;
console.log(regex.test("I have a cat.")); // true
console.log(regex.test("I have a dog.")); // false

const regex1 = /\d/;
console.log(regex1.test("There are 3 apples.")); // true
console.log(regex1.test("No numbers here."));    // false

const regex2 = /\s/;
console.log(regex2.test("Hello world!"));  // true
console.log(regex2.test("NoSpaceHere!"));  // false

const regex4 = /[aeiou]/;
console.log(regex4.test("I have vowels do you"));
console.log(regex4.test("whr dd th vwls g"));

const regex5 = /^Start/i;
console.log(regex5.test("start here"));
console.log(regex5.test("end here"));

const regex6 = /end$/;
console.log(regex6.test("this is the end"));
console.log(regex6.test("end is in the beginning"));

const regex7 = / /;