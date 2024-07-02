interface Person {
    name: string;
    age: number;
    horny: "yes" | "maybe" | "nah";
    virgin: "nope" | "sadly";
}

interface Wifey extends Person {
    qualities: "listens" | "understands" | "loves";
    body: "thicc" | "slim" | "fit";
}

let rad: Person = {
    name: "Rad",
    age: 20,
    horny: "yes",
    virgin: "sadly"
};

let eve: Wifey = {
    name: "Eve",
    age: 20,
    horny: "yes",
    virgin: "nope",
    qualities: "loves",
    body: "thicc"
};

function wifeable(woman: Wifey) {
    if (woman.age === 20 && woman.qualities === "loves" || woman.body === "thicc" || woman.horny === "maybe") {
        return "WIFE HER NOWWW"
    }
    return "Not wifable"
}

console.log(wifeable(eve));


// indexable interface
interface IceCreamArray {
    [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0];
console.log(myStr);