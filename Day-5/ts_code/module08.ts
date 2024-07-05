namespace Greeting{
    export function returnGreeting(greeting: string): string{
        return greeting;
    }
}
namespace GreetingWithLength{
    export function returnGreeting(greeting: string): string{
        return greeting;
    }
    function getLength(message: string): number{
        return message.length;
    }
}

console.log(Greeting.returnGreeting('Hello, World!'));
console.log(GreetingWithLength.returnGreeting('Hello, World!'));
