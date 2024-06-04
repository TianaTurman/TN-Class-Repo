// Exercise 1: Extracting Digits
// Task: Write a regex to extract all digits from a given string.
const str1 = "There are 3 cats and 4 dogs.";
const regex1 = /\d+/g;
const matches1 = str1.match(regex1);
console.log(matches1); // ["3", "4"]



// Exercise 2: Finding All Vowels
// Task: Write a regex to find all vowels (a, e, i, o, u) in a given string.



// Exercise 3: Extracting Words
// Task: Write a regex to extract all words from a given string. 
  



// Exercise 4: Finding Email Addresses
// Task: Write a regex to find all email addresses in a given string.




// Exercise 5: Extracting Hashtags
// Task: Write a regex to extract all hashtags from a given string.





// Exercise 6: Finding HTML Tags
// Task: Write a regex to find all HTML tags in a given string.




// Exercise 7: Extracting Dates
// Task: Write a regex to extract dates in the format YYYY-MM-DD from a given string.



// Exercise 8: Extracting Prices
// Task: Write a regex to extract prices from a given string (e.g., $4.99, $100.00).


const str = "$4.99 $100.00.";
const regex = /\$\d+\.\d{2}/g;
const matches = str.match(regex);
console.log(matches)


// Exercise 9: Finding IP Addresses
// Task: Write a regex to find all IPv4 addresses in a given string.




// Exercise 10: Extracting Time
// Task: Write a regex to extract time in the format HH
// from a given string.

