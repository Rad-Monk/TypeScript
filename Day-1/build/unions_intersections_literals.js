"use strict";
// UNION
function addBasedOnType(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("parameters must be of same type");
}
console.log(addBasedOnType(2, 3));
console.log(addBasedOnType("2", "3"));
console.log(addBasedOnType(2, "3"));
let aaron = {
    first_name: "aaron",
    age: 33,
    virgin: virginStatus.yes
};
if (aaron.age > 30) {
    if (virginStatus[aaron.virgin] === "yes") {
        console.log("SINGLE MAREGA TUUU");
    }
    else if (virginStatus[aaron.virgin] === "no") {
        console.log("good job birooo");
    }
    else {
        console.log(" I AM THE STORM THAT IS APPROACHINGGGGGGGGGGGGGGGGGGG");
    }
}
else {
    console.log("koi ni bro tera bhi time aayega, sabko tu dikhlayega apna time aayega");
}
let my_girl = "all";
if (my_girl === "all") {
    console.log("you girl are my wife now and i am so grateful for you <3");
}
else {
    console.log("I will think about it, maybe :)");
}
