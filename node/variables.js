// there are 3 basic ways to declare variables in js

// Var, but don't use this one anymore
var test =  3;

// let, is like var, but block scoped, and not allowed to re-declare
let hello = 'world'; // Notice strings use single quotes
hello = 5; // changing the type of variable is okay, in this case string to number.

// const is a constant
const iAmAConstant = 9;

// objects
// variables can also be objects
const obj = {};

// objects can dynamically add and remove properties
obj.a = 9;

// For Practice

// declare an object with an object as a property
const testVariable = {
    y : {
        a : 'Hello',
        b : 5,
        c : 10,
    },
};
console.log(testVariable);

// delete a property
delete testVariable.y;
testVariable.a = 'p';
console.log(testVariable);
// change a property
testVariable.a = 20;
console.log(testVariable);