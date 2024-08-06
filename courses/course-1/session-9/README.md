# Summary of the Ninth Session
**Date:** 1403,05,14 - 2024,08,04

## Examining Class Exercises: The Method of Work '&&' and '||'
- In 'And &&' logical statement. The priority is whit 'False' then 'True'. This means that in 'And &&' statement, the first 'False' is returned, and if not, the last 'True'.
- In 'Or ||' logical statement. The priority is whit 'True' then 'False'. This means that in 'Or ||' statement, the first 'True' is returned, and if not, the last 'False'.

## How to be a Better Developer.
- Maintain clean code writing.
- Choose a suitable name for the variables.
- Complete the cartoon, not just finish the work.
- The program you write must be development.
- Document your project. (anything that makes you more familiar with the code).
- Be creative.
- Beautiful performance and output.
- Have a good user interface.
- Add more options.
- Solving other people's problems.
- Having a good repository (good commits and readme files).

## Functional Programming

#### Tips
- Places that are going to be repeated a lot and the structure is such that it is going to be used a lot.
- If we want to repeat a process several times, we either have to write code continuously or we have to call the function of that part of the code.
- For input form validation, if we call a method, it should not be just for that method, it should be a method that we should use whenever needed.

#### Syntax
```js
// Function syntax
function Name(parameter1, parameter2, ...) {
    // Code
}

// Call the function
Name(argument1, argument2, ...)
```

#### Example
```js
function nameJ(str1, num) {
    console.log(st1)
}

name('Hi :)')
```

#### Return in Function
```js

function calc(num1, num2, operator){

    if (operator === '+') {
        return num1 + num2
    } else if (operator === '-') {
        return num1 - num2
    } else if (operator === '*') {
        return num1 * num2
    } else if (operator === '/') {
        return num1 / num2
    } else {
        console.log('Error')
    }
    
}

console.log(calc(5, 5, '/'))
```