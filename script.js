// // // String manipulation tactics

/* 1. Reverse a String: Write a function that reverses a given string.*/

function reverseString(str) {
  /*using the split() method to return a new array*/
  let splitString = str.split("");
  console.log(splitString);

  /*using the reverse method to reverse the newly created array*/
  let reverseArray = splitString.reverse();
  console.log(reverseArray);
  /*using the join () method to join all elements of the array into a string*/
  let joinArray = reverseArray.join("");

  return joinArray;
}
//example of the function in use
let result = reverseString("jamie");
console.log(result);

/* 2. Count Characters: Create a function that counts the number of characters in a string.*/

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

/*function taking an array of numbers as an argument and returns an array containing the maximum and minimum numbers from the input array.*/
function findMaxandMin(arr) {
  /*Math.max function finds the maximum number in the array. The spread operator (...) passes the array's elements as individual arguments to the Math.max function.*/
  let maximum = Math.max(...arr);
  /*Math.min function to find the minimum number in the array. Spread operator (...)  passes the array's elements as individual arguments to the Math.min function.*/
  let minimum = Math.min(...arr);
  /*creating an array to store the maximum and minimum values.*/
  let result = [maximum, minimum];

  return result; // contains the maximum and minimum values of the array
}
console.log(`findMaxandMin:`, findMaxandMin([23, 65, 12, 4, 98, 45, 67]));

/*another method*/
function findMaxandMin(arr) {
  //array acess of first element as a starting point as iterates through
  let maximum = arr[0];
  //array acess of first element as a starting point as iterates through
  let minimum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (maximum < arr[i]) {
      maximum = arr[i];
    } else {
      minimum = arr[i];
    }
  }
  let result = [maximum, minimum];
  return result;
}
console.log(`findMaxandMin :`, findMaxandMin([23, 65, 12, 4, 98, 45, 67]));

/* 2. Sum of Array: Create a function that calculates the sum of all elements in an array.*/
function findSum(arr) {
  //declaring the variable 0 and initializing it to zero (sets up a starting point for the accumulation of the sum of all elements in the array.)
  let sum = 0;
  //looping through every element in the array
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // adds the current element to sum
  }
  return sum; //contains the sum of all elements of the array
}
console.log(`findSum:`, findSum([23, 45, 23, 12, 34]));

/* 3. Filter Array: Implement a function that filters out elements from an array based on a given condition.*/
function filterOut(arr) {
  //declaring an empty array that will hold elements which will meet the condition
  const newArr = [];
  //iterating through all other elements of the Arr
  for (let i = 0; i < arr.length; i++) {
    //getting the current element in arrray at a given location index i
    const item = arr[i];
    //checking if the current element is greater than 67
    const isGreaterThan67 = item > 67;
    //if it is greater than 67, add the number to a new Array
    if (isGreaterThan67) {
      newArr.push(item);
    }
  }
  //returning the new array which has items greater than 67
  return newArr;
}
//example in usage
const thisArray = [23, 45, 65, 76, 68, 98, 46, 82, 95, 23, 14, 53, 26];
console.log(`filterOut :`, filterOut(thisArray));

//Mathematical Functions

/* 1. Factorial: Write a function to calculate the factorial of a given number.*/
function calculateFactorial(number) {
  //initializing a variable ans to 1 (ensures that the initial multiplication does not alter the result.)
  let ans = 1;
  //checking if number equals zero
  if (number === 0) return 1;
  //Loop from 2, inclusive of 'number'
  for (let i = 2; i <= number; i++) {
    ans = ans * i;
  }

  //returning the calculated factorial value
  return ans;
}
//example in use
let number = 5;
console.log(calculateFactorial(number));
/* 2. Prime Number Check: Create a function to check if a number is prime or not.*/
function primeNumber(number) {
  //cancelling out any number that is less than 2
  if (number < 2) {
    return false;
  }
  //checking if the number is even and is greater than 2
  if (number % 2 === 0) {
    return false;
  }
  //looking out for divisors from 3 until the square root of the said number
  for (let i = 3; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  //if no divisors found, number is a prime number
  return true;
}
//example
let num = 9;
console.log(primeNumber(num));

/* 3. Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )*/
function createFibonacci(n) {
  //conditions for the sequence
  if (n <= 0) {
    return []; //returning an empty array
  } else if (n === 1) {
    return [0];
  }
  //initializing a sequence and initializing it with the first two numbers
  let Fibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    //calculating the next Fibonacci number by summing the last two numbers in the array.
    let newTerm = Fibonacci[i - 1] + Fibonacci[i - 2];
    Fibonacci.push(newTerm); //Appending the new number to the array.
  }
  return Fibonacci;
}

// Example in use
console.log(createFibonacci(12));
