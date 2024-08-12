console.clear()
// ----------------------------------------------------------------------------------------------------
// Exercise (1)

/**
 * This function It sorts the array it is given and returns it.
 * @constructor
 * @param {Array} array - Input array to sort it.
 */
function arraySorter(array) {

    /*
    
    Input Validation

    */

    // First of all, If our input is not array
    if (!Array.isArray(array)) {
        return `Error: Your argument is not 'array' (${array})`
    }
    
    // Second, If is empty
    // Third, If there is only one index
    if (array.length === 0 || array.length === 1) {
        return array
    }

    // Fourth, If there is a non-numeric value
    for (let i = 0; i < array.length; i++) {
        
        // A) Is it a number?
        if (typeof array[i] !== 'number') {
            return `Error: There is a non-numeric index: ('${array[i]}' in index: ${i})`
        }

        // B) If NaN value
        if (isNaN(array[i])) {
            return `Error: There is a NaN value in your array: ('${array[i]}' in index: ${i})`
        }

    }

    /*

    Operation Process

    */
    
    // (2) In the second step, we create a new array in order to compare and sort the array in question.
    // But it cannot do it with empty array, because we want to compare numbers.
    // So I get the first index of the desired array and put it into result array.
    // And since I don't need it anymore, I delete it from the array: 'array.shift()'
    let resultArray = [array[0]]
    array.shift()

    // (1) In the first step, we have to take each and every index of the array.
    // So we need to get help from a loop: 'for Loop'
    // But before that, we need to have the size of the array so that we can execute the ring according to its size: 'array.length'
    for (let i = 0; i < array.length; i++) {
        
        // (3) Now we need to compare all the indices of the result array with the indices of the input array, so we need to do this again using the for loop.
        // A loop like the loop of the first stage:
        for (let ii = 0; ii < resultArray.length; ii++) {
            
            // (4) Now, if the index of the input array is smaller than the result array,
            // Then put this instead of that index, we will do this using the splice method. 'splice()'
            if (array[i] < resultArray[ii]) {
                resultArray.splice(ii, 0, array[i])
                break

            // (5) Now, if the index of the input array is equal to the result array,
            // I put the index after the compared index, not instead of it. 'ii+1'
            } else if (array[i] === resultArray[ii]) {
                resultArray.splice(ii+1, 0, array[i])
                break

            // (6) Now, if the index of the input array is bigger the result array and we are not in the end of result array,
            //Skip
            } else if (array[i] > resultArray[ii] && (resultArray.length - 1) !== ii) {
                continue

            // (7) Now, if the index of the input array is bigger the result array and we are in the end of result array,
            // Set the index as the last index of the array
            } else if (array[i] > resultArray[ii] && (resultArray.length - 1) === ii) {
                resultArray.push(array[i])
                
            }
            
        }
        
    }

    // (8) And finally we return the sorted array as the result
    return resultArray

    // (9) The second solution instead of 100 lines of code:
    return array.sort()
}

// ----------------------------------------------------------------------------------------------------
// Display the details of the output of the 'Exercise (1)'
const array0 = [10, 2, -1, 0, 8, -Infinity]
const array1 = [2, 4, 'Ali']
const array2 = [-2, NaN]
const array3 = [undefined, 0, 100]
const array4 = [5, 5, 5, 5, 5, 1, 2, 3, 4]

console.group()
console.warn('Exercise (1): Numeric array sorting algorithm without repetition:')
console.log(array0, ':::::', arraySorter(array0))
console.log(array1, ':::::', arraySorter(array1))
console.log(array2, ':::::', arraySorter(array2))
console.log(array3, ':::::', arraySorter(array3))
console.log(array4, ':::::', arraySorter(array4))
console.groupEnd()

// ----------------------------------------------------------------------------------------------------
// Exercise (2)

/**
 * This function prints star
 * and starts from a star in the first line
 * and goes up to the highest number entered by the user and goes through the same way
 * until it reaches a star in the line twice.
 * @constructor
 * @param {number} number - Maximum number of star(*) in a line.
 */
function stars(number) {

    /*

    Initialize

    */
    // Limiting the number of times print 
    const limitation = 100
    // The character to be printed in each line
    const char = '*'

    /*
    
    Input Validation

    */
    // First, check for data type:
    if (typeof number !== 'number') {
        return `Error: Your argument is not 'number' (${number})`
    }

    // Second, check for NaN value:
    if (isNaN(number)) {
        return `Error: Your argument is is Nan value (${number})`
    }

    // Third, set limitation:
    if (number > limitation) {
        return `Error: Your input number is too big. It must be lower than (${limitation})`
    }

    /*

    Operation Process

    */
    // Forward Loop
    for (let i = 0; i <= number-1; i++) {
        let output = ''
        for (let ii = 0; ii <= i; ii++) {
            output += char
        }
        console.log(output)
    }
    // Backward Loop
    for (let i = number-1; i > 0; i--) {
        let output = ''
        for (let ii = 0; ii < i; ii++) {
            output += char
        }
        console.log(output)
    }

}

// ----------------------------------------------------------------------------------------------------
// Display the details of the output of the 'Exercise (2)'

const stars0 = 1
const stars1 = 2
const stars2 = NaN
const stars3 = 101
const stars4 = 'hey man'

console.group()
console.warn('Exercise (2): The function that is supposed to print the star:')
console.log(stars0, ':::::', stars(stars0))
console.log(stars1, ':::::', stars(stars1))
console.log(stars2, ':::::', stars(stars2))
console.log(stars3, ':::::', stars(stars3))
console.log(stars4, ':::::', stars(stars4))
console.groupEnd()