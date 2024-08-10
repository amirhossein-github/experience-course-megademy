# Exercise in Relation to Concepts: Function and Return
**Date-Start**: 1403,05,11 - 2024,08,10<br>
**Date-End**: **Undefined ❓**<br>
**Live**: [🖥️](https://amirhossein-github.github.io/teacher-khateri/courses/course-1/session-9/exercise/index.html)<br>

## About Exercise
1. Write a function that when we call that function console.log(), similar to the given example, it will give us a string about the information of that object.
```js
const user1 = {
    name: "Jasem",
    lastName: "Amiri",
    age: 10
}
const user2 = {
    name: "Admad",
    lastName: "Ghasemi",
    age: 22
}
const user3= {
    name: "Mohsen",
    lastName: "Ahmadi",
    age: 7
}
const user4 = {
    name: "Mina",
    lastName: "Mohseni",
    age: 72
}

// mesali as khoroji function => "Ahmad Ghasemi is 22"
console.log(introductionTheUser(user1))
console.log(introductionTheUser(user2))
console.log(introductionTheUser(user3))
console.log(introductionTheUser(user4))
```
2. Write a function that returns the last character from the string.
Note: Under no circumstances should the 'undefined' log be taken Write a warning or error instead.

3. Write a function that takes two parameters: ('string', 'numberOfCharacters'). The function should work in such a way that it shows the number of characters from the beginning of the string to 'numberOfCharacters'.
Note: "A B C" => 3 // Without space

4. Write a function that takes two input arrays and adds them together.
```js
console.log(mergeArrays([1, 2, 3], [4, 5, 6,])); // [1,2,3,4,5,6]
```

5. Write a function that will show us the number of English-vowels(`Aa Ee Ii Oo Uu`) in a string.