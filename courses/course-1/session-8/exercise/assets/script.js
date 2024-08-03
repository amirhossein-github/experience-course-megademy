console.clear()

//----------------------------------------------------------------------------------------------------

console.warn("Question 3: Calculator 🧮")
// Section (3)
// Calculator
let calc = 0, num1 = 4, num2 = 5

// Your code
console.group("Section Calculator")
console.log(`${num1} + ${num2} = `, calc = num1 + num2)
console.log(`${num1} - ${num2} = `, calc = num1 - num2)
console.log(`${num1} * ${num2} = `, calc = num1 * num2)
console.log(`${num1} / ${num2} = `, calc = num1 / num2)
console.groupEnd()

//----------------------------------------------------------------------------------------------------

console.warn("Question 4: Text Searcher 🔎")
// Section (4)
// Search (vojod Darad Nadarad)
string = '...HARCHI...', target = 'x'

// Your code
console.group("Section Text Searcher")
// 1) Simple If and Else statement
if (string.includes(target)) {
    console.log(`The desired text (${target}) exist.`)
} else {
    console.log(`The desired text (${target}) does not exist.`)
}

// 2) console.assert()
console.assert(string.includes(target) === true, `The desired text (${target}) does not exist.`) // If target is not found
console.assert(string.includes(target) === false, `The desired text (${target}) exists.`) // If target is found

// 3) Short If, condition ? true : false
console.log(`The desired text (${target}) ` + String((string.includes(target)) ? 'exist' : 'does not exist'))
console.groupEnd()

//----------------------------------------------------------------------------------------------------

console.warn("End")
// flag{aGVoZWhlaCA6KQ==}