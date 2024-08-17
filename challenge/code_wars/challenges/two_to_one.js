/**
 * Name: Two to One
 * 
 * Description:
 * 1) Take 2 strings s1 and s2 including only letters from a to z.
 * 2) Return a new sorted string, the longest possible,
 * 3) containing distinct letters - each taken only once - coming from s1 or s2.
 */
function longest(s1, s2){

    // Section 1) merge two strings
    const mergeStrings = s1 + s2

    // Section 2) to compare convert it to array
    const toArray = mergeStrings.split('')

    // Section 3) sorting each string
    const sortedArray = toArray.sort((a, b) => a.localeCompare(b))

    // Section 4) remove duplicates
    const removeDuplicate = sortedArray.filter((item, index) => sortedArray.indexOf(item) === index);

    // Section 5) convert array to string
    let stringResult = '';
    for (let i = 0; i < removeDuplicate.length; i++) {
        stringResult += removeDuplicate[i];
    }

    // Section 6) return result
    return stringResult

}

console.log(longest("aretheyhere", "yestheyarehere"))
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))
console.log(longest("inmanylanguages", "theresapairoffunctions"))
console.log(longest("inmanylanguaasdfasdfsdfsdafasfges", "theresapairoasfffunctions"))
console.log(longest("inmanasdfsadfsdfngua", "theresapairoffunctionafsadfsdfs"))