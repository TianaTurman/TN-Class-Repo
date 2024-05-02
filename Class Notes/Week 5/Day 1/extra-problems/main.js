function isEvenlyDivisible(num1, num1) {
return num1 % num2 === 0
}

function halfSquare(num) {
  return num ** 2 / 2
}

function isLong(str) {
return str.length >= 15
}

// str.split("!"): This method splits the input string into an array of substrings based on the exclamation mark (!) delimiter. For example, if str is "Hello! How are you doing!?", str.split("!") would result in ["Hello", " How are you doing", "?"].
// [0]: This retrieves the first element of the resulting array. In the example above, it would return "Hello".
// + "!": This concatenates the exclamation mark back to the first element obtained in step 2. So, "Hello" + "!" would result in "Hello!".
// So, overall, the function exclaim takes a string, removes everything after the first exclamation mark, and adds an exclamation mark at the end. For example, if you pass "Hello! How are you doing!?" to this function, it would return "Hello!".

function exclaim(str) {
  return str.split("!")[0] + "!"
}

function countWords(str) {
  return str.split(" ").length
}

// const validation = '0123456789': This line creates a string containing all the digits from 0 to 9. This string is used for comparison later on.
// for (let char of str): This is a loop that iterates over each character in the input string str.
// if (validation.includes(char)): Within the loop, it checks if the current character (char) is included in the validation string, i.e., if it's a digit.
// return true: If a digit is found in the string, the function immediately returns true, indicating that the string contains at least one digit.
// If the loop completes without finding any digit (i.e., the function reaches the end without encountering a return statement), it means there are no digits in the string, so the function returns false.
function containsDigit(str) {
  const validation = '0123456789'
  for(let char of str) {
    if(validation.includes(char)){
      return true
    }
  } 
  return false
}

function containsLowerCase() {
}

function containsUpperCase() {
}

function containsNonAlphanumeric() {
  
}

function containsSpace() {
}

function digits() {
}

function truncate() {
}

function isValidPassword() {
}

function onlyPunchy(arr) {
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}
