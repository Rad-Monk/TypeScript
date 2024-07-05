export function returnGreetings(greeting) {
    var msg_length = getLength(greeting);
    return "Hello, ".concat(greeting, "!, message is of length ").concat(msg_length);
}
function getLength(message) {
    return message.length;
}
