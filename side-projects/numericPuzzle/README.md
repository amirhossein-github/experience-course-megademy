# Solve a Numeric Puzzle: 9 9 9 = 1
**Description**: To solve this puzzle, you have to put 3 numbers 9 between the mathematical operators so that the final answer is one.
```js
9 _ 9 _ 9 = 1 // How?
```

#### Some seemingly correct but wrong answers
```js
1. ( 9 - 9 ) ** 9
2. ( 9 ** ( 1 / 2 )) * ( 9 ** ( 1 / 2 )) / 9
3. 9 && 9 / 9
4. ( 9 ** 0 ) * 9 / 9
```

#### My Answer
```js
// File: app.js
console.clear();
const PN = [1, -1] // Positive and Negative as PN
const MO = ['+', '-', '*', '/', '**'] // Math Operators as MO
const x = 9 // Input Number as x

for (const i1 in PN) {
    for (const i2 in MO){
        for (const i3 in PN) {
            for (const i4 in MO) {
                for (const i5 in PN) {   
                    let result = `(${PN[i1]} * ${x}) ${MO[i2]} (${PN[i3]} * ${x}) ${MO[i4]} (${PN[i5]} * ${x})`
                    console.log(result, ' --- ', eval(result), eval(result).toFixed())
                }
            }
        }
    }
}

// Bash Terminal
const terminalCommand = "node app.js | grep -E '1$' | grep ' 1'"
```