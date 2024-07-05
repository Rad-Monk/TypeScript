interface GenericInterface<T,U> {
    value: T;
    message: U;
}

let muGenericInterface: GenericInterface<string, number> = {
    value: 'Hello',
    message: 100
}

let muGenericInterface2: GenericInterface<number, string> = {
    value: 100,
    message: 'Hello'
}

