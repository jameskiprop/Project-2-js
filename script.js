// // // String manipulation tactics

// // /* 1. Reverse a String: Write a function that reverses a given string.*/

// function reverseString(str) {
//   /*using the split() method to return a new array*/
//   let splitString = str.split("");
//   console.log(splitString);

//   /*using the reverse method to reverse the newly created array*/
//   let reverseArray = splitString.reverse();
//   console.log(reverseArray);
//   /*using the join () method to join all elements of the array into a string*/
//   let joinArray = reverseArray.join("");

//   return joinArray;
// }
// //example of the function in use
// let result = reverseString("jamie");
// console.log(result);

// // /* 2. Count Characters: Create a function that counts the number of characters in a string.*/

function characterCount(str) {
  let count = 0; /*initializing the first count position to be zero*/
  // iterating through every character in the string
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count;
}
//example of the function in use
let result = characterCount("Kiprop is a FullStack Developer");
console.log(result);

/* 3. Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence */
//defining the function
function capitalizeFirstLetter(sentence) {
  //splitting the sentence into separate words
  let words = sentence.split(" ");
  //capitalizing the first letter of each word
  let capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  //joining the words and making them a sentence
  let final = capitalizedWords.join(" ");

  //giving back the result
  return final;
}
//example of the function in use
let sentence = "kiprop is a full-stack developer";
let capitalizedSentence = capitalizeFirstLetter(sentence);
console.log(capitalizedSentence);

//Array Functions

/* 1. Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.*/

/* 2. Sum of Array: Create a function that calculates the sum of all elements in an array.*/

/* 3. Filter Array: Implement a function that filters out elements from an array based on a given condition.*/

//Mathematical Functions

/* 1. Factorial: Write a function to calculate the factorial of a given number.*/

/* 2. Prime Number Check: Create a function to check if a number is prime or not.*/

/* 3. Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )*/
