# Summary of the Third Session
**Date:** 1403,04,19 - 2024,07,09

## Github
- **Clone**: Copy the repository from GitHub to your local machine (Computer).
- **Push**: How to transfer files from your local repository to Github.
- **Pull**: Update the local repository to match the contents of the Github repository.
- **Commit**: Recording the changes in specific mode.
- **Conflict**: Happen when people make different changes to the same line of the same file, or when one person edits a file and another person deletes the same file.<br>
![Image to describe](./assets/clone-push-pull-commit.png)

## VS Code
**Word Wrap**: `ALT + z`<br>
**Trigger IntelliSense**: `CTRL + space`<br>
**Comment**: `CTRL + /`<br>

## Definitions and tips
- **Script**: A piece of code that serves a purpose.
- **Console**: In Inspect, there is a section called console which helps us to know if our javascript code has encountered a problem during execution or not. The texts that are usually displayed in the console include the requested text, **errors**, **warnings**, and **information**. The most important of all of them are the errors that, if not managed correctly, cause the code to stop running. We can also communicate with the console using the `console.METHOD()` command in JavaScript.
- **Low and High Programming Language**: High-level languages ​​have a more natural and readable syntax and are closer to human language that makes it easier for programmers to read and understand the code. (Javascript, Php, Python, ...) Low-level languages ​​require more coding and debugging, which increases development time because they are closer to computer and machine languages. (Assembly, 01, ...)
- **Method**: One of the signs of the method is that it prantes comes after its name Like: `console.log(), alert(), console.errro()`. Methods are like tools in a toolbox, each of which does something for us. Some of them are already defined, some of them we make ourselves.
- **Compiler and Interpreter**: Interpreter: they execute the code line by line. And if they encounter an error, they stop the execution. (Javascript, Python, Ruby, ...) Compilery: First, they run all the code, if there is no error, they give you an output, and then you can use that output. (C, C++, C#, Java, Swift, ...)<br>
In Interpreter mode we can apply changes and get output quickly and see the result. And with tricks, it is possible to prevent stopping the program from errors completely.

## Javascript
> [!IMPORTANT]
> To add JavaScript codes to the HTML file, we should not put it directly with the script tag, but in a separate file and then connect it to the HTML file. Like we used to do it for CSS.
### Variable
**Syntax**: `Keyword (var, const)` + `Variable Name` + `=` + `Value`<br>
Some example of variable in javascript
```js
const google = 'https://google.com' // string
var randomNumber = 423434321        // int
const myName = 'Amirhossein'        // string
var course = 'Javascript'           // string
var male = true                     // boolean
const female = false                // boolean
var avrage = 23.5                   // float
```
> [!WARNING]
> If we use the `const` keyword, we can't change the value of changes, and if we do this, we will get an error, but if we use the `var` keyword, we can change its value later.

To see what a variable type is, we can use the following command.
```js
const color = 'red'
console.log(typeof color)
```
---
![Static Badge](https://img.shields.io/badge/%3A%29-0?style=plastic&logo=gnu%20bash&logoColor=black&labelColor=white&color=black&link=https%3A%2F%2Fgithub.com%2Famirhossein-github%2Fteacher-khateri%2Fblob%2Fmain%2Fcourse-1%2Fsession-3%2FDEEP.md)