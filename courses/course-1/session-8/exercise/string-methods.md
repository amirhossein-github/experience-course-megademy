# String Methods

### length
```javascript
let a , b // undefined = 9-char

let list = [
    "ajsldfowehfhw", // Alphabet
    "932749234", // Numbers
    ")#@%U$)_*#_$(*#_)", // Symbol
    "0101010000101001010011010", // 01
    "امیرحسین ایزدی", // Persian language
    "&amp; &amp; &amp;", // HTML entity: : & & &
    "00001100 10001011 11001110", // Hexadecimal number
    "😊😇🙂🙃😉😌", // Emoji
    "\u0021 \u0021 \u0021", // Unicode: ! ! !
    "\"\"\\", // Escaping
    `${a} ${b}` // Literal template
]

//                           // console.log() / My count
console.log(list[0].length)  // 13/13
console.log(list[1].length)  // 9/9
console.log(list[2].length)  // 17/17
console.log(list[3].length)  // 25/25
console.log(list[4].length)  // 14/14
console.log(list[6].length)  // 17/17
console.log(list[8].length)  // 26/26
console.log(list[5].length)  // 12/6 ---> Emoji
console.log(list[7].length)  // 5/20 ---> Unicode
console.log(list[9].length)  // 3/6 ---> Escaping
console.log(list[10].length) // 19/9 ---> Literal template
```