// Declaring with the function keyword
function hi() {
  console.log('Say Hello');
}

hi(); //dont use normal funcion because it lets you call functions before they were declared

// arrow functions
const arrow = (test) => {
  console.log(test);
}

arrow('hi');

// for practice

// make an arrow function with no block body
const myArrow = (y) => y + 1; //returns a value
console.log(myArrow(8));
// make a function that returns a function
const functionFactory = () => () => console.log("This is weird :P");
const a = functionFactory;
a();
const anotherFunction = functionFactory;
anotherFunction()();