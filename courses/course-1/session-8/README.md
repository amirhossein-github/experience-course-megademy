# Summary of the Eighth Session
**Date:** 1403,05,10- 2024,07,31

## Algorithm

### Example
**Question**: Find the biggest index of an array.
1. Start
2. Put a variable with the name `biggestIndex` in memory.
3. Set the `biggestIndex` equal to the first index.
4. We compare the array items one by one with the first index(`biggestIndex`).
5. If the `biggestIndex` variable is greater than the compared index, continue.
6. If the `biggestIndex` variable is smaller than the compared index, it will be replaced.
7. Continue this process until the end of the array.
8. display `biggestIndex` variable.
9. End

> [!TIP]
> To simplify difficult and complex problems, compare and simplify them with your daily problems.

## Assignment

```js
let a = 100

// +=
a = a + 10 
// OR
a += 10

// -=
a = a - 10 
// OR
a -= 10

// *=
a = a * 10 
// OR
a *= 10

// /=
a = a / 10 
// OR
a /= 10

// ETC ...
```
## Logical Operators

### AND
| A | B | Output |
| ------------- | ------------- | ------------- |
| True 🟢 | True 🟢 | True 🟢 |
| True 🟢 | False 🔴 | False 🔴 |
| False 🔴 | True 🟢 | False 🔴 |
| False 🔴 | False 🔴 | False 🔴 |


### OR
| A | B | Output |
| ------------- | ------------- | ------------- |
| True 🟢 | True 🟢 | True 🟢 |
| True 🟢 | False 🔴 | True 🟢 |
| False 🔴 | True 🟢 | True 🟢 |
| False 🔴 | False 🔴 | False 🔴 |

### Example

#### Number One
**False** `&&` **True** `&&` **False**? 🔴

#### Number Two
**True** `||` **True** `&&` **False** `&&` **True**? 🟢

> [!TIP]
> Pay attention to math priorities.

```js
1. ()
2. .
3. x++, x--, ++x, --x
4. !, ~
5. +x, -x
6. **, *, /, %
7. +, -
8. <<, >>, >>>
9. <, <=, >, >=
10. ==, !=, ===, !==
11. &, ^, |, &&, ||, ??
12. =, +=, -=, **=, *=, /=, %=
13. <<=, >>=, >>>=
14. &=, ^=, |=, &&=, ||=, ??=
15. X ? y : z
16. x => y
```
#### Number Three
```js
let g = 2, b = '2', c = 3, d = 2, e = 3

console.log(
    & + 2 < 3 && b + 2 || c && d - 1 * e
)
```
**Zero (0)** **2** `+` **2** `<` **3** `&&` **'2'** `+` **2** `||` **3** `&&` **2** `-` **1** `*` **3**?

**One (1)** **`*`**: `-1 * 3 = -3`<br>
**2** `+` **2** `<` **3** `&&` **'2'** `+` **2** `||` **3** `&&` **2** `+` <span style="background-color: #DEF9C4 ">- **1** * **3**</span><br>
**2** `+` **2** `<` **3** `&&` **'2'** `+` **2** `||` **3** `&&` **2** <span style="background-color: #DEF9C4 ">- 3</span>

**Two (2)** **`+`**: `2 + 2 = 4`<br>
<span style="background-color: #DEF9C4 ">2 + 2</span> `<` **3** `&&` **'2'** `+` **2** `||` **3** `&&` **2** `-` **3**<br>
<span style="background-color: #DEF9C4 ">4</span> `<` **3** `&&` **'2'** `+` **2** `||` **3** `&&` **2** `-` **3**<br>

**Three (3)** **`+`**: `'2' + 2 = '22'`<br>
**4** `<` **3** `&&` <span style="background-color: #DEF9C4 ">'2' + 2</span> `||` **3** `&&` **2** `-` **3**<br>
**4** `<` **3** `&&` <span style="background-color: #DEF9C4 ">'22'</span> `||` **3** `&&` **2** `-` **3**<br>

**Four (4)** **`-`**: `-3 + 2 = -1`<br>
**4** `<` **3** `&&` **'22'** `||` **3** `&&` <span style="background-color: #DEF9C4 ">2 - 3</span><br>
**4** `<` **3** `&&` **'22'** `||` **3** `&&` <span style="background-color: #DEF9C4 ">-1</span><br>

**Five (5)** **`<`**: `4 < 3 = false`<br>
<span style="background-color: #DEF9C4 ">4 < 3</span> `&&` **'22'** `||` **3** `&&` **-1**<br>
<span style="background-color: #DEF9C4 ">false</span> `&&` **'22'** `||` **3** `&&` **-1**<br>


**Six (6)** **`&&`**: `false && '22' = false`<br>
<span style="background-color: #DEF9C4 ">false && '22'</span> `||` **3** `&&` **-1**<br>
<span style="background-color: #DEF9C4 ">false</span> `||` **3** `&&` **-1**<br>


**Seven (7)** **`&&`**: `3 && -1 = -1`<br>
**false** `||` <span style="background-color: #DEF9C4 ">3 && -1</span><br>
**false** `||` <span style="background-color: #DEF9C4 ">-1</span><br>


**Eight (8)** **`||`**: `false || -1 = -1`<br>
<span style="background-color: #DEF9C4 ">false || -1</span><br>
<span style="background-color: #DEF9C4 ">-1</span><br>

## If and Else and Else If
```js
// 1
if ( true ) {
    console.log('ok')
}

// 2
if ( false ) {
    console.log('ok')
} else {
    console.log('!ok')
}

// 3
if ( false ) {
    console.clear()
} else if ( 0 == 1 ) {
    console.log('ok')
} else {
    console.log('noo')
}
```

> [!TIP]
> Use `===` instead of `==` in the IF statement as much as you can. One of the reasons is that the process is **faster**.
