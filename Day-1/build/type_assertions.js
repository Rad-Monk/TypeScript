"use strict";
// only works with any and unknown properly so far
let something;
something = 10;
if (typeof something === "number") { // this type of if statement is known as type guard
    console.log("you entered the number ${something}");
}
else {
    console.log("IT WAS SUPPOSED TO BE A NUMBER");
}
