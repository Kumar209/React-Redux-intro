// Creating an action functions for the Add to cart UI button.
//We can't pass string in the type because
import { ADD_TO_CART } from "../constants"
export const addToCart = (data) => {
    return{
        type: ADD_TO_CART,
        data: data
    }
}


// export const removeToCart = (data) => {
//     return{
//         type: 'REMOVE_TO_CART',
//         data: data
//     }
// }