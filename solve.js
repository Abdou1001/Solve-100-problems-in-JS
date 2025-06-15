// [1]
//Create a function that takes an integer as an argument and returns "Even" for even numbers
//  or "Odd" for odd numbers.

function evenOrOdd(number) {
  return number % 2 == 0 ? `Even` : `Odd`;
}

// [2]
// Sum of positive

const positiveSum = (arr) =>
  arr.filter((ele) => ele > 0).reduce((acc, cur) => acc + cur, 0);

// [3]
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//  The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//  Mind the input validation.

const sumArray = (arr = [0]) => {
  if (arr == null) return 0;
  if (arr.length <= 2) return 0;
  let minNum = arr[0];
  let maxNum = arr[0];
  arr.forEach((ele) => {
    if (ele < minNum) minNum = ele;
    if (ele > maxNum) maxNum = ele;
  });
  minNum = arr.indexOf(minNum);
  maxNum = arr.indexOf(maxNum);
  return arr
    .filter((ele, ind) => (ind != minNum && ind != maxNum ? ele : null))
    .reduce((acc, cur) => acc + cur);
};

// [4]
// Write a function that accepts an integer n and a string s as parameters, and returns a string of
//  s repeated exactly n times.

const repeatStr = (n, s) => `${s}`.repeat(n);

// [5]
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order

const digitize = (n) =>
  n
    .toString()
    .split("")
    .reverse()
    .map((e) => +e);

// [6]
//Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

const countSheeps = (sheep) =>
  sheep
    .filter((e) => e == true || e == false)
    .reduce((acc, cur) => +acc + +cur, 0);

// [7]
// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

const opposite = (n) => -n;

// [8]
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

const makeNegative = (n) => (n < 0 ? n : -n);

// [9]
// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different.
//  She added a special case to her function, but she made a mistake.

const greet = (name) =>
  name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;

// [10]
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
//  After your function finds the needle it should return a message (as a string) that says:
//  "found the needle at position " plus the index it found the needle

const findNeedle = (arr) =>
  `found the needle at position ${arr.indexOf("needle")}`;

// [11]
// Return an array, where the first element is the count of positives numbers
//  and the second element is sum of negative numbers. 0 is neither positive nor negative.

const countPositivesSumNegatives = (input) => {
  if (!Array.isArray(input) || input.length === 0) return [];
  let position = input.filter((e) => e > 0).length;
  let negative = input.filter((e) => e < 0).reduce((acc, cur) => acc + cur, 0);
  return [position, negative];
};

// [12]
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

const doubleChar = (str) => {
  let newString = "";
  str.split("").forEach((e) => (newString += e + e));
  return newString;
};

// [13]
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

const basicOp = (operation, value1, value2) => {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;

    default:
      return 0;
  }
};

// [14]
// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.

const squareOrSquareRoot = (array) =>
  array.map((e) =>
    Math.sqrt(e) == Math.sqrt(e).toFixed(0) ? Math.sqrt(e) : e ** 2
  );

// [15]
// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.

const countBy = (x, n) => {
  let arr = [];
  if (x == 0) return;
  for (let i = x; arr.length < n; i += x) {
    arr.push(i);
  }
  return arr;
};

// [16]
// Write a function that removes the spaces from the string, then return the resultant string.

const noSpace = (x) => x.split(" ").join("");

// [17]
// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.

const invert = (arr) => arr.map((e) => -e);

// [18]
// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.

const booleanToString = (b) => `${b}`;

// [19]
// You need to write a function that reverses the words in a given string. Words are always separated by a single space.
// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace

const reverse = (string) => string.split(" ").reverse().join(" ");

// [20]
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

const litres = (liters) => ~~(liters * 0.5);

// [21]
// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?

const numberToString = (number) => {
  // [1]
  // return `${number}`;
  // [2]
  // return number.toString()
  // [3]
  return String(number);
};

// [22]
//Write a function which calculates the average of the numbers in a given array.
// Note: Empty arrays should return 0.

const findAverage = (array) =>
  array.length != 0
    ? array.reduce((acc, cur) => acc + cur, 0) / array.length
    : 0;

// [23]
// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

