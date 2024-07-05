type value = string | number;

function identity2<T extends value, U>(value:T, message:U):T{
    console.log(message);
    return value;
}

let myIdentity2 = identity2<string, number>('Hello', 100);
console.log(myIdentity2);

let myIdentity3 = identity2<number, string>(100, 'Hello');
console.log(myIdentity3);

// let myIdentity4 = identity<string, string>(true, 'Hello'); // errore

function getPets<T, K extends keyof T>(pet: T, key: K) {
    return pet[key];
  }
  
  let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
  let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish"}
  
  console.log(getPets(pets1, "fish"));  // Returns 6
  // console.log(getPets(pets2, "3"));     // Error: Argument of type '"3"' is not assignable to parameter of type 4 | 3 | 2 | 1