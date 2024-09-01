const databaseProduct = [
    {id: 1, name: 'apple', price: 1000},
    {id: 2, name: 'banana', price: 2000},
    {id: 3, name: 'cherry', price: 3000},
    {id: 4, name: 'potato', price: 4000},
    {id: 5, name: 'orange', price: 5000}
]

/**
 * This function returns the list of all product from the database
 * 
 * @returns {Array} [{},{},{}]
 */
export function getProduct(){
    return new Promise((resolve, reject) => {  // Use promise

        // send request to database
        const product = databaseProduct

        if (product !== ''){
            resolve(product)

        } else {
            reject('Error')

        }

    })
}