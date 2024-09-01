import { getUser } from "./database/user.js";
import { getProduct } from "./database/product.js";
import { getBasket } from "./database/basket.js";

async function main(){
    let user, product, basket
    
    try {
        user = await getUser()
        product = await getProduct()
        basket = await getBasket()
        
    } catch (error) {
        console.log(error)
        return -1
        
    }
    
    console.log(user, product, basket)
}

main()