const stringToNumber = (str) => parseInt(str);

// [24]
// You take your son to the forest to see the monkeys. You know that there are a certain number there (n),
// but your son is too young to just appreciate the full number, he has to start counting them from 1.
// As a good parent, you will sit and count with him. Given the number (n),
// populate an array with all numbers up to and including that number, but excluding zero.

const monkeyCount = (n) => Array.from({ length: n }, (e, i) => e);

// [25]
// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries.
// Marketing thinks it would be great to welcome visitors to the site in their own language.
// Luckily you already use an API that detects the user's location, so this is an easy win.

// Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting -
// if you have it in your database.
// It should default to English if the language is not in the database, or in the event of an invalid input.

const greetLanguage = (language) => {
  const lang = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };

  return lang.hasOwnProperty(language) ? lang[language] : lang.english;
};

// [26]
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful
// there shouldn't be a space at the beginning or the end of the sentence!

const smash = (words) =>
  words.length != 0
    ? words.reduce((acc, cur) => `${acc.trim()} ${cur.trim()}`)
    : "";

// [27]
// When provided with a number between 0-9, return it in words.
// Note that the input is guaranteed to be within the range of 0-9.
// Input: 1
// Output: "One".
// If your language supports it, try using a switch statement.

const switchItUp = (number) => {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return "undefined";
  }
};

// [28]
// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation...
// but who is going to make the most money?
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. If bonus is false,
// the fatcat did not make enough money and must receive only his stated salary.

const bonusTime = (salary, bonus) => (bonus ? `£${salary * 10}` : `£${salary}`);

// [29]
// Remove an exclamation mark from the end of a string. For a beginner kata,
// you can assume that the input data is always a string, no need to verify it.

const removeExclamation = (string) =>
  string.endsWith("!") ? string.slice(0, -1) : string;

// [30]
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

const areYouPlayingBanjo = (name) =>
  `${name} ${
    name[0].toUpperCase() == "R" ? "plays banjo" : "does not play banjo"
  }`;

// [31]
// Take an array and remove every second element from the array.
// Always keep the first element and start removing with the next element.

const removeEveryOther = (arr) => arr.filter((e, i) => (i % 2 == 0 ? e : null));

// [32]
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

const createArray = (createArray) => {
  let newArray = [];
  for (let counter = 1; counter <= createArray; counter++) {
    newArray.push(counter);
  }
  return newArray;
};

// [33]
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total.
// Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

const rentalCarCost = (d) =>
  d >= 7 ? 40 * d - 50 : d >= 3 ? 40 * d - 20 : 40 * d;

// [34]
// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata).
// The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true,
//  false otherwise.

const xor = (a, b) => (a && !b) || (!a && b);

// [35]
// our task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not,
//  so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers.
// The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

const firstNonConsecutive = (arr) => {
  let count = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != count) {
      return (ele = arr[i]);
    }
    count++;
  }
  return null;
};

// [36]
// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid.
// Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

// [37]
// Each number should be formatted that it is rounded to two decimal places.
// You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

const twoDecimalPlaces = (n) => Number(n.toFixed(2));

// [38]

// The company you work for has just been awarded a contract to build a payment gateway.
// In order to help move things along, you have volunteered to create a function that will take a float
// and return the amount formatting in dollars and cents.

const formatMoney = (amount) => `$${amount.toFixed(2)}`;

// [39]
// When provided with a letter, return its position in the alphabet.
// Input :: "a"
// Output :: "Position of alphabet: 1"
// Note: Only lowercased English letters are tested

let letters = "abcdefghijklmnopqrstuvwxyz".split("");
const position = (letter) =>
  `Position of alphabet: ${letters.indexOf(letter) + 1}`;

//[40]
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each.
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

const lovefunc = (flower1, flower2) => (flower1 + flower2) % 2 != 0;

// [41]
// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.

const noBoringZeros = (n) => {
  n = String(n);
  if (n.length == 1) return parseInt(n);
  while (n.endsWith("0")) n = n.slice(0, -1);
  return parseInt(n);
};

