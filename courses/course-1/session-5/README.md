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