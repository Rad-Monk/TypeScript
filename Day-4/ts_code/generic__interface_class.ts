interface GenericClass<T,U> {
    value: T;
    message: U;
    process(): T
}

class genericClass implements GenericClass<string, number>{
    value: string
    message: number
    constructor(val: string, msg:number){
        this.value = val;
        this.message = msg;
    }

    process(): string{
        return this.value;
    }
}


class processIdentity<T, U> {
    private _value: T;
    private _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
}
let processor = new processIdentity<number, string>(100, 'Hello');
processor.getIdentity();      // Displays 'Hello'