// [42]
// It's the academic year's end, fateful moment of your school report. The averages must be calculated.
// All the students come to you and entreat you to calculate their average for them.
// Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

const getAverage = (marks) =>
  Math.floor(marks.reduce((acc, cur) => acc + cur, 0) / marks.length);

// [43]
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

const shortcut = (string) =>
  string
    .split("")
    .filter((e) => e != "a" && e != "e" && e != "i" && e != "o" && e != "u")
    .join("");

// [44]
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const removeExclamationMarks = (s) => s.replaceAll("!", "");

// [45]
// Complete the solution so that it reverses the string passed into it.

const solution = (str) => str.split("").reverse().join("");

// [46]
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const grow = (x) => x.reduce((acc, cur) => acc * cur);

// [47]
// Write a function that checks if a given string (case insensitive) is a palindrome.
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards,
// such as madam or racecar.

const isPalindrome = (x) =>
  x.toLowerCase() === x.split("").reverse().join("").toLowerCase();

// [48]
// Write a program that finds the summation of every number from 1 to num.
//  The number will always be a positive integer greater than 0. Your function only needs to return the result,
//  what is shown between parentheses
// in the example below is how you reach that result and it's not part of it, see the sample tests.
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

let summation = (num) => {
  let sum = 0;
  for (i = 1; i <= num; i++) sum += i;
  return sum;
};

// [49]
// Input: Array of elements
// ["h","o","l","a"]
// Output: String with comma delimited elements of the array in th same order.
// "h,o,l,a"

const printArray = (array) => array.join(",");

// [50]
// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning.
//  He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.
// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.
// 20_year_estimate = one_year_total * 20
// You will receive the following data structure representing the stairs Suzuki logged in a year.
// You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.
// stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
// Make sure your solution takes into account all of the nesting within the stairs array.
// Each weekday in the stairs array is an array.
// sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174,
//  7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097,
//   6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
// Your function should return the 20 year estimate of the stairs climbed using the formula above.

const stairsIn20 = (s) => s.flat().reduce((acc, cur) => acc + cur) * 20;

// [51]
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

const removeChar = (str) => str.slice(1, -1);

// [52]
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

const squareSum = (numbers) =>
  numbers.map((e) => e ** 2).reduce((acc, cur) => acc + cur, 0);

// [53]
// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

const findSmallestInt = (arr) => {
  let smallest = arr[0];
  for (e of arr) smallest = smallest > e ? e : smallest;
  return smallest;
};

// [54]
// Create a function that checks if a number n is divisible by two numbers x AND y.
// All inputs are positive, non-zero numbers.

const isDivisible = (n, x, y) => n % x == 0 && n % y == 0;

// [55]
// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

const maps = (x) => x.map((e) => e * 2);

// [56]
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
// Return the resulting string.
// Note: input will never be an empty string

const fakeBin = (x) => {
  let binary = "";
  for (n of x) binary += n >= "5" ? "1" : "0";
  return binary;
};

// [57]
// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

const sum = (numbers) => numbers.reduce((acc, cur) => acc + cur, 0);

// [58]
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

const simpleMultiplication = (n) => (n % 2 == 0 ? n * 8 : n * 9);

// [59]
// Write a function which converts the input string to uppercase.

const makeUpperCase = (str) => str.toUpperCase();

// [60]
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements.
// I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

const arrayPlusArray = (arr1, arr2) =>
  arr1.concat(arr2).reduce((acc, cur) => acc + cur, 0);

// [61]
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

const sumMix = (x) => x.reduce((acc, cur) => Number(acc) + Number(cur), 0);

// [62]
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule:
// the dish must start and end with the same letters as the animal's name.
//  For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false
// to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters.
//  beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

const feast = (beast, dish) =>
  beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];

// [63]
// You're writing code to control your town's traffic lights. You need a function to handle each change from green,
//  to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns
// a string representing the state the light should change to.
// For example, when the input is green, output should be yellow.

const updateLight = (current) =>
  current == "red" ? "green" : current == "green" ? "yellow" : "red";

// [64]
// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters.
// The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation
// (because these are the circumstances under which you need to set an alarm). It should return false otherwise.

