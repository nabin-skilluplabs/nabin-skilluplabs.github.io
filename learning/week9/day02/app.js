function multiplicationTable(number = 5) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

multiplicationTable(10);



const  sum = (times, ...numbers) => {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total * times;
}

console.log(sum(1));
console.log(sum(5,2));
console.log(sum(10, 2, 3));
console.log(sum(34348387943, 343434, 34343, 34378734834, 343437, 43434, 34343, 34343, 34343, 34343, 34343, 34343, 34343, 34343, 34343));


const multiply = (a, b) => a * b;
console.log(multiply(5, 10));


(function sayHello(){
    console.log("Hello, World!");
})();

function sum2() {
    console.log(arguments)
}

sum2(1);
sum2(2, 3);
sum2(4, 5, 6, 7, 8, 9, 10);


function a() {
    b();
    console.log("Inside function a");
    let x = 10;
    let y = 20;
    console.log(`The sum of x and y is: ${x + y}`);
}

function b() {
    c();
    console.log("Inside function b");
    let x = 100;
    let y = 200;
    console.log(`The sum of x and y is: ${x + y}`);
}

function c() {
    console.log("Inside function c");
    let x = 1000;
    let y = 2000;
    console.log(`The sum of x and y is: ${x + y}`);
}

a();
function innerFunction() {
        console.log("This is the inner function.");
    }

function nestedFunction() {
    
    console.log("This is the outer function.");
    innerFunction();
}

nestedFunction();
innerFunction();

console.log(parseInt("10000256"));
console.log(eval("2 + 3 * 5"))

const person = {
    name: "John Doe",
    age: 30,
    city: "Sydney",
    greet: function() {
        console.log(   `Hello, my name is ${this.name}`);
    }
}
console.log(person.name);
person.greet();

navigator.geolocation.getCurrentPosition(function(position){
    console.log({position: {latitude: position.coords.latitude}});
});


document.querySelector("body").style.backgroundColor = "lightblue";
const h1 =  document.createElement("p");
h1.textContent = "Document Object Model (DOM) Example";
h1.style.color = "red";
document.querySelector("body").appendChild(h1);
h1.addEventListener("mouseover", () => {
    h1.style.color = (h1.style.color === "red") ? "blue" : "red";
});

setInterval(() => {
    const body = document.querySelector("body");
   body.style.backgroundColor = (body.style.backgroundColor === "lightblue") ? "lightgreen" : "lightblue";
}, 100);