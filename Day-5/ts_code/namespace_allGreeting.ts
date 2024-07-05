namespace allGreeting{
    export namespace Greeting{
        export function returnGreeting(greeting: string): string{
            return greeting;
        }
    }
    export namespace GreetingWithLength{
        export function returnGreeting(greeting: string): string{
            return greeting;
        }
        function getLength(message: string): number{
            return message.length;
        }
    }
}

console.log(allGreeting.Greeting.returnGreeting('Hello, World!'));
console.log(allGreeting.GreetingWithLength.returnGreeting('Hello, World!'));

import greet = allGreeting.Greeting;
greet.returnGreeting('Bonjour');