const setAlarm = (employed, vacation) => employed && !vacation;

// [65]
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter;
// and month 11 (November), is part of the fourth quarter.
// Constraint:
// 1 <= month <= 12

const quarterOf = (month) => Math.ceil(month / 3);

// [66]
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
// Example(Input --> Output)
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
// Note: String will have at least one element; words will always be separated by a space.

const addLength = (str) => str.split(" ").map((e) => `${e} ${e.length}`);

// [67]
// Inspired by the development team at Vooza, write the function that
// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
// Note: your function should have a default parameter.
// For example(Input --> Output):
// "anyone else" --> 0
// "Zach" --> 18

const howManyLightsabersDoYouOwn = (name) => (name == "Zach" ? 18 : 0);

// [68]
// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
// The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - sonYearsOld * 2);

// [69]
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

const hoopCount = (n) =>
  n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";

// [70]
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

const correct = (string) =>
  string
    .split("")
    .map((e) => (e == "5" ? "S" : e == "0" ? "O" : e == "1" ? "I" : e))
    .join("");

// [71]
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return true if you're better, else false!
// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

const betterThanAverage = (classPoints, yourPoints) =>
  classPoints.reduce((acc, cur) => acc + cur, 0) / classPoints.length <
  yourPoints;

// [72]
// Complete the solution so that it reverses all of the words within the string passed in.
// Words are separated by exactly one space and there are no leading or trailing spaces.
// Example(Input --> Output):
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

const reverseWords = (str) => str.split(" ").reverse().join(" ");

// [73]
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

const bmi = (weight, height) => {
  const mass = weight / height ** 2;
  return mass <= 18.5
    ? "Underweight"
    : mass <= 25.0
    ? "Normal"
    : mass <= 30.0
    ? "Overweight"
    : "Obese";
};

// [74]
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor.
//  First argument is an array of numbers and the second is the divisor.
// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

const divisibleBy = (numbers, divisor) =>
  numbers.filter((e) => e % divisor == 0);

// [75]
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

const powersOfTwo = (n) => {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(2 ** i);
  }
  return arr;
};

// [76]
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
// Example: (Input1, Input2 -->Output)
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

const sumStr = (a, b) => String(Number(a) + Number(b));

// [77]
// You will be given a list of strings. You must sort it alphabetically
// (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.

const twoSort = (s) => [...s.sort()[0]].join("***");

// [78]
// Given three integers a, b, and c, return the largest number obtained after inserting the operators +, *, and parentheses ().
// In other words, try every combination of a, b, and c with the operators, without reordering the operands, and return the maximum value.
// Example
// With the numbers 1, 2, and 3, here are some possible expressions:
// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// The maximum value that can be obtained is 9.
// Notes
// The numbers are always positive, in the range 1 ≤ a, b, c ≤ 10.
// You can use the same operation more than once.
// It is not necessary to use all the operators or parentheses.
// You cannot swap the operands. For example, with the given numbers, you cannot get the expression (1 + 3) * 2 = 8.
// Input and Output Examples

const expressionMatter = (a, b, c) => {
  let matter1 = a + b + c;
  let matter3 = a * b * c;
  let matter2 = a * (b + c);
  let matter4 = (a + b) * c;
  return Math.max(matter1, matter2, matter3, matter4);
};

// [79]
// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.

const testEven = (n) => n % 2 == 0;

// [80]
// Write a function that takes a list of strings as an argument
// and returns a filtered list containing the same elements but with the 'geese' removed.
// The geese are any strings in the following array, which is pre-populated in your solution:
// ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:
// ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

const gooseFilter = (birds) => {
  const geese = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];
  birds = birds.filter((e) => !geese.includes(e));
  return birds;
};

// [81]
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]

const between = (a, b) =>
  Array.from(Array((length = b - a + 1)), (e, i) => a + i);

// [82]
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard.
// It is your job to fix the code and get the program working again!
// Example output:
// Hello, Mr. Spock

const sayHello = (name) => `Hello, ${name}`;

// [83]
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
// Example:
// move(3, 6) should equal 15

const move = (position, roll) => position + roll * 2;

