// {User Input}

// Description: The user input is built in very simply to the extent that you have to enter it manually into the variables.
// First number = x
// Second number = y
let x = 0, y = 0, z = 0
let inputs = [undefined, x, y, z]

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
//* Test Done
function positiveORnegative(sign, x) {
    return sign * x
}

// Single Math Operation (Management Function)
function singleMathOperation(smo, x) {
    let output
    
    // 'self' as Without Operation
    if (smo === SMO[0]) {
        output = self(x)

    // 'sin' as Sine
    } else if (smo === SMO[1]) {
        output = sin(x)

    // 'cos' as Cosine
    } else if (smo === SMO[2]) {
        output = cos(x)

    // 'fac' as factorial
    } else if (smo === SMO[3]) {
        // Since our factorial function does not accept negative numbers.
        // So, we make the numbers positive using the absolute 'Math.abs()' method, and later when we get the result,
        // we multiply the result by '-1' to return to the negative state.
        output = fac(Math.abs(x))
        if (x < 0) {
            output *= -1
        }

    } else {} //! Unexpected Error

    // Return the final response
    return output
}

// Pair Math Operation (Management Function)
function pairMathOperation(pmo, x, y) {
    let output
    // 'add' as Addition
    if (pmo === PMO[0]) {
        output = add(x, y)
        
    // 'sub' as Subtraction
    } else if (pmo === PMO[1]) {
        output = sub(x, y)

    // 'mul' as Multiplication
    } else if (pmo === PMO[2]) {
        output = mul(x, y)

    // 'div' as Division
    } else if (pmo === PMO[3]) {
        output = div(x, y)

        // 'pow' as Power
    } else if (pmo === PMO[4]) {
        output = pow(x, y)

    // 'root' as Root
    } else if (pmo === PMO[5]) {
        output = root(x, y)

    } else {}  //! Unexpected Error

    // Return the final response
    return output
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
                        let layerA1 = PN[pn1] * inputs[1]
                        // (pn2 *x2)
                        let layerA2 = PN[pn2] * inputs[2]

                        // Second Layer(B): Single Math Operation
                        // In the second layer, priority is given to 'Single Math Operation(SMO)', which is implemented as follows: (SMO * (layerA))

                        // (smo1 * (layerA))
                        let layerB1

                        // 'self' as Without Operation
                        if (SMO[smo1] === SMO[0]) {
                            layerB1 = self(layerA1)
                        
                        // 'sin' as Sine
                        } else if (SMO[smo1] === SMO[1]) {
                            layerB1 = sin(layerA1)
                        
                        // 'cos' as Cosine
                        } else if (SMO[smo1] === SMO[2]) {
                            layerB1 = cos(layerA1)
                        
                        // 'fac' as factorial
                        } else if (SMO[smo1] === SMO[3]) {
                            // Since our factorial function does not accept negative numbers.
                            // So, we make the numbers positive using the absolute 'Math.abs()' method, and later when we get the result,
                            // we multiply the result by '-1' to return to the negative state.
                            layerB1 = fac(Math.abs(layerA1))
                            if (layerA1 < 0) {
                                layerB1 *= -1
                            }

                        } else {} //! Unexpected Error

                        // (smo2 * (layerA))
                        let layerB2

                        // 'self' as without operation
                        if (SMO[smo2] === SMO[0]) {
                            layerB2 = self(layerA2)
                        
                        // 'sin' as Sine
                        } else if (SMO[smo2] === SMO[1]) {
                            layerB2 = sin(layerA2)
                        
                        // 'cos' as Cosine
                        } else if (SMO[smo2] === SMO[2]) {
                            layerB2 = cos(layerA2)
                        
                        // 'fac' as factorial
                        } else if (SMO[smo2] === SMO[3]) {
                            // Since our factorial function does not accept negative numbers.
                            // So, we make the numbers positive using the absolute 'Math.abs()' method, and later when we get the result,
                            // we multiply the result by '-1' to return to the negative state.
                            layerB2 = fac(Math.abs(layerA2))
                            if (layerA2 < 0) {
                                layerB2 *= -1
                            }

                        } else {} //! Unexpected Error

                        // Third Layer(C): Pair Math Operation
                        // In the third layer, priority is given to 'Pair Math Operation(PMO)', which is implemented as follows: (layerB1) PMO (layerB2)

                        // ((layerB1) pmo1 (layerB2))
                        let layerC;

                        // 'add' as Addition
                        if (PMO[pmo1] === PMO[0]) {
                            layerC = add(layerB1, layerB2)

                        // 'sub' as Subtraction
                        } else if (PMO[pmo1] === PMO[1]) {
                            layerC = sub(layerB1, layerB2)

                        // 'mul' as Multiplication
                        } else if (PMO[pmo1] === PMO[2]) {
                            layerC = mul(layerB1, layerB2)

                        // 'div' as Division
                        } else if (PMO[pmo1] === PMO[3]) {
                            layerC = div(layerB1, layerB2)

                        // 'pow' as Power
                        } else if (PMO[pmo1] === PMO[4]) {
                            layerC = pow(layerB1, layerB2)

                        // 'root' as Root
                        } else if (PMO[pmo1] === PMO[5]) {
                            layerC = root(layerB1, layerB2)

                        } else {}  //! Unexpected Error

                        // And finally, we display the final result in the terminal.
                        /*

                        Number 1: x1
                        Number 2: x2
                        SMO 1: fac(layerA1) x1
                        SMO 2: sin(layerA2) x2
                        PMO: (pmo1) layerB1 pmo1 layerB2
                        Response: layerC
                        Statement: smo1(pn1 * x1) pmo1 smo2(pn2 * x2)
                        --------------------------------------------------

                        */
                        console.log('Number 1: ' + layerA1)
                        console.log('Number 2: ' + layerA2)
                        console.log('SMO 1: ' + SMO[smo1] + '(' + layerA1 + ')' + ' ' + layerB1)
                        console.log('SMO 2: ' + SMO[smo2] + '(' + layerA2 + ')' + ' ' + layerB2)
                        console.log('PMO: ' + '(' + PMO[pmo1] + ')' + ' ' + layerB1 + ' ' + PMO[pmo1] + ' ' + layerB2)
                        console.log('Response: ' + layerC)
                        console.log(`Statement: ${SMO[smo1]}(${PN[pn1]} * ${inputs[1]}) ${PMO[pmo1]} ${SMO[smo1]}(${PN[pn2]} * ${inputs[2]})`)
                        console.log('--------------------------------------------------')
                    }
                }
            }
        }
    }
}

// If our situation was two numbers: (x, y, z)
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

                                    console.log(
                                    `((${SMO[smo1]}(${PN[pn1]}*${inputs[1]})) ${PMO[pmo1]} (${SMO[smo2]}(${PN[pn2]}*${inputs[2]})))     ${PMO[pmo1]} (${SMO[smo3]}(${PN[pn3]}*${inputs[3]})) = ${model1}\n`,
                                    `(${SMO[smo1]}(${PN[pn1]}*${inputs[1]})      ${PMO[pmo1]} ((${SMO[smo2]}(${PN[pn2]}*${inputs[2]})) ${PMO[pmo2]} (${SMO[smo3]}(${PN[pn3]}*${inputs[3]}))) = ${model2}`
                                    )
    }}}}}}}}
}