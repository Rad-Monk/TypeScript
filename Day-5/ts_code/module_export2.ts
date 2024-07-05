export function returnGreetings(greeting: string) : string {
    let msg_length: number= getLength(greeting);
    return `Hello, ${greeting}!, message is of length ${msg_length}`;
}

function getLength(message: string):number{
    return message.length;
}