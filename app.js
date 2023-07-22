let str = "Hello World";

// introduction of JS data types, str, number, boolean, undefined, and Null.

console.log(str.length);
console.log(str[str.length - 1]);

let fullName = "Ryan Tang";

let celsius10 = 10;
let fahrenheitOfCelsius10 = celsius10 * 1.8 + 32;

console.log(fahrenheitOfCelsius10);

let string51 = "51";
let number51 = 51;

console.log(string51 == number51);
console.log(string51 === number51);

// the == should return true as the two values are the same,
// but the === should return false as one is a string and
// the other is a number.

let subscribed = true;
let loggedIn = true;

if (subscribed === true) {
  console.log("you're subscribed");
} else if (loggedIn === true) {
  console.log("Please log in");
} else {
  console.log("Please Subscribe");
}

// If else and else if conditional example. Change the boolean
// value to false to test.

let cash = 50;
let price = 40;
let difference = cash - price;

if (cash > price) {
  console.log(`You paid extra, here's your $${cash - price} change.`);
} else if (cash === price) {
  console.log(`you paid the exact amount, have a nice day!`);
} else {
  console.log(`not enough money - you still owe ${difference * -1} dollars.`);
}

// Using `` for string, you can add ${} to exvaluate expressions and
// insert the results into the string. Play around by altering the
// values for cash and price to see the different outcomes.

let isStoreOpen = true;

if (cash >= price && isStoreOpen) {
  console.log(`print the receipt`);
} else {
  console.log(`falsy`);
}

// && and operator, || or operator
// for booleans, we don't need to add === true or === false.
// we can just keep the boolean variable as is to check if true
// or add ! to check if false.
// For falsy values, we can use !! to check.

cash > price && isStoreOpen
  ? console.log(`give receipt`)
  : console.log("do not give receipt");

// Ternary operator practice.

let hot = true;

hot ? console.log(`It's hot outside.`) : console.log(`It's not hot outside.`);

// Demonstration of ternary operators.

subscribed && loggedIn
  ? console.log("show the video")
  : console.log("hide the video");

// more tenary operator examples.

// DRY = Don't repeat yourself.
// 3 types of loops, for loop, while loop, and do while loop.

let count = 1;

// while (count <= 100) {
//     console.log(`${count}`)
//     count = count + 1;
// }

// example of while loop printing to 100. Uncomment to see it in console.

// for (let i = 1; i < 101; i++) {
//     console.log(i);
// }

// example of for loop printing all digits to 100, uncomment to see it in console

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} -> Frontend Simpliefied`);
//   } else if (i % 3 === 0) {
//     console.log(`${i} -> Frontend`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} -> Simplified`);
//   }
//   else {
//     console.log(`${i} -> ${i}`);
//   }
// }

const stringFES = `Frontend Simplified`;

// for (let i = 0; i < stringFES.length ; i++) {
//     console.log(stringFES[i])
// }

// Some for loop practices to print strings and print at certain values.

function welcomePersonToFES(newPersonName) {
  console.log(`Welcome to FES, ${newPersonName}`);
}
// Writing a function does not execute it until called. This is called
// Function definition.

welcomePersonToFES(`Ryan`);
// This is when we call the function. Check console output to view.

function fn() {
  return 5;
  console.log("my function");
}

console.log(fn());
// Demonstration of how some lines of code become unreachable in a
// function.

function sumOfTwoNumbers(num1, num2) {
  return num1 * num2;
}

console.log(sumOfTwoNumbers(10, 20));
// Example of having multiple parameters for a function.

function celsiusToFahrenheit(celsius1) {
  return celsius1 * 1.8 + 32;
}

const convertCelsiusToFahrenheit = (celsius2) => {
  return celsius2 * 1.8 + 32;
};
// The two ways of defining a function, one using function, the
// the other using const.

console.log(
  celsiusToFahrenheit(0),
  celsiusToFahrenheit(10),
  celsiusToFahrenheit(30)
);

console.log(convertCelsiusToFahrenheit(10));
// calling the functions we defined earlier.

let item1 = 20;
let item2 = 30;
let item3 = 40;
let item4 = 50;
let item5 = 100;

let arr = [20, 30, 40, 50, 100];

// Access first element of array:
console.log(arr[0]);
// Access last element of array using length - 1:
console.log(arr[arr.length - 1]);
// adding an element to the end of the array using push:
// JS executes the code from top to bottom.
arr.push(200);

console.log(arr);

// filter function will loop through every single element.
let newArr = arr.filter((element) => {
  return element < 50;
});

console.log(newArr);

let grades = ["A+", "A", "FAIL"];
let badgrades = ["FAIL", "FAIL", "B"];

let newGradesARR = grades.filter((element) => {
  return element !== "FAIL";
});

// Best solution
// let newGradesARR = grades.filter((element) => element !== 'FAIL')

console.log(newGradesARR);

let newGrades = [];

for (let i = 0; i < badgrades.length; ++i) {
  if (badgrades[i] !== "FAIL") {
    newGrades.push(badgrades[i]);
  }
}

console.log(newGrades);
// for loop version of filtering an array.

let dollars = [1, 5, 10, 3];
let cents = [];

for (let i = 0; i < dollars.length; ++i) {
  cents.push(dollars[i] * 100);
}

// Best Solution:
// let cents = dollars.map(element => element * 100)
// remember to comment out the for loop and the empty cents
// array then run this.

console.log(cents);

// Objects Section

let users = [
  {
    username: "David",
    email: "david@frontendsimplified.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordID: "David Bragg#0001",
    lessonsCompleted: [0, 1],
  },
  {
    username: "Ryan",
    email: "ryan@frontenedsimplified.com",
    password: "sheesh123",
    subscriptionStatus: "FES Bootcamp",
    discordID: "David Bragg#0001",
    lessonsCompleted: [0, 1],
  },
];

function login(email, password) {
  for (let i = 0; i < users.length; ++i) {
    if (users[i].email !== email) {
      console.log(`email is incorrect - try again`);
    } else {
      if (users[i].password === password) {
        console.log(`log the user in - the details are correct`);
      } else {
        console.log(`password is incorrect - try again`);
      }
    }
  }
}

login("david@frontendsimplified.com", "test123");
// some basic object programming in JS.

function register(user) {
  users.push(user);
  console.log(user);
}

register({
  username: `Zen`,
  email: `zen@frontendsimplified.com`,
  password: `zen123`,
  subscriptionStatus: "VIP",
  discordID: "Zen#0001",
  lessonsCompleted: [0, 1],
});

console.log(users);
// A good practice for creating a register function, where you
// define the user object within the function and push it
// to the users array, avoiding messy codes where things aren't
// well-defined.

// DOM (Document Object Model): allows you to acess and change
// the styling and content of elements on your website.

// First way of accessing an element (MORE POPULAR)
console.log(document.querySelector('#title'));

// Second way of accessing an element
console.log(document.getElementById('title'));


// Change HTML
document.querySelector('#title').innerHTML += 'Frontend Simplified'

// Change CSS
document.querySelector('#title').style.fontSize = '64px'

function changeTitleToRed() {
    document.querySelector('#title').style.color = 'red'
}

function toggleDarkMode() {
    document.querySelector('body').classList.toggle('dark-theme')
}