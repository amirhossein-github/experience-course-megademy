// {User Input}

// Description: The user input is built in very simply to the extent that you have to enter it manually into the variables.
// First number = x
// Second number = y
let x = 4, y = 5, z = 0
let inputs = [undefined, x, y, z]

// {Options}

// Colorful terminal option 
// In normal mode, the output is black and white. 'false'
// In the color mode, the mathematical expression is displayed in a colorful way. 'true'
// Notice: Working only in Chrome.
let colorfulConsoleOutput = false

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
// Reference: https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/
function fac(x) {
    if (x < 0) {
        return -1;

    } else if (x == 0) {
        return 1;

    } else {
        return (x * fac(x - 1));

    }
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
    let result = Math.pow(x, 1/y).toFixed()
    
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
        // Sine and Cosine is always between 1 and -1
        if (x > 1 || x < -1 || x === Infinity || x === -Infinity) {
            return NaN
            
        } else {
            return sin(x)

        }

    // 'cos' as Cosine
    } else if (smo === SMO[2]) {
            
        // Handling unusual values ('Infinity', '-Infinity')
        // Sine and Cosine is always between 1 and -1
        if (x > 1 || x < -1 || x === Infinity || x === -Infinity) {
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
            
        }

        // Since our factorial function does not accept negative numbers.
        // So, we make the numbers positive using the absolute 'Math.abs()' method, and later when we get the result,
        // we multiply the result by '-1' to return to the negative state.
        if (x < 0) {
            return (fac(Math.abs(x)) * -1)

        } else {
            return (fac(Math.abs(x)))

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

                        // ((layerB1) pmo1 (layerB2))
                        let layerC1 = pairMathOperation(PMO[pmo1], layerB1, layerB2)

                        // And finally, we save the final value as model 1. 
                        let model1 = layerC1

                        
                        // We display the final result in the terminal.
                        // Colorful console log
                        if (colorfulConsoleOutput) {
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
                                model1
                            )
                                
                        // Normal console log
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
                                model1
                            )
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
                            for (const pmo1 in PMO) {
                                for (const pmo2 in PMO) {

                                    // First Layer(A): Positive or Negative
                                    // In the first layer, we go to the first priority which is '(PN * x)'.
                                    // (pn1 * x1)
                                    let layerA1 = positiveORnegative(PN[pn1], inputs[1])
                                    // (pn2 * x2)
                                    let layerA2 = positiveORnegative(PN[pn2], inputs[2])
                                    // (pn3 * x3)
                                    let layerA3 = positiveORnegative(PN[pn3], inputs[3])

                                    // Second Layer(B): Single Math Operation
                                    // In the second layer, priority is given to 'Single Math Operation(SMO)', which is implemented as follows: (SMO * (layerA))

                                    // (smo1 * (layerA1))
                                    let layerB1 = singleMathOperation(SMO[smo1], layerA1)
                                    // (smo2 * (layerA2))
                                    let layerB2 = singleMathOperation(SMO[smo2], layerA2)
                                    // (smo3 * (layerA3))
                                    let layerB3 = singleMathOperation(SMO[smo3], layerA3)

                                    // Third Layer(C): Pair Math Operation
                                    // In the third layer, priority is given to 'Pair Math Operation(PMO)', which is implemented as follows: (layerB1) PMO (layerB2)

                                    // Model(1) -> (x1 _ x2) _ x3
                                    // ((smo1 * (pn1 * x1)) pmo1 (smo2 * (pn2 * x2))) pmo2 (smo3 * (pn3 * x3)).

                                    // ((smo1 * (pn1 * x1)) pmo1 (smo2 * (pn2 * x2)))
                                    // ((layerB1) pmo1 (layerB2))
                                    let layerC1 = pairMathOperation(PMO[pmo1], layerB1, layerB2)

                                    // layerC1 pmo2 (smo3 * (pn3 * x3)).
                                    // ((layerC1) pmo2 (layerB3))
                                    let layerC2 = pairMathOperation(PMO[pmo2], layerC1, layerB3)
                                    
                                    // And finally, we save the final value as model 1. 
                                    let model1 = layerC2

                                    // Model(2) -> x1 _ (x2 _ x3)
                                    // (smo1 * (pn1 * x1)) pmo1 ((smo2 * (pn2 * x2)) pmo2 (smo3 * (pn3 * x3))).

                                    // ((smo2 * (pn2 * x2)) pmo2 (smo3 * (pn3 * x3)))
                                    // ((layerB2) pmo1 (layerB3))
                                    let layerC3 = pairMathOperation(PMO[pmo2], layerB2, layerB3)

                                    // (smo1 * (pn1 * x1)) pmo1 layerC3.
                                    // ((layerB1) pmo1 (layerC1))
                                    let layerC4 = pairMathOperation(PMO[pmo1], layerB1, layerC3)
                                    
                                    // And finally, we save the final value as model 2. 
                                    let model2 = layerC4

                                    // We display the final result in the terminal.
                                    // Colorful console log
                                    if (colorfulConsoleOutput) {
                                        // Model 1
                                        console.log(
                                            '\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                            '(',
                                            SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                            SMO[smo1] === 'self' ? '' :  '(',
                                            layerA1,
                                            SMO[smo1] === 'self' ? '' :  ')',
                                            PMO[pmo1],
                                            SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                            SMO[smo2] === 'self' ? '' :  '(',
                                            layerA2,
                                            SMO[smo2] === 'self' ? '' :  ')',
                                            ')',
                                            PMO[pmo2],
                                            SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                            SMO[smo3] === 'self' ? '' :  '(',
                                            layerA3,
                                            SMO[smo3] === 'self' ? '' :  ')',
                                            '=',
                                            model1
                                        )

                                        // Model 2
                                        console.log(
                                            '\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m \x1b[33m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[31m%s\x1b[0m\x1b[32m%s\x1b[0m\x1b[32m%s\x1b[0m \x1b[36m%s\x1b[0m %s',
                                            SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                            SMO[smo1] === 'self' ? '' :  '(',
                                            layerA1,
                                            SMO[smo1] === 'self' ? '' :  ')',
                                            PMO[pmo1],
                                            '(',
                                            SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                            SMO[smo2] === 'self' ? '' :  '(',
                                            layerA2,
                                            SMO[smo2] === 'self' ? '' :  ')',
                                            PMO[pmo2],
                                            SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                            SMO[smo3] === 'self' ? '' :  '(',
                                            layerA3,
                                            SMO[smo3] === 'self' ? '' :  ')',
                                            ')',
                                            '=',
                                            model2
                                        )
                                            
                                    // Normal console log
                                    } else {
                                        // Model 1
                                        console.log(
                                            '%s%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s %s %s',
                                            '(',
                                            SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                            SMO[smo1] === 'self' ? '' :  '(',
                                            layerA1,
                                            SMO[smo1] === 'self' ? '' :  ')',
                                            PMO[pmo1],
                                            SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                            SMO[smo2] === 'self' ? '' :  '(',
                                            layerA2,
                                            SMO[smo2] === 'self' ? '' :  ')',
                                            ')',
                                            PMO[pmo2],
                                            SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                            SMO[smo3] === 'self' ? '' :  '(',
                                            layerA3,
                                            SMO[smo3] === 'self' ? '' :  ')',
                                            '=',
                                            model1
                                        )

                                        // Model 2
                                        console.log(
                                            '%s%s%s%s %s %s%s%s%s%s %s %s%s%s%s%s %s %s',
                                            SMO[smo1] === 'self' ? '' :  SMO[smo1],
                                            SMO[smo1] === 'self' ? '' :  '(',
                                            layerA1,
                                            SMO[smo1] === 'self' ? '' :  ')',
                                            PMO[pmo1],
                                            '(',
                                            SMO[smo2] === 'self' ? '' :  SMO[smo2],
                                            SMO[smo2] === 'self' ? '' :  '(',
                                            layerA2,
                                            SMO[smo2] === 'self' ? '' :  ')',
                                            PMO[pmo2],
                                            SMO[smo3] === 'self' ? '' :  SMO[smo3],
                                            SMO[smo3] === 'self' ? '' :  '(',
                                            layerA3,
                                            SMO[smo3] === 'self' ? '' :  ')',
                                            ')',
                                            '=',
                                            model2
                                        )
                                    }
    }}}}}}}}
}