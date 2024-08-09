// {User Input}

// 3072 in 'x, y'

// Description: The user input is built in very simply to the extent that you have to enter it manually into the variables.
// First number = x
// Second number = y
// Third number = z
let x = 0, y = 0, z = 0
let inputs = [undefined, x, y, z]

// {Options}

let options = {

    // Mange output on terminal and console
    output: {

        // Terminal output
        // Show the output in the console or terminal.
        // 'false': don't show.
        // 'true': show.
        self: {
            isOn: false
        },

        // Colorful terminal option 
        // In normal mode, the output is black and white. 'false'
        // In the color mode, the mathematical expression is displayed in a colorful way. 'true'
        // Notice: Working only in Chrome.
        colorful: {
            isOn: false
        },

        // Output filter
        // To control the output and prevent showing a large amount of data.
        // 'false': It means inactive.
        // Use a number instead of the 'false' to activate it.
        filter: {
            isOn: false,
            value: 6
        },

        // Output NaN
        // Not showing the value 'NaN', to show less output.
        // 'true': show the 'NaN' value.
        // 'false': don't show the 'NaN' value.
        nan: {
            isOn: true
        },

        // Output Mathematical expression
        // Which mathematical expression to show
        // 'true': show the expression.
        // 'false': don't show the expression.
        expression: {
            1: true,
            2: true,
            3: true,
            4: true,
            5: true,
            6: true,
            7: true,
            8: true
        }

    }

}

// {Operators}

// Positive or Negative as PN
// Description: To show whether a number is negative or positive, we can use the coefficient 1.
// (-1 * x) or (+1 * x)
const PN = [1, -1]

// Pair Math Operation as PMO
// Description: A series of mathematical operations require two numbers.
// (x + y) or (x * y) or ...
const PMO = ['add', 'sub', 'mul', 'div', 'pow', 'root']

/*

'add'  as Addition
'sub'  as Subtraction
'mul'  as Multiplication
'div'  as Division
'pow'  as Power
'root' as Root

*/

// Single Math Operation as SMO
// Description: A series of mathematical operations requires only one number.
// sin(x) or cos(x), ...
const SMO = ['self', 'sin', 'cos', 'fac']

/*

Why index 'self':
    I have implemented this program in such a way that a process always occurs on the numbers and we never have the number itself in raw form.
    So, to solve this problem, I defined a function that and return the number itself without any operation and called the function 'self'. And I put it in SMO modes.

'sin' as Sine
'cos' as Cosine
'fac' as Factorial

*/

// {Operation Functions}

// [Single Operation Math Functions]

// Normal Factorial Function
// Reference: https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/, "There is a problem that I don't know in this."
// Reference: https://www.geeksforgeeks.org/factorial-of-a-number-using-javascript/
function fac(x) {
    // I don't know how the 'Infinity' amount got through the obstacles and got here
    // I have to limit it here. Because I manually tested up to the number 171 and above that, they returned only infinity.
    // fac(170) === '7.257415615307994e+306'
    // fac(171) === 'Infinity'

    if (x === Infinity || x >= 171) {
        return Infinity
    }
    
    let answer = 1;
    
    
    if(x === 0)
        return 1;
    for (let i = 2; i <= x; i++) {
        answer = answer * i; 
    }
    return answer; 
}

// Cosine Function
function cos(x) {
    return Math.cos(x)
}

// Sine Function
function sin(x) {
    return Math.sin(x)
}

// Self Function
function self(x) {
    return x
}

// [Pair Operation Math Functions]
// Root Function
function root(x, y) {

    //  Due to the inaccuracy of this calculation, I used the 'toFixed' method and set the following condition to prove reversibility.
    let result = Number(Math.pow(x, 1/y).toFixed())
    
    // Reversibility condition
    if (result ** y === x) {
        // If it was reversible, then there is no problem and 'return result'
        return result

    } else {
        // If it is not reversible, return the number without using the 'toFixed' method
        return Math.pow(x, 1/y)
    }
    
}

// Addition Function
function add(x, y) {
    return x + y
}

// Addition Function
function sub(x, y) {
    return x - y
}

// Addition Function
function mul(x, y) {
    return x * y
}

// Addition Function
function div(x, y) {
    return x / y
}

// Addition Function
function pow(x, y) {
    return x ** y
}

// [Management Functions of Mathematical Operations]

//  Positive or Negative (Management Function)
function positiveORnegative(sign, x) {
    return sign * x
}

// Single Math Operation (Management Function)
function singleMathOperation(smo, x) {

    // Handling unusual values ('NaN')
    if (isNaN(x)) {
        return NaN
    }

    // 'self' as Without Operation
    if (smo === SMO[0]) {
        return self(x)

    // 'sin' as Sine
    } else if (smo === SMO[1]) {

        // Handling unusual values ('Infinity', '-Infinity')
        if (x === Infinity || x === -Infinity) {
            return NaN
            
        } else {
            return sin(x)

        }

    // 'cos' as Cosine
    } else if (smo === SMO[2]) {
            
        // Handling unusual values ('Infinity', '-Infinity')
        // Sine and Cosine is always between 1 and -1
        if (x === Infinity || x === -Infinity) {
            return NaN

        } else {
            return cos(x)

        }

    // 'fac' as factorial
    } else if (smo === SMO[3]) {

        // Handling unusual values ('Infinity', '-Infinity')
        if (Infinity === x) {
            return Infinity
            
        } else if (-Infinity === x) {
            return -Infinity
            
        } else {
            // Since our factorial function does not accept negative numbers.
            // So, we make the numbers positive using the absolute 'Math.abs()' method, and later when we get the result,
            // we multiply the result by '-1' to return to the negative state.
            if (x < 0) {
                return (fac(Math.abs(x)) * -1)

            } else {
                return (fac(Math.abs(x)))
                
            }
        }

    } else {} //! Unexpected Error

}