// [84]
// ([1, 2, 3, 4],2), 9
// 3 ** 2 = 9
// ([1,1,1,1,1,1,1,1,1,1], 9),1
// 1 ** 9
// ([1, 2],3),-1

const index = (array, n) => (array[n] !== undefined ? array[n] ** n : -1);

// [85]
// Messi is a soccer player with goals in three leagues:
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.
// Note: the input will always be valid.
// For example:
// 5, 10, 2  -->  17

const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) =>
  laLigaGoals + copaDelReyGoals + championsLeagueGoals;

// [86]
// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
// the string should start with a 1.
// a string with size 6 should return :'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.
// The size will always be positive and will only use whole numbers.

const stringy = (size) => {
  let str = "";
  let binary = "1";
  for (let i = 0; i < size; i++) {
    str += binary;
    binary = binary == "1" ? "0" : "1";
  }
  return str;
};

// [87]
// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit.
// If limit is a multiple of integer, it should be included as well.
// There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
// For example, if the parameters passed are (2, 6),
// the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

const findMultiples = (integer, limit) => {
  let list = [];
  for (let i = 1; i <= limit; i++) {
    if (i % integer == 0) list.push(i);
  }
  return list;
};

// [88]
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
// The order of the sequence has to stay the same.
// Examples:
// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

const distinct = (a) => [...new Set(a)];

// [89]
// ind the sum of all multiples of n below m
// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

const sumMul = (a, b) => {
  if (b <= 0) return "INVALID";
  let list = [];
  for (let i = 1; i < b; i++) {
    if (i % a == 0) list.push(i);
  }
  return list.reduce((acc, cur) => acc + cur, 0);
};

// [90]
// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (always 2 for Java).
// You can not use multiplier "*" operator.
// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 letters * 30 = 600 (Space counts as a character).

const billboard = (name, price = 30) => {
  let total = 0;
  for (let i = 0; i < name.length; i++) {
    total += price;
  }
  return total;
};

// [91]
// Create a method that takes as input a name, city, and state to welcome a person.
//  Note that name will be an array consisting of one or more values
// that should be joined together with one space between each,
// and the length of the name array in test cases will vary.
// Example:
// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

const sayHello2 = (name, city, state) =>
  `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;

// [92]
// You are given a string containing a sequence of character sequences separated by commas.
// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty,
// return an empty value (represented as a generic value NULL in the examples below).

const array = (string) =>
  string.split(",").length <= 2
    ? null
    : string.split(",").slice(1, -1).join(" ");

// [93]
// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.
// The pipes are correct when each pipe after the first is 1 more than the previous one.
// Task
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

const pipeFix = (numbers) => {
  let arr = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) arr.push(i);
  return arr;
};

// [94]
// ou ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old".
// The first character in the string is always a number.

const getAge = (inputString) => Number(inputString[0]);

// [95]
// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.
// About factors
// Factors are numbers you can multiply together to get another number.
// 2 and 3 are factors of 6 because: 2 * 3 = 6
// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1
// Note: base is a non-negative number, factor is a positive number.

const checkForFactor = (base, factor) => base % factor == 0;


// [96]
// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents.
// With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus!
// He wants you to write a simple program telling him if he will be able to fit all the passengers.
// Task Overview:
// You have to write a function that accepts three parameters:
// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

const enough = (cap, on, wait) => cap - (on + wait) >= 0 ? 0 : -(cap - (on + wait));

// [97]
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:
// case	                return
// name equals owner	  'Hello boss'
// otherwise	          'Hello guest'
const greet2 = (name, owner) => name == owner ? `Hello boss` : `Hello guest`;

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = (l, w) => l === w ? l * w : l * 2 + w * 2; 

// [99]
// For every good kata idea there seem to be quite a few bad ones!
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!',
// if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

const well = (x) => {
  let counter = 0;
  for (let i = 0; i < x.length; i++)
    if (x[i] === "good") counter++
  return counter == 0 ? "Fail!" : counter <= 2 ? "Publish!" : 'I smell a series!';
}

// [100]
// Write a function that returns a string in which firstname is swapped with last name.

const nameShuffler = (str) => str.split(" ").reverse().join(" ");