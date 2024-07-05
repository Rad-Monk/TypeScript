function getArray<T>(items: T[]): T[]{
    return new Array<T>().concat(items);
}

let myNumArray = getArray<number>([100, 200, 300]);
let myStrArray = getArray<string>(['Hello', 'World']);

function identity<T,U>(value: T, message: U): T{
    console.log(message);
    return value;
}

let mYIdentity = identity<string, number>('Hello', 100);