// Pair Math Operation (Management Function)
function pairMathOperation(pmo, x, y) {

    // Handling unusual values ('NaN')
    if (isNaN(x) || isNaN(y)) {
        return NaN
    }

    // 'add' as Addition
    if (pmo === PMO[0]) {
        return add(x, y)
        
    // 'sub' as Subtraction
    } else if (pmo === PMO[1]) {
        return sub(x, y)

    // 'mul' as Multiplication
    } else if (pmo === PMO[2]) {
        return mul(x, y)

    // 'div' as Division
    } else if (pmo === PMO[3]) {
        return div(x, y)

        // 'pow' as Power
    } else if (pmo === PMO[4]) {
        return pow(x, y)

    // 'root' as Root
    } else if (pmo === PMO[5]) {
        return root(x, y)

    } else {}  //! Unexpected Error

}

// {Script Loop}

// If our situation was two numbers: (x, y)
// More modes may be added in the future.
if ( inputs.length === 3 && inputs[0] === undefined) {

    // The summary of our model is as follows (The meaning of the underline is the same as the mathematical operations. (e.g., +-*/)):
    // (x1 ـ x2) --->  (smo1 * (pn1 * x1)) pmo1 (smo2 * (pn2 * x2)).
    // Therefore, in this model, we need two negative and positive states as 'pn1, pn2'.
    // And we need two Single Math Operation(SMO) states as 'smo1, smo2'.
    // AND a Pair Math Operation(PMO) state 'pmo1'.
    for (const pn1 in PN) {
        for (const pn2 in PN) {
            for (const smo1 in SMO) {
                for (const smo2 in SMO) {
                    for (const smo3 in SMO) {
                        for (const pmo1 in PMO) {

                            // First Layer(A): Positive or Negative
                            // In the first layer, we go to the first priority which is '(PN * x)'.
                            // (pn1 *x1)
                            let layerA1 = positiveORnegative(PN[pn1], inputs[1])
                            // (pn2 *x2)
                            let layerA2 = positiveORnegative(PN[pn2], inputs[2])

                            // Second Layer(B): Single Math Operation
                            // In the second layer, priority is given to 'Single Math Operation(SMO)', which is implemented as follows: (SMO * (layerA))

                            // (smo1 * (layerA))
                            let layerB1 = singleMathOperation(SMO[smo1], layerA1)
                            // (smo2 * (layerA))
                            let layerB2 = singleMathOperation(SMO[smo2], layerA2)


                            // Third Layer(C): Pair Math Operation
                            // In the third layer, priority is given to 'Pair Math Operation(PMO)', which is implemented as follows: (layerB1) PMO (layerB2)

                            // (layerB1) pmo1 (layerB2)
                            let layerC1 = pairMathOperation(PMO[pmo1], layerB1, layerB2)

                            // Third Layer(D): Single Math Operation on Parentheses 
                            // smo((layerB1) pmo1 (layerB2))
                            let layerD1 = singleMathOperation(SMO[smo3], layerC1)

                            // And finally, we save the final value as expression.
                            let expression1 = layerC1 //     (layerB1) pmo1 (layerB2)
                            let expression2 = layerD1 // smo((layerB1) pmo1 (layerB2))

                            // We display the final result in the terminal.
                            if (options.output.self.isOn) {
                                
                                // Colorful console log
                                if (options.output.colorful.isOn) {

                                    // Expression 1
                                    if (options.output.expression[1]) {

                                        // Show 'NaN' result
                                        if (options.output.nan.isOn) {

                                            // Filter output based on output
                                            if (options.output.filter.isOn && expression1 === options.output.filter.value) {
                                                console.log(
                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                    layerA1,
                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                    PMO[pmo1],
                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                    layerA2,
                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                    '=',
                                                    expression1
                                                )
                                            } if (options.output.filter.isOn && expression1 !== options.output.filter.value) {
                                                // code
                                            } else {
                                                console.log(
                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                    layerA1,
                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                    PMO[pmo1],
                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                    layerA2,
                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                    '=',
                                                    expression1
                                                )
                                            }

                                        // Don't show 'NaN' result
                                        } else if (!isNaN(expression1)) {

                                            // Filter output based on output
                                            if (options.output.filter.isOn && expression1 === options.output.filter.value) {
                                                console.log(
                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                    layerA1,
                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                    PMO[pmo1],
                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                    layerA2,
                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                    '=',
                                                    expression1
                                                )
                                            } if (options.output.filter.isOn && expression1 !== options.output.filter.value) {
                                                // code
                                            } else {
                                                console.log(
                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                    layerA1,
                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                    PMO[pmo1],
                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                    layerA2,
                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                    '=',
                                                    expression1
                                                )
                                            }

                                        }

                                    }

                                    // Expression 2
                                    if (options.output.expression[2]) {

                                        // Show 'NaN' result
                                        if (optionOutput.nan) {
                                            
                                            // Filter output based on output
                                            if (optionOutput.filter.isOn && expression2 === optionOutput.filter.value) {
                                                console.log(
                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                    layerA1,
                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                    PMO[pmo1],
                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                    layerA2,
                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                    '=',
                                                    expression2
                                                )
                                            } if (optionOutput.filter.isOn && expression2 !== optionOutput.filter.value) {
                                                // code
                                            } else {
                                                console.log(
                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                    layerA1,
                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                    PMO[pmo1],
                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                    layerA2,
                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                    '=',
                                                    expression2
                                                )
                                            }
                                            
                                        // Don't show 'NaN' result
                                        } else if (!isNaN(expression2)) {

                                            // Filter output based on output
                                            if (optionOutput.filter.isOn && expression2 === optionOutput.filter.value) {
                                                console.log(
                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                    layerA1,
                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                    PMO[pmo1],
                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                    layerA2,
                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                    '=',
                                                    expression2
                                                )
                                            } if (optionOutput.filter.isOn && expression2 !== optionOutput.filter.value) {
                                                // code
                                            } else {
                                                console.log(
                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                    layerA1,
                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                    PMO[pmo1],
                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                    layerA2,
                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                    '=',
                                                    expression2
                                                )
                                            }

                                        }

                                    }

                                // Normal console log
                                } else {

                                    // Expression 1
                                    if (options.output.expression[1]) {

                                        // Show 'NaN' result
                                        if (optionOutput.nan) {

                                            // Filter output based on output
                                            if (optionOutput.filter.isOn && expression1 === optionOutput.filter.value) {
                                                console.log(
                                                    '%s%s%s%s %s %s%s%s%s %s %s',
                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                    layerA1,
                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                    PMO[pmo1],
                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                    layerA2,
                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                    '=',
                                                    expression1
                                                )
                                            } if (optionOutput.filter.isOn && expression1 !== optionOutput.filter.value) {
                                                // code
                                            } else {
                                                console.log(
                                                    '%s%s%s%s %s %s%s%s%s %s %s',
                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                    layerA1,
                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                    PMO[pmo1],
                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                    layerA2,
                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                    '=',
                                                    expression1
                                                )
                                            }

                                        // Don't show 'NaN' result
                                        } else if (!isNaN(expression1)) {

                                            // Filter output based on output
                                            if (optionOutput.filter.isOn && expression1 === optionOutput.filter.value) {
                                                console.log(
                                                    '%s%s%s%s %s %s%s%s%s %s %s',
                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                    layerA1,
                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                    PMO[pmo1],
                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                    layerA2,
                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                    '=',
                                                    expression1
                                                )
                                            } if (optionOutput.filter.isOn && expression1 !== optionOutput.filter.value) {
                                                // code
                                            } else {
                                                console.log(
                                                    '%s%s%s%s %s %s%s%s%s %s %s',
                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                    layerA1,
                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                    PMO[pmo1],
                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                    layerA2,
                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                    '=',
                                                    expression1
                                                )
                                            }

                                        }

                                    }

                                    // Expression 2
                                    if (options.output.expression[2]) {

                                        // Show 'NaN' result
                                        if (optionOutput.nan) {

                                            // Filter output based on output
                                            if (optionOutput.filter.isOn && expression2 === optionOutput.filter.value) {
                                                console.log(
                                                    '%s%s%s%s %s %s%s%s%s %s %s',
                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                    layerA1,
                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                    PMO[pmo1],
                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                    layerA2,
                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                    '=',
                                                    expression2
                                                )
                                            } if (optionOutput.filter.isOn && expression2 !== optionOutput.filter.value) {
                                                // code
                                            } else {
                                                console.log(
                                                    '%s%s%s%s %s %s%s%s%s %s %s',
                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                    layerA1,
                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                    PMO[pmo1],
                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                    layerA2,
                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                    '=',
                                                    expression2
                                                )
                                            }
                                            
                                        // Don't show 'NaN' result
                                        } else if (!isNaN(expression2)) {

                                            // Filter output based on output
                                            if (optionOutput.filter.isOn && expression2 === optionOutput.filter.value) {
                                                console.log(
                                                    '%s%s%s%s %s %s%s%s%s %s %s',
                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                    layerA1,
                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                    PMO[pmo1],
                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                    layerA2,
                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                    '=',
                                                    expression2
                                                )
                                            } if (optionOutput.filter.isOn && expression2 !== optionOutput.filter.value) {
                                                // code
                                            } else {
                                                console.log(
                                                    '%s%s%s%s %s %s%s%s%s %s %s',
                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                    layerA1,
                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                    PMO[pmo1],
                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                    layerA2,
                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                    '=',
                                                    expression2
                                                )
                                            }

                                        }

                                    }

                                }

                            }

                        }
                    } 
                }
            }
        }
    }

}

