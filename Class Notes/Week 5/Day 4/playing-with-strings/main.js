/******************
 * YOUR CODE HERE *
 ******************/
function xify(str) {
let newX = "";
while(newX.length < str.length){
newX += "x";
}
return newX;
}

function yellingChars(str) {
let output = "";
for(let i = 0; i < str.length; i++) {
output = output + str[i] + "!"
}
return output;
}


function indexedChars(str) {
let indexStr = "";
for (let i = 0; i < str.length; i++){
indexStr += i + str[i]; 
}
return indexStr;
}

console.log(indexedChars('Arizona'))

function numberedChars(str){
  let output = ""
  for(let i = 0; i < str. length; i++){
    output += "(" +  (i + 1) + ")" + str[i];
  }
  return output;
}

// function exclaim(str) {
// let output = "";

// for(let i = 0; i < str.length; i++ ) {
//   if (str[i] === "?" || str[i] === "."){
//     output += "!";
//   }else{
//     output += str[i];
//   }
// }
// return output;
// }
function exclaim(str) {
let output = "";
let i = 0; //initialize index variable

while (i < str.length){
  if (str[i] === "?" || str[i] === "."){
         output += "!";
      }else{
         output += str[i];
       }
       i++
     }
     return output;
}






 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  // emailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
