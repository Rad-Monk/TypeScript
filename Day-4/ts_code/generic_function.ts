interface GenericFunction<T,U>{
    (value: T, message: U): T;
}

function identity3<T,U>(value: T, message: U): T{
    console.log(message);
    return value;
}

let myIdentity: GenericFunction<string, number> = identity3;
let id1 = myIdentity('Hello', 100);
