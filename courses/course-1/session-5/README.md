# Summary of the Fifth Session
**Date:** 1403,04,31 - 2024,07,21

## Tips about exercises
- When you work with objects, you have to make it in such a way that you add or subtract from it and the structure does not break:
```js
let names = {
    name1 = {},
    name2 = {},
    name3 = {}
}
// if I remove name2 we have
let names = {
    name1 = {},
    name3 = {}
}
// and its not true
```
- Referring to the term of [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
- Javascript key order of object [[Ref](https://stackoverflow.com/questions/5525795/does-javascript-guarantee-object-property-order)].
- Placing related objects in an object group:
```js
// False
let class {
    teacher = {},
    student1 = {},
    student2 = {},
    student3 = {},
}

// True
let class {
    teacher = {},
    students = {
        student1 = {},
        student2 = {},
        student3 = {}
    }
}
```
- What is the `object.info`?
- In programming, do all your work with reasons and arguments and don't use topics you don't know.
- We use strings to store the numbers that are not going to be changed and calculated.
- Write comments regularly.
- Your code along with its comments should be such that an outsider can easily understand the events and changes.
- The space between two braces is called scope. `{ scope }`
- Never be biased on a programming language , don't say its good that's not good and so on It's just your taste and nothing else.
- And also our dear teacher talked about the access to information.
How can we make it easier to access the large amount of data, etc. The topic was just a hint and general so that this issue is in the corner of our minds.

## Array
A series of data that may be related and their sequence may also be important.<br>
And in the array, you only give the value and the key is given automatically. And each value in the array is called an index.
```js
let myArray = [] // This is an array

// new array
let myArray1 = [2, 'd', 'john', 'jacob']
// How to show array index
console.log(myArray1[2]) // john

// More complex by using object
let myArray2 = [2, 'd', 'john', {item4: 3}]
console.log(myArray2[3].item4) // 3
```

**The use of Array**:
1. When keys are not needed.
2. When the number of data is not known and may increase or decrease in the future.
3. The advantage of arrays is that they are easier to research and interpret.

## Exercise
According to the learnings of this session, work on the exercise of the previous session with the name of [School Object](https://github.com/amirhossein-github/teacher-khateri/blob/main/courses/course-1/session-4/exsercise/README.md) and optimize it. (Using Array)