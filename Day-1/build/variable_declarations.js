"use strict";
let x; // eexplicit declaration of x as number
let y = 1; // implicit declaration of y as number
let z; // no declaration
// x= "one" // raise an error as x is supposed to be number, same with y
z = "one"; //shows no error, implicit conversion of z to string type
//  y. //only show options related to number type
// PRIMITIVE TYPES
let flag;
let yes = true;
let no = false;
let a; //it's either float or bigint, no inbetween
let b = 0;
let c = 123.456;
let big = 100n; // idk about this one yet
let s;
let empty = "";
let abc = 'abc';
// also template strings
let cloud = "THUNDER";
let sentence = `my name is ${cloud},
lightning,
my name is something very frightning`;
console.log(sentence);
// any type
let randomValue = 10;
randomValue = 'Mateo'; // doesn't throw error, ANYTHING ALLOWED
randomValue = true; // OK
//unknown
let random = 10;
random = true;
random = 'Mateo';
// console.log(random.name);  // Error: Object is of type unknown
// random();                  // Error: Object is of type unknown
// random.toUpperCase();      // Error: Object is of type unknown
