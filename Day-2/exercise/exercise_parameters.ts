let addThreeNumbers = (x: number, y: number, z?: number): number => {
    if(z === undefined){
        return x + y;
    }
    else{
        return x + y + z;
    }
}

console.log(addThreeNumbers(1, 2)); // returns: 3
console.log(addThreeNumbers(1, 2, 3)); // returns: 6



let subtractThreeNumbers = (x: number, y: number, z =100): number => x - y - z;

console.log(subtractThreeNumbers(10, 5)); // returns: -85
console.log(subtractThreeNumbers(10, 5, 2)); // returns: 3



