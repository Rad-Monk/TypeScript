import dotenv from "dotenv";
import { returnGreetings as exp1 } from "./module_export1";
import { returnGreetings as exp2 } from "./module_export2";


const result = dotenv.config();

if (result.error) {
    throw result.error;
}

console.log(result.parsed);  // Returns { DB_HOST: 'localhost', WEB_HOST: 'staging.adventure-works.com' }
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);
console.log(exp1("World"));
console.log(exp2("World"));