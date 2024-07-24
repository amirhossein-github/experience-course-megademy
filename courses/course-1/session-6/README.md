# Summary of the Sixth Session
**Date:** 1403,05,02- 2024,07,23

## Tips about exercises
- Using `object.info`.
```js
let classes = [
    {
        classInfo: {
            name: 'A',
            capacity: 40,
            type: 'math'
        },
        [
            //Students
        ]
    }
]
```

- Using Uniq `ID`, For direct and convenient access.
```js
let classes = [
    {
        classInfo: {
            name: 'A',
            capacity: 40,
            type: 'math',
            classID: 1001 // ID
        },
        [
            //Students
        ]
    }
]
```

## Team Work in Class
**Challenge**: Select 'hehehe:D'
```js
let myArray2 = [22, 11, 'jj', 66, 'md', [], [[1, 2, [3, {key2: 'hehehe:D'}]]]]

// Answer
console.log(myArray2[6][0][2][1].key2)
```

**Why**: Let's solve it step by step:<br>
```js
// First Array
[22, 11, 'jj', 66, 'md', [], [...]] ---> [6]
 0   1    2    3    4     5    6

// Second Array
[...] ---> [0]
  0

// Third Array
[1, 2, [...]] ---> [2]
 0  1    2

// Fourth Array
[3, {...}] ---> [1]
 0    1

// And Object
{key2: ...} ---> .key2
 key

// Finally
[6][0][2][1].key2
```

**Challenge**: Object - School, Add the comments section to it. `teacherReview: ...`
- Comment
- Teachers
- Semester

We lost the challenge, but I will solve it at home.

## Algorithm and Flowchart Were Mentioned
The scribbles of algorithm programmers and their flowcharts. <br>
Google Search: `flowchart online`<br>
`https://app.diagrams.net/`<br>
**Figma App**