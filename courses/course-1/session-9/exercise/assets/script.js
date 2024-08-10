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