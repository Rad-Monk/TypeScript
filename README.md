
### Installing compiler
- first install [node.js](https://nodejs.org/en/download) 
- then verify if it installed with `npm version` in the terminal.
- then in the terminal type- `npm install -g typescript`.
- to verify install type- `tsc`, which will give you a list of commands for usage.

### Using typescript compiler
- [Documentation for using compiler with options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- `tsc <file>.ts` : this will run the file with default compile options and ignores `ts.config` if present.
- `tsc` : this will compile the whole project with ts.config configurations.
- `tsc --init` : using this command in your working directory will generate a ts.config file for it.
- after making any changes in `ts.config` make sure to run `tsc` in terminal to load those changes.
- make sure to change "target" to "es2020" or above, else it won't support bigint

### running the compiled js file
- `node ./build/add_func.js` : this command will run the js file, we added path because in this repository's case the js file will be inside build folder as specifed in ts.config.
- 

### running html file
- install "live server" extension
- just click on bottom right, go live, it will run it for you nad navigate to your html
