/**
 * Name: Array.diff
 * 
 * Description:
 * 1) Your goal in this kata is to implement a difference function,
 * 2) which subtracts one list from another and returns the result.
 * 3) It should remove all values from list a, which are present in list b keeping their order.
 * 4) If a value is present in b, all of its occurrences must be removed from the other:
 * 'arrayDiff([1,2,2,2,3],[2]) == [1,3]'
 */
function arrayDiff(a, b) {

    let resultArray = []
  
    // Section 1) access all index of first array
    for (let i = 0; i < a.length; i++){

        // Section 2) if index first array is in second array so remove it
        if (!b.includes(a[i])){
            resultArray.push(a[i])
        }
    }

    // Section 3) Return result
    return resultArray
} 

function arrayDiff(a, b){
    return a.filter(e => !b.includes(e));
}

console.log(arrayDiff([1,2], [1]))
console.log(arrayDiff([1,2,2], [1]))
console.log(arrayDiff([1,2,2], [2]))
console.log(arrayDiff([1,2,2], []))
console.log(arrayDiff([], [1,2]))
console.log(arrayDiff([1,2,3], [1,2]))