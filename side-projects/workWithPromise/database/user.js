const databaseUser = [
    {id: 1, username: 'amir', age: 23},
    {id: 2, username: 'john', age: 45},
    {id: 3, username: 'carlos', age: 10},
    {id: 4, username: 'david', age: 50},
    {id: 5, username: 'jacob', age: 100},
    {id: 6, username: 'mickle', age: 13},
    {id: 7, username: 'mile', age: 45},
    {id: 8, username: 'josef', age: 28},
    {id: 9, username: 'jesses', age: 16},
    {id: 10, username: 'sara', age: 43}
]

/**
 * This function returns the list of all users from the database
 * 
 * @returns {Array} [{},{},{}]
 */
export function getUser(){
    return new Promise((resolve, reject) => {  // Use promise

        // send request to database
        const user = databaseUser

        if (user !== ''){
            resolve(user)

        } else {
            reject('Error')

        }

    })
}