console.clear()
// ----------------------------------------------------------------------------------------------------
// Exercise (1)

/**
 * This function takes an object of user information
 * which includes 'name', 'last name', and 'age'.
 * and the output of the function is as follows: 
 * `${firstName} ${lastName} is ${age}`
 * 
 * @constructor
 * @param {object} userInfo - An object that contains user information.
 */
function introductionTheUser(userInfo) {

    // Validation user input (1)

    // The argument is an object type or not:
    // check for: {}, [], [1, 2, 'adf'], 123, 3.14, 'amir', null, undefined, ETC
    // Reference: https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
    const isUserInfoIsObject = (typeof userInfo === 'object' && !Array.isArray(userInfo) && userInfo !== null)

    // First of all check our input is object or not. (A)
    if (isUserInfoIsObject) {

        // Second, Checking object keys. (B)

        // First - Key: userInfo.name
        // Is it defined and of string type or not?
        if (userInfo.name === undefined) {
            return `\x1b[31mError\x1b[0m: Your object does not contain the key (name)`
        } else if (typeof userInfo.name !== 'string') {
            return `\x1b[31mError\x1b[0m: Your object is not a string type (name)`
        }

        // Second - Key: userInfo.lastName
        // Is it defined and of string type or not?
        if (userInfo.lastName === undefined) {
            return `\x1b[31mError\x1b[0m: Your object does not contain the key (lastName)`
        } else if (typeof userInfo.lastName !== 'string') {
            return `\x1b[31mError\x1b[0m: Your object is not a string type (lastName)`
        }

        // Third - Key: userInfo.age
        // Is it defined and of number type or not?
        if (userInfo.age === undefined) {
            return `\x1b[31mError\x1b[0m: Your object does not contain the key (age)`
        } else if (typeof userInfo.age !== 'number') {
            return `\x1b[31mError\x1b[0m: Your object is not a number type (age)`
        }
        
    // If input is not an object
    } else {
        return `\x1b[31mError\x1b[0m: Your argument is not 'object' (${userInfo})`
    }

    // Return result (2)
    return `${userInfo.name} ${userInfo.lastName} is ${userInfo.age}`

}

// ----------------------------------------------------------------------------------------------------
// Exercise (2)

/**
 * This function returns the last character of the string you pass to it.
 * @constructor
 * @param {string} str - The string whose last character is supposed to be returned.
 */
function lastCharOfString(str) {

    // Validation user input (1)
    // First of all check our input is string or not. (A)
    // If input is not an string
    if (typeof str !== 'string') {
        return `\x1b[31mError\x1b[0m: Your argument is not 'string' (${str})`
    }

    // Get last character of string (2)
    let result = str.charAt(str.length - 1)

    // Check for empty result
    if (result !== '') {
        return result
    } else {
        return ':\\ Empty string, ناموسا'
    }

}

// ----------------------------------------------------------------------------------------------------
// Exercise (3)

/**
 * This function returns the given string, regardless of whitespace, in proportion to the numerical value of 'numberOfCharacters'.
 * @constructor
 * @param {string} string - The string we need for changes.
 * @param {number} numberOfCharacters - The number of characters to return.
 */
function stringWithoutWhiteSpace(string, numberOfCharacters) {

    // Validation user input (1)
    // First of all check our input is string or not. (A)
    // If input is not an string.
    if (typeof string !== 'string') {
        return `\x1b[31mError\x1b[0m: Your argument is not 'string' (${string})`
    }

    // Second, check for string length. (B)
    if (string.length === 0) {
        return ':\\ Empty string, ناموسا'
    }

    // Third, check for data type. (C)
    if (typeof numberOfCharacters !== 'number') {
        return `\x1b[31mError\x1b[0m: Your argument is not 'number' (${numberOfCharacters})`
    }
    
    // Remove all white-space
    let stringWithoutSpace = string.split(" ").join("")
    // Fourth, the input number is bigger that stringWithoutSpace length. (D)
    if (numberOfCharacters > stringWithoutSpace.length) {
        return `\x1b[31mError\x1b[0m: The entered number is greater than the given string size even in non-space mode. (${numberOfCharacters})`
    }

    // Fifth, the input number is less that 0. (E)
    if (numberOfCharacters <= 0) {
        return ':/ 0, -. گرفتی مارو'
    }

    // Sixth, if NaN. (F)
    if (isNaN(numberOfCharacters)) {
        return '\x1b[31mError\x1b[0m: The entered number not a number(NaN).'
    }

    return stringWithoutSpace.substr(0, numberOfCharacters);

}

// ----------------------------------------------------------------------------------------------------
// Exercise (4)

/**
 * This function takes two arrays and merge them together and returns them in one array.
 * @constructor
 * @param {Array} array1 - The first array to merge.
 * @param {Array} array2 - The second array to merge.
 */
function mergeTwoArray(array1, array2) {

    // Validation user input (1)
    // First of all check our input is array or not, and it is empty or not. (A)
    if (!Array.isArray(array1)) {
        return `\x1b[31mError\x1b[0m: Your argument is not 'array' (${array1})`
    } else if (array1.length === 0) {
        return ':\\ Empty array, ناموسا'
    }

    // Second, check our second input is array or not, and it is empty or not. (B)
    if (!Array.isArray(array2)) {
        return `\x1b[31mError\x1b[0m: Your argument is not 'array' (${array2})`
    } else if (array2.length === 0) {
        return ':\\ Empty array, ناموسا'
    }
     
    // Return result
    return array1.concat(array2)

}