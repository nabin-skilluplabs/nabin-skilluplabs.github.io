function sayHello(name) {
  console.log('Hello ' + name);
}

sayHello('Alex');

// Variables
var name = 'Steve';
console.log(name);
// declaration
// assignment
console.log(age);
var age = 30;
age = age + 1;

let city = 'Sydney';
city = 'Melbourne';
console.log(city);

const country = 'Australia';
// country = 'New Zealand';
console.log(country);

let firstName = 'John';
firstname = 'Doe';

let count = 1;
function increment() {
  count = count + 1;
  let flag = true;
  if (flag) {
    count = count + 1;
    let flag = false;
    console.log('Inside if block: ' + count);
    console.log('Inside if block: ' + flag);
  }
  console.log('Inside function: ' + count);
  console.log('Inside function: ' + flag);
}
increment();
console.log(count);

//
let isMarried = false;
console.log(typeof isMarried);
let hasEmployer = null;
let salary = undefined;
salary = 50000;
let bossSalary = 500000000n;
let greeting = 'Hello, mate';
let symbol = Symbol('1234567890');
console.log(typeof symbol);
// objects
let person = {
  name: 'John',
  age: 30,
  city: 'Sydney',
};
console.log(typeof person);
let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers);
let sets = new Set([1, 2, 3, 4, 5]);
let map = new Map();
map.set('name', 'John');
map.set('age', 30);
map.set('city', 'Sydney');
console.log(typeof map);
person.name;
console.log(person.name);
console.log(map.get('name'));

let salary2 = 50000;
let tax = '100.50';
let netSalary = salary2 - parseInt(tax);
console.log(netSalary);

// Loops
for (let i = 100; i >= 0; i = i - 5) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log('2 * ' + i + ' = ' + 2 * i);
}

// initialization
// condition
// increment/decrement

let i = 5; // initialization
do {
  console.log(i);
  i = i + 1; // increment
} while (i < 5); // condition

let j = 0;
while (j < 5) {
  j = j + 1;
  if (j === 3) continue;
  console.log(j);
}

// for of
let students = ['John', 'Jane', 'Doe', 'Donald', 'Smith'];
for (let student of students) {
  console.log(student);
}

const user = {
  name: 'John',
  age: 30,
  city: 'Sydney',
  email: 'john@gmail.com',
};

for (let key in user) {
  console.log(key + ': ' + user[key]);
}

// conditions
let email = 'admin@gmail.com';
let password = '123456';

if (email === 'alex@gmail.com') {
  console.log('Email is correct');
} else if (email === 'admin@gmail.com') {
  console.log('Email is admin');
} else {
  console.log('Email is incorrect');
}

let isMarriedUser = true;
if (isMarriedUser) {
  console.log('You got 20% discount on your purchase!');
} else {
  console.log('Sorry, you are not eligible for the discount!');
}

let day = 'Thursday';
switch (day) {
  case 'Monday':
    console.log('It is Monday');
    break;
  case 'Tuesday':
    console.log('It is Tuesday');
    break;
  default:
    console.log('It is not Monday or Tuesday');
}
