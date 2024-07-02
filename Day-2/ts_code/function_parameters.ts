// required parameters
function add(x: number, y: number): number {
    return x + y;
}
 add(1, 2); // returns: 3
 // add(1); // returns: NaN

 // optional parameters
function add2(x: number, y?: number): number {
    if(y===undefined){
        return x;
    }
    else{
        return x + y;
    }
}

add2(1, 2); // returns: 3   
add2(1); // returns: 1

// default parameters
function add3(x: number, y: number = 0): number {
    return x + y;
}

add3(1, 2); // returns: 3   
add3(1); // returns: 1

// rest parameters
function add4(x: number, ...y: number[]): number {
    let sum = x;
    for(let i = 0; i < y.length; i++){
        if(y[i] !== undefined){
            sum += y[i];
        }
    }
    return sum;
}

add4(1, 2, 3, 4); // returns: 10
add4(1); // returns: 1

// deconstructed object parameters
interface message{
    message: string;
    sender: string;
}
function sendMessage({message, sender}: message): void {
    console.log('Message from ' + sender + ': ' + message);
}

sendMessage({message: 'Hello World', sender: 'Rad'}); // returns: Message from Rad: Hello World