// If our situation was three numbers: (x, y, z)
// More modes may be added in the future.
if ( inputs.length === 4 && inputs[0] === undefined) {
    // The summary of our model is as follows (The meaning of the underline is the same as the mathematical operations. (e.g., +-*/)):
    // (x1 ـ x2 _ x3) --->  (smo1 * (pn1 * x1)) pmo1 (smo2 * (pn2 * x2)) pmo2 (smo3 * (pn3 * x3)).
    // This procedure requires two models for implementation. model_1, model_2
    // Therefore, in this model, we need three negative and positive states as 'pn1, pn2, pn3'.
    // And we need three Single Math Operation(SMO) states as 'smo1, smo2, smo3'.
    // AND two Pair Math Operation(PMO) state 'pmo1, pmo2'.
    for (const pn1 in PN) {
        for (const pn2 in PN) {
            for (const pn3 in PN) {
                for (const smo1 in SMO) {
                    for (const smo2 in SMO) {
                        for (const smo3 in SMO) {
                            for (const smo4 in SMO) {
                                for (const smo5 in SMO) {
                                    for (const pmo1 in PMO) {
                                        for (const pmo2 in PMO) {
                                            // First Layer(A): Positive or Negative
                                            // In the first layer, we go to the first priority which is '(PN * x)'.
                                            // ----------------------------------------------------------------------------------------------------
                                            // (pn1 * x1)
                                            let layerA1 = positiveORnegative(PN[pn1], inputs[1])
                                            // (pn2 * x2)
                                            let layerA2 = positiveORnegative(PN[pn2], inputs[2])
                                            // (pn3 * x3)
                                            let layerA3 = positiveORnegative(PN[pn3], inputs[3])

                                            // Second Layer(B): Single Math Operation
                                            // In the second layer, priority is given to 'Single Math Operation(SMO)', which is implemented as follows: (SMO * (layerA))
                                            // ----------------------------------------------------------------------------------------------------
                                            // X1 -> (smo1 * (layerA1))
                                            let layerB1 = singleMathOperation(SMO[smo1], layerA1)
                                            // X2 -> (smo2 * (layerA2))
                                            let layerB2 = singleMathOperation(SMO[smo2], layerA2)
                                            // X3 -> (smo3 * (layerA3))
                                            let layerB3 = singleMathOperation(SMO[smo3], layerA3)

                                            // Third Layer(C): Pair Math Operation
                                            // In the third layer, priority is given to 'Pair Math Operation(PMO)', which is implemented as follows: (layerB1) PMO (layerB2)
                                            // ----------------------------------------------------------------------------------------------------
                                            // Model(1) -> (x1 _ x2) _ x3
                                            // (x1 _ x2)
                                            let layerC1 = pairMathOperation(PMO[pmo1], layerB1, layerB2)
                                            // (x1 _ x2) _ x3
                                            let layerC2 = pairMathOperation(PMO[pmo2], layerC1, layerB3)
                                            // Expression 1: (x1 _ x2) _ x3
                                            let expression1 = layerC2
                                            // ----------------------------------------------------------------------------------------------------
                                            // Model(2) -> x1 _ (x2 _ x3)
                                            // (x2 _ x3)
                                            let layerC3 = pairMathOperation(PMO[pmo2], layerB2, layerB3)
                                            // Expression 2: x1 _ (x2 _ x3)
                                            let layerC4 = pairMathOperation(PMO[pmo1], layerB1, layerC3)
                                            let expression2 = layerC4

                                            // Fourth Layer(D): SMO(Operation on the first layer of parentheses)
                                            // ----------------------------------------------------------------------------------------------------
                                            // Model(3) -> SMO[4](x1 _ x2) _ x3
                                            // 1) SMO(x1 _ x2)
                                            let layerD1 = singleMathOperation(SMO[smo4], layerC1)
                                            // 2) SMO(x1 _ x2) _ x3
                                            let layerD2 = pairMathOperation(PMO[pmo2], layerD1, layerB3)
                                            let expression3 = layerD2
                                            // ----------------------------------------------------------------------------------------------------
                                            // Model(4) -> x1 _ SMO[4](x2 _ x3)
                                            // 1) SMO(x2 _ x3)
                                            let layerD3 = singleMathOperation(SMO[smo4], layerC3)
                                            // 2) x1 _ SMO(x2 _ x3)
                                            let layerD4 = pairMathOperation(PMO[pmo1], layerB1, layerD3)
                                            let expression4 = layerD4

                                            // Fifth Layer(E): SMO(Operation on the second layer of parentheses) (1)
                                            // ----------------------------------------------------------------------------------------------------
                                            // Model(5) -> SMO[5]((x1 _ x2) _ x3)
                                            let layerE1 = singleMathOperation(SMO[smo5], layerC2)
                                            let expression5 = layerE1
                                            // ----------------------------------------------------------------------------------------------------
                                            // Model(6) -> SMO[5](x1 _ (x2 _ x3))
                                            let layerE2 = singleMathOperation(SMO[smo5], layerC4)
                                            let expression6 = layerE2

                                            // Sixth Layer(F): SMO(Operation on the second layer of parentheses) (2)
                                            // ----------------------------------------------------------------------------------------------------
                                            // Model(7) -> SMO[5](SMO[4](x1 _ x2) _ x3)
                                            let layerF1 = singleMathOperation(SMO[smo5], layerD2)
                                            let expression7 = layerE2
                                            // ----------------------------------------------------------------------------------------------------
                                            // Model(8) -> SMO[5](x1 _ SMO[4](x2 _ x3))
                                            let layerF2 = singleMathOperation(SMO[smo5], layerD4)
                                            let expression8 = layerF2

                                            // We display the final result in the terminal.
                                            if (options.output.self.isOn) {
                                                
                                                // Colorful console log
                                                if (options.output.colorful.isOn) {

                                                    // Expression 1
                                                    if (options.output.expression[1]) {

                                                        // Show 'NaN' result
                                                        if (options.output.nan.isOn) {

                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression1 === options.output.filter.value) {
                                                                // Expression 1 - console.log()
                                                                // Model(1) -> (x1 _ x2) _ x3 -> (smo1(x1) pmo2 smo2(x2)) pmo2 smo3(x3)
                                                                console.log(
                                                                    '\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression1
                                                                )
                                                            } if (options.output.filter.isOn && expression1 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 1 - console.log()
                                                                // Model(1) -> (x1 _ x2) _ x3 -> (smo1(x1) pmo2 smo2(x2)) pmo2 smo3(x3)
                                                                console.log(
                                                                    '\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression1
                                                                )
                                                            }

                                                        // Don't show 'NaN' result
                                                        } else if (!isNaN(expression1)) {

                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression1 === options.output.filter.value) {
                                                                // Expression 1 - console.log()
                                                                // Model(1) -> (x1 _ x2) _ x3 -> (smo1(x1) pmo2 smo2(x2)) pmo2 smo3(x3)
                                                                console.log(
                                                                    '\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression1
                                                                )
                                                            } if (options.output.filter.isOn && expression1 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 1 - console.log()
                                                                // Model(1) -> (x1 _ x2) _ x3 -> (smo1(x1) pmo2 smo2(x2)) pmo2 smo3(x3)
                                                                console.log(
                                                                    '\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression1
                                                                )
                                                            }

                                                        }

                                                    }

                                                    // Expression 2
                                                    if (options.output.expression[2]) {

                                                        // Show 'NaN' result
                                                        if (options.output.nan.isOn) {
                                                            
                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression2 === options.output.filter.value) {
                                                                // Expression 2 - console.log()
                                                                // Model(2) -> x1 _ (x2 _ x3) ->smo1(x1) pmo2 (smo2(x2) pmo2 smo3(x3))
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    
                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    '=',
                                                                    expression2
                                                                )
                                                            } if (options.output.filter.isOn && expression2 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 2 - console.log()
                                                                // Model(2) -> x1 _ (x2 _ x3) ->smo1(x1) pmo2 (smo2(x2) pmo2 smo3(x3))
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    
                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    '=',
                                                                    expression2
                                                                )
                                                            }
                                                            
                                                        // Don't show 'NaN' result
                                                        } else if (!isNaN(expression2)) {

                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression2 === options.output.filter.value) {
                                                                // Expression 2 - console.log()
                                                                // Model(2) -> x1 _ (x2 _ x3) ->smo1(x1) pmo2 (smo2(x2) pmo2 smo3(x3))
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    
                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    '=',
                                                                    expression2
                                                                )
                                                            } if (options.output.filter.isOn && expression2 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 2 - console.log()
                                                                // Model(2) -> x1 _ (x2 _ x3) ->smo1(x1) pmo2 (smo2(x2) pmo2 smo3(x3))
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    
                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    '=',
                                                                    expression2
                                                                )
                                                            }

                                                        }

                                                    }

                                                    // Expression 3
                                                    if (options.output.expression[3]) {

                                                        // Show 'NaN' result
                                                        if (options.output.nan.isOn) {
                                                            
                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression3 === options.output.filter.value) {
                                                                // Expression 3 - console.log()
                                                                // Model(3) -> SMO(x1 _ x2) _ x3 -> smo4(smo1(x1) pmo2 smo2(x2)) pmo2 smo3(x3)
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression3
                                                                )
                                                            } if (options.output.filter.isOn && expression3 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 3 - console.log()
                                                                // Model(3) -> SMO(x1 _ x2) _ x3 -> smo4(smo1(x1) pmo2 smo2(x2)) pmo2 smo3(x3)
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression3
                                                                )
                                                            }
                                                            
                                                        // Don't show 'NaN' result
                                                        } else if (!isNaN(expression3)) {

                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression3 === options.output.filter.value) {
                                                                // Expression 3 - console.log()
                                                                // Model(3) -> SMO(x1 _ x2) _ x3 -> smo4(smo1(x1) pmo2 smo2(x2)) pmo2 smo3(x3)
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression3
                                                                )
                                                            } if (options.output.filter.isOn && expression3 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 3 - console.log()
                                                                // Model(3) -> SMO(x1 _ x2) _ x3 -> smo4(smo1(x1) pmo2 smo2(x2)) pmo2 smo3(x3)
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression3
                                                                )
                                                            }

                                                        }

                                                    }

                                                    // Expression 4
                                                    if (options.output.expression[4]) {

                                                        // Show 'NaN' result
                                                        if (options.output.nan.isOn) {
                                                            
                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression4 === options.output.filter.value) {
                                                                // Expression 4 - console.log()
                                                                // Model(4) -> x1 _ SMO[4](x2 _ x3)-> smo1(x1) pmo2 smo4(smo2(x2) pmo2 smo3(x3))
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',
                                                                    
                                                                    '=',
                                                                    expression4
                                                                )
                                                            } if (options.output.filter.isOn && expression4 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 4 - console.log()
                                                                // Model(4) -> x1 _ SMO[4](x2 _ x3)-> smo1(x1) pmo2 smo4(smo2(x2) pmo2 smo3(x3))
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    '=',
                                                                    expression4
                                                                )
                                                            }
                                                            
                                                        // Don't show 'NaN' result
                                                        } else if (!isNaN(expression4)) {

                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression4 === options.output.filter.value) {
                                                                // Expression 4 - console.log()
                                                                // Model(4) -> x1 _ SMO[4](x2 _ x3)-> smo1(x1) pmo2 smo4(smo2(x2) pmo2 smo3(x3))
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    '=',
                                                                    expression4
                                                                )
                                                            } if (options.output.filter.isOn && expression4 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 4 - console.log()
                                                                // Model(4) -> x1 _ SMO[4](x2 _ x3)-> smo1(x1) pmo2 smo4(smo2(x2) pmo2 smo3(x3))
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    '=',
                                                                    expression4
                                                                )
                                                            }

                                                        }

                                                    }

                                                    // Expression 5
                                                    if (options.output.expression[5]) {

                                                        // Show 'NaN' result
                                                        if (options.output.nan.isOn) {
                                                            
                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression5 === options.output.filter.value) {
                                                                // Expression 5 - console.log()
                                                                // Model(5) -> SMO[5]((x1 _ x2) _ x3)
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',

                                                                    '(',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression5
                                                                )
                                                            } if (options.output.filter.isOn && expression5 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 5 - console.log()
                                                                // Model(5) -> SMO[5]((x1 _ x2) _ x3)
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',

                                                                    '(',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression5
                                                                )
                                                            }
                                                            
                                                        // Don't show 'NaN' result
                                                        } else if (!isNaN(expression5)) {

                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression5 === options.output.filter.value) {
                                                                // Expression 5 - console.log()
                                                                // Model(5) -> SMO[5]((x1 _ x2) _ x3)
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',

                                                                    '(',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression5
                                                                )
                                                            } if (options.output.filter.isOn && expression5 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 5 - console.log()
                                                                // Model(5) -> SMO[5]((x1 _ x2) _ x3)
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',

                                                                    '(',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression5
                                                                )
                                                            }

                                                        }

                                                    }

                                                    // Expression 6
                                                    if (options.output.expression[6]) {

                                                        // Show 'NaN' result
                                                        if (options.output.nan.isOn) {
                                                            
                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression6 === options.output.filter.value) {
                                                                // Expression 6 - console.log()
                                                                // Model(6) -> SMO[5](x1 _ (x2 _ x3))
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[32m%s\x1b[0\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',
                                                                    '=',
                                                                    expression6
                                                                )
                                                            } if (options.output.filter.isOn && expression6 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 6 - console.log()
                                                                // Model(6) -> SMO[5](x1 _ (x2 _ x3))
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[32m%s\x1b[0\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',
                                                                    '=',
                                                                    expression6
                                                                )
                                                            }
                                                            
                                                        // Don't show 'NaN' result
                                                        } else if (!isNaN(expression6)) {

                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression6 === options.output.filter.value) {
                                                                // Expression 6 - console.log()
                                                                // Model(6) -> SMO[5](x1 _ (x2 _ x3))
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[32m%s\x1b[0\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',
                                                                    '=',
                                                                    expression6
                                                                )
                                                            } if (options.output.filter.isOn && expression6 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 6 - console.log()
                                                                // Model(6) -> SMO[5](x1 _ (x2 _ x3))
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[32m%s\x1b[0\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',
                                                                    '=',
                                                                    expression6
                                                                )
                                                            }

                                                        }

                                                    }

                                                    // Expression 7
                                                    if (options.output.expression[7]) {

                                                        // Show 'NaN' result
                                                        if (options.output.nan.isOn) {
                                                            
                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression7 === options.output.filter.value) {
                                                                // Expression 7 - console.log()
                                                                // Model(7) -> SMO[5](SMO[4](x1 _ x2) _ x3)
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',

                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression7
                                                                )
                                                            } if (options.output.filter.isOn && expression7 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 7 - console.log()
                                                                // Model(7) -> SMO[5](SMO[4](x1 _ x2) _ x3)
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',

                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression7
                                                                )
                                                            }
                                                            
                                                        // Don't show 'NaN' result
                                                        } else if (!isNaN(expression7)) {

                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression7 === options.output.filter.value) {
                                                                // Expression 7 - console.log()
                                                                // Model(7) -> SMO[5](SMO[4](x1 _ x2) _ x3)
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    '=',
                                                                    expression7
                                                                )
                                                            } if (options.output.filter.isOn && expression7 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 7 - console.log()
                                                                // Model(7) -> SMO[5](SMO[4](x1 _ x2) _ x3)
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',

                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression7
                                                                )
                                                            }

                                                        }

                                                    }

                                                    // Expression 8
                                                    if (options.output.expression[8]) {

                                                        // Show 'NaN' result
                                                        if (options.output.nan.isOn) {
                                                            
                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression8 === options.output.filter.value) {
                                                                // Expression 8 - console.log()
                                                                // Model(8) -> SMO[5](x1 _ SMO[4](x2 _ x3))
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',
                                                                    
                                                                    SMO[smo5] === 'self' ? '' :  ')',
                                                                    '=',
                                                                    expression8
                                                                )
                                                            } if (options.output.filter.isOn && expression8 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 8 - console.log()
                                                                // Model(8) -> SMO[5](x1 _ SMO[4](x2 _ x3))
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',
                                                                    
                                                                    SMO[smo5] === 'self' ? '' :  ')',
                                                                    '=',
                                                                    expression8
                                                                )
                                                            }
                                                            
                                                        // Don't show 'NaN' result
                                                        } else if (!isNaN(expression8)) {

                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression8 === options.output.filter.value) {
                                                                // Expression 8 - console.log()
                                                                // Model(8) -> SMO[5](x1 _ SMO[4](x2 _ x3))
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',
                                                                    
                                                                    SMO[smo5] === 'self' ? '' :  ')',
                                                                    '=',
                                                                    expression8
                                                                )
                                                            } if (options.output.filter.isOn && expression8 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 8 - console.log()
                                                                // Model(8) -> SMO[5](x1 _ SMO[4](x2 _ x3))
                                                                console.log(
                                                                    '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',
                                                                    
                                                                    SMO[smo5] === 'self' ? '' :  ')',
                                                                    '=',
                                                                    expression8
                                                                )
                                                            }

                                                        }

                                                    }

                                                // Normal console log
                                                } else {

                                                    // Expression 1
                                                    if (options.output.expression[1]) {

                                                        // Show 'NaN' result
                                                        if (options.output.nan.isOn) {

                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression1 === options.output.filter.value) {
                                                                // Expression 1 - console.log()
                                                                // Model(1) -> (x1 _ x2) _ x3 -> (smo1(x1) pmo2 smo2(x2)) pmo2 smo3(x3)
                                                                console.log(
                                                                    '%s%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s %s %s',
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression1
                                                                )
                                                            } if (options.output.filter.isOn && expression1 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 1 - console.log()
                                                                // Model(1) -> (x1 _ x2) _ x3 -> (smo1(x1) pmo2 smo2(x2)) pmo2 smo3(x3)
                                                                console.log(
                                                                    '%s%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s %s %s',
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression1
                                                                )
                                                            }

                                                        // Don't show 'NaN' result
                                                        } else if (!isNaN(expression1)) {

                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression1 === options.output.filter.value) {
                                                                // Expression 1 - console.log()
                                                                // Model(1) -> (x1 _ x2) _ x3 -> (smo1(x1) pmo2 smo2(x2)) pmo2 smo3(x3)
                                                                console.log(
                                                                    '%s%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s %s %s',
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression1
                                                                )
                                                            } if (options.output.filter.isOn && expression1 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 1 - console.log()
                                                                // Model(1) -> (x1 _ x2) _ x3 -> (smo1(x1) pmo2 smo2(x2)) pmo2 smo3(x3)
                                                                console.log(
                                                                    '%s%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s %s %s',
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression1
                                                                )
                                                            }

                                                        }

                                                    }

                                                    // Expression 2
                                                    if (options.output.expression[2]) {

                                                        // Show 'NaN' result
                                                        if (options.output.nan.isOn) {

                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression2 === options.output.filter.value) {
                                                                // Expression 2 - console.log()
                                                                // Model(2) -> x1 _ (x2 _ x3) ->smo1(x1) pmo2 (smo2(x2) pmo2 smo3(x3))
                                                                console.log(
                                                                    '%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s%s %s %s',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    
                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    '=',
                                                                    expression2
                                                                )
                                                            } if (options.output.filter.isOn && expression2 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 2 - console.log()
                                                                // Model(2) -> x1 _ (x2 _ x3) ->smo1(x1) pmo2 (smo2(x2) pmo2 smo3(x3))
                                                                console.log(
                                                                    '%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s%s %s %s',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    
                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    '=',
                                                                    expression2
                                                                )
                                                            }
                                                            
                                                        // Don't show 'NaN' result
                                                        } else if (!isNaN(expression2)) {

                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression2 === options.output.filter.value) {
                                                                // Expression 2 - console.log()
                                                                // Model(2) -> x1 _ (x2 _ x3) ->smo1(x1) pmo2 (smo2(x2) pmo2 smo3(x3))
                                                                console.log(
                                                                    '%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s%s %s %s',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    
                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    '=',
                                                                    expression2
                                                                )
                                                            } if (options.output.filter.isOn && expression2 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 2 - console.log()
                                                                // Model(2) -> x1 _ (x2 _ x3) ->smo1(x1) pmo2 (smo2(x2) pmo2 smo3(x3))
                                                                console.log(
                                                                    '%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s%s %s %s',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    
                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    '=',
                                                                    expression2
                                                                )
                                                            }

                                                        }

                                                    }
                                                    
                                                    // Expression 3
                                                    if (options.output.expression[3]) {

                                                        // Show 'NaN' result
                                                        if (options.output.nan.isOn) {
                                                            
                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression3 === options.output.filter.value) {
                                                                // Expression 3 - console.log()
                                                                // Model(3) -> SMO(x1 _ x2) _ x3 -> smo4(smo1(x1) pmo2 smo2(x2)) pmo2 smo3(x3)
                                                                console.log(
                                                                    '%s%s%s%s%s%s %s %s%s%s%s%s %s %s%s%s %s %s',
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression3
                                                                )
                                                            } if (options.output.filter.isOn && expression3 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 3 - console.log()
                                                                // Model(3) -> SMO(x1 _ x2) _ x3 -> smo4(smo1(x1) pmo2 smo2(x2)) pmo2 smo3(x3)
                                                                console.log(
                                                                    '%s%s%s%s%s%s %s %s%s%s%s%s %s %s%s%s %s %s',
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression3
                                                                )
                                                            }
                                                            
                                                        // Don't show 'NaN' result
                                                        } else if (!isNaN(expression3)) {

                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression3 === options.output.filter.value) {
                                                                // Expression 3 - console.log()
                                                                // Model(3) -> SMO(x1 _ x2) _ x3 -> smo4(smo1(x1) pmo2 smo2(x2)) pmo2 smo3(x3)
                                                                console.log(
                                                                    '%s%s%s%s%s%s %s %s%s%s%s%s %s %s%s%s %s %s',
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression3
                                                                )
                                                            } if (options.output.filter.isOn && expression3 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 3 - console.log()
                                                                // Model(3) -> SMO(x1 _ x2) _ x3 -> smo4(smo1(x1) pmo2 smo2(x2)) pmo2 smo3(x3)
                                                                console.log(
                                                                    '%s%s%s%s%s%s %s %s%s%s%s%s %s %s%s%s %s %s',
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression3
                                                                )
                                                            }

                                                        }

                                                    }

                                                    // Expression 4
                                                    if (options.output.expression[4]) {

                                                        // Show 'NaN' result
                                                        if (options.output.nan.isOn) {
                                                            
                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression4 === options.output.filter.value) {
                                                                // Expression 4 - console.log()
                                                                // Model(4) -> x1 _ SMO[4](x2 _ x3)-> smo1(x1) pmo2 smo4(smo2(x2) pmo2 smo3(x3))
                                                                console.log(
                                                                    '%s%s%s%s %s %s%s%s%s%s%s %s %s%s%s%s%s %s %s',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    '=',
                                                                    expression4
                                                                )
                                                            } if (options.output.filter.isOn && expression4 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 4 - console.log()
                                                                // Model(4) -> x1 _ SMO[4](x2 _ x3)-> smo1(x1) pmo2 smo4(smo2(x2) pmo2 smo3(x3))
                                                                console.log(
                                                                    '%s%s%s%s %s %s%s%s%s%s%s %s %s%s%s%s%s %s %s',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    '=',
                                                                    expression4
                                                                )
                                                            }
                                                            
                                                        // Don't show 'NaN' result
                                                        } else if (!isNaN(expression4)) {

                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression4 === options.output.filter.value) {
                                                                // Expression 4 - console.log()
                                                                // Model(4) -> x1 _ SMO[4](x2 _ x3)-> smo1(x1) pmo2 smo4(smo2(x2) pmo2 smo3(x3))
                                                                console.log(
                                                                    '%s%s%s%s %s %s%s%s%s%s%s %s %s%s%s%s%s %s %s',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    '=',
                                                                    expression4
                                                                )
                                                            } if (options.output.filter.isOn && expression4 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 4 - console.log()
                                                                // Model(4) -> x1 _ SMO[4](x2 _ x3)-> smo1(x1) pmo2 smo4(smo2(x2) pmo2 smo3(x3))
                                                                console.log(
                                                                    '%s%s%s%s %s %s%s%s%s%s%s %s %s%s%s%s%s %s %s',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',
                                                                    
                                                                    '=',
                                                                    expression4
                                                                )
                                                            }

                                                        }

                                                    }

                                                    // Expression 5
                                                    if (options.output.expression[5]) {

                                                        // Show 'NaN' result
                                                        if (options.output.nan.isOn) {
                                                            
                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression5 === options.output.filter.value) {
                                                                // Expression 5 - console.log()
                                                                // Model(5) -> SMO[5]((x1 _ x2) _ x3)
                                                                console.log(
                                                                    '%s%s%s%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s%s %s %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',

                                                                    '(',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression5
                                                                )
                                                            } if (options.output.filter.isOn && expression5 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 5 - console.log()
                                                                // Model(5) -> SMO[5]((x1 _ x2) _ x3)
                                                                console.log(
                                                                    '%s%s%s%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s%s %s %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',

                                                                    '(',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression5
                                                                )
                                                            }
                                                            
                                                        // Don't show 'NaN' result
                                                        } else if (!isNaN(expression5)) {

                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression5 === options.output.filter.value) {
                                                                // Expression 5 - console.log()
                                                                // Model(5) -> SMO[5]((x1 _ x2) _ x3)
                                                                console.log(
                                                                    '%s%s%s%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s%s %s %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',

                                                                    '(',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression5
                                                                )
                                                            } if (options.output.filter.isOn && expression5 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 5 - console.log()
                                                                // Model(5) -> SMO[5]((x1 _ x2) _ x3)
                                                                console.log(
                                                                    '%s%s%s%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s%s %s %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',

                                                                    '(',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                                    ')',

                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression5
                                                                )
                                                            }

                                                        }

                                                    }

                                                    // Expression 6
                                                    if (options.output.expression[6]) {

                                                        // Show 'NaN' result
                                                        if (options.output.nan.isOn) {
                                                            
                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression6 === options.output.filter.value) {
                                                                // Expression 6 - console.log()
                                                                // Model(6) -> SMO[5](x1 _ (x2 _ x3))
                                                                console.log(
                                                                    '%s%s%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s%s%s %s %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    ')',
                                                                    '=',
                                                                    expression6
                                                                )
                                                            } if (options.output.filter.isOn && expression6 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 6 - console.log()
                                                                // Model(6) -> SMO[5](x1 _ (x2 _ x3))
                                                                console.log(
                                                                    '%s%s%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s%s%s %s %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    ')',
                                                                    '=',
                                                                    expression6
                                                                )
                                                            }
                                                            
                                                        // Don't show 'NaN' result
                                                        } else if (!isNaN(expression6)) {

                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression6 === options.output.filter.value) {
                                                                // Expression 6 - console.log()
                                                                // Model(6) -> SMO[5](x1 _ (x2 _ x3))
                                                                console.log(
                                                                    '%s%s%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s%s%s %s %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    ')',
                                                                    '=',
                                                                    expression6
                                                                )
                                                            } if (options.output.filter.isOn && expression6 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 6 - console.log()
                                                                // Model(6) -> SMO[5](x1 _ (x2 _ x3))
                                                                console.log(
                                                                    '%s%s%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s%s%s %s %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    ')',
                                                                    '=',
                                                                    expression6
                                                                )
                                                            }

                                                        }

                                                    }

                                                    // Expression 7
                                                    if (options.output.expression[7]) {

                                                        // Show 'NaN' result
                                                        if (options.output.nan.isOn) {
                                                            
                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression7 === options.output.filter.value) {
                                                                // Expression 7 - console.log()
                                                                // Model(7) -> SMO[5](SMO[4](x1 _ x2) _ x3)
                                                                console.log(
                                                                    '%s%s%s%s%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s%s %s %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',

                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression7
                                                                )
                                                            } if (options.output.filter.isOn && expression7 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 7 - console.log()
                                                                // Model(7) -> SMO[5](SMO[4](x1 _ x2) _ x3)
                                                                console.log(
                                                                    '%s%s%s%s%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s%s %s %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',

                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression7
                                                                )
                                                            }
                                                            
                                                        // Don't show 'NaN' result
                                                        } else if (!isNaN(expression7)) {

                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression7 === options.output.filter.value) {
                                                                // Expression 7 - console.log()
                                                                // Model(7) -> SMO[5](SMO[4](x1 _ x2) _ x3)
                                                                console.log(
                                                                    '%s%s%s%s%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s%s %s %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',

                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression7
                                                                )
                                                            } if (options.output.filter.isOn && expression7 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 7 - console.log()
                                                                // Model(7) -> SMO[5](SMO[4](x1 _ x2) _ x3)
                                                                console.log(
                                                                    '%s%s%s%s%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s%s %s %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',

                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',

                                                                    PMO[pmo1],

                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    ')',

                                                                    PMO[pmo2],

                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    SMO[smo5] === 'self' ? '' :  ')',

                                                                    '=',
                                                                    expression7
                                                                )
                                                            }

                                                        }

                                                    }

                                                    // Expression 8
                                                    if (options.output.expression[8]) {

                                                        // Show 'NaN' result
                                                        if (options.output.nan.isOn) {
                                                            
                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression8 === options.output.filter.value) {
                                                                // Expression 8 - console.log()
                                                                // Model(8) -> SMO[5](SMO[4](x1 _ x2) _ x3)
                                                                console.log(
                                                                    '%s%s%s%s%s%s %s %s%s%s%s%s%s %s %s%s%s%s%s%s %s %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',
                                                                    
                                                                    SMO[smo5] === 'self' ? '' :  ')',
                                                                    '=',
                                                                    expression8
                                                                )
                                                            } if (options.output.filter.isOn && expression8 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 8 - console.log()
                                                                // Model(8) -> SMO[5](SMO[4](x1 _ x2) _ x3)
                                                                console.log(
                                                                    '%s%s%s%s%s%s %s %s%s%s%s%s%s %s %s%s%s%s%s%s %s %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',
                                                                    
                                                                    SMO[smo5] === 'self' ? '' :  ')',
                                                                    '=',
                                                                    expression8
                                                                )
                                                            }
                                                            
                                                        // Don't show 'NaN' result
                                                        } else if (!isNaN(expression8)) {

                                                            // Filter output based on output
                                                            if (options.output.filter.isOn && expression8 === options.output.filter.value) {
                                                                // Expression 8 - console.log()
                                                                // Model(8) -> SMO[5](SMO[4](x1 _ x2) _ x3)
                                                                console.log(
                                                                    '%s%s%s%s%s%s %s %s%s%s%s%s%s %s %s%s%s%s%s%s %s %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',
                                                                    
                                                                    SMO[smo5] === 'self' ? '' :  ')',
                                                                    '=',
                                                                    expression8
                                                                )
                                                            } if (options.output.filter.isOn && expression8 !== options.output.filter.value) {
                                                                // code
                                                            } else {
                                                                // Expression 8 - console.log()
                                                                // Model(8) -> SMO[5](SMO[4](x1 _ x2) _ x3)
                                                                console.log(
                                                                    '%s%s%s%s%s%s %s %s%s%s%s%s%s %s %s%s%s%s%s%s %s %s',
                                                                    SMO[smo5] === 'self' ? '' :  SMO[smo5],
                                                                    SMO[smo5] === 'self' ? '' :  '(',
                                                                    SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                                                    SMO[smo1] === 'self' ? '' :  '(',
                                                                    layerA1, // +-x1
                                                                    SMO[smo1] === 'self' ? '' :  ')',
                                                                    
                                                                    PMO[pmo1],
                                                                    
                                                                    SMO[smo4] === 'self' ? '' :  SMO[smo4],
                                                                    '(',
                                                                    SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                                                    SMO[smo2] === 'self' ? '' :  '(',
                                                                    layerA2, // +-x2
                                                                    SMO[smo2] === 'self' ? '' :  ')',

                                                                    PMO[pmo2],
                                                                    
                                                                    SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                                                    SMO[smo3] === 'self' ? '' :  '(',
                                                                    layerA3, // +-x3
                                                                    SMO[smo3] === 'self' ? '' :  ')',
                                                                    ')',
                                                                    
                                                                    SMO[smo5] === 'self' ? '' :  ')',
                                                                    '=',
                                                                    expression8
                                                                )
                                                            }

                                                        }

                                                    }

                                                }

                                            }

                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}

// Update Needed
// 1, How to calculate fac() of decimal number like 1.4 or more
// Reference: https://stackoverflow.com/questions/15454183/how-to-make-a-function-that-computes-the-factorial-for-numbers-with-decimals