const databaseBasket = [
    {id: 1, productID: 1, userID: 1, count: 5},
    {id: 2, productID: 2, userID: 2, count: 40},
    {id: 3, productID: 3, userID: 3, count: 10}
]

/**
 * This function returns the list of all product in basket from the database
 * 
 * @returns {Array} [{},{},{}]
 */
export function getBasket(){
    return new Promise((resolve, reject) => {  // Use promise

        // send request to database
        const basket = databaseBasket

        if (basket !== ''){
            resolve(basket)

        } else {
            reject('Error')

        }

    })
}