# Summary of the Fourth Session
**Date:** 1403,04,24 - 2024,07,14

## Conventional Commit in Github
**Why should we commit?**: Commit is part of the documentation of a project. And the stronger the documentation, the better the understanding of the code. So we must commit according to the correct principles so that besides ourselves, others can also use our codes. [[Bus Factor](https://en.wikipedia.org/wiki/Bus_factor)]<br>

**The general rule of committing[^1]**:<br>
```bash
<type>[Optional scope]: <description>
[Optional body]
[Optional footer]
```
**feat**: Introduces a new feature.<br>
**fix**: Fix a bug or make a change.<br>
**BREAKING CHABGE**: Making a change that causes another part of the program to not work properly. Changes that cause damage.<br>

> [!IMPORTANT]
> Commits should be written so well that changes can be noticed without reading the code.

## Variable Syntax

**Keyword VAR**: Normally, it is not possible to create two variables with the same name, but it is possible with the 'var' keyword. This is one of its problems. Later, in subsequent updates to JavaScript, "let" and "const" were added. who did not have this problem.
```js
var test = 123
var test = '123'

let test = 123
let test = '123' // error

const test = 123
const test = '123' // error
```

**Different ways to define a variable**:
```js
let group1 = 'ali'
let group2 = 'sina'
let group4, group5 = 'fatemeh' // group4 -> undefined // Because it has no value
let group6 = 'alireza', group7 = 'mahsa'

console.log(group1, group2, group4, group5, group6, group7)
//---------------------------------------------
// ali sina undefined fatemeh alireza mahsa
```
**The rule of naming variables**:
1. The name of the variable should not start with a symbol or a number, it should start with a letter.<br>
```js
// Wrong
let 12 = 22
let 23name = 'ali'
let @ali = 45
let _google = 'https://google.com'

// True
let name1 = 'ali'
let name2 = 'morad'
let name_teacher = 'amirhossein'
let courseName = 'javascript'
```

2. Variable names cannot be keywords. example:<br>
`var`, `let`, `const`, `null`, `undefined`, `true`, `false`, `in`, `for`, ...<br>

3. The name of the variable must be meaningful and related to its content.<br>
```js
// Wrong
let var1 = 'amir', a = 'ali', zz = 11, mm2 = false, mm3 = true, a1 = 224

// True
let studentName = 'amirhossein', age = 22, male = true, height = 224
```

4. Have a suitable and standard format. The most popular of them is camelCase.<br>
    - `camelCase`: amirHossein, myName, javascriptClass, usernameAndPassword, testTextToShowExample
    - `PascalCase`: AmirHossein, MyName, JavascriptClass, UsernameAndPassword, TestTextToShowExample
    - `snake`: amir_hossein, my_name, javascript_class, username_and_password, test_text_to_show_example
    - `UPPERCASE`: AMIRHOSSEIN, MYNAME, JAVASCRIPTCLASS, USERNAMEANDPASSWORD, TESTTEXTTOSHOWEXAMPLE
    - `lowercase`: amirhossein, myname, javascriptclass, usernameandpassword, testtexttoshowexample

**Const - Constant**: Sometimes we need that the value of a variable cannot be changed in any way and only the value of that variable is used, so we use const.
```js
const teacherName = 'amirhossein'
const githubAddress = 'https://github.com'
const googoleDNS1 = '8.8.8.8', googoleDNS2 = '8.8.4.4'

//--------------------------------------------------
// If you change the value of the variable
teacherName = 'ali' // Error >>> TypeError: Assignment to constant variable.
```

[^1]: [ref](https://www.conventionalcommits.org/en/v1.0.0/)
