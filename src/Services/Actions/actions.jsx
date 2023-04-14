// Creating an action functions for the Add to cart UI button.
//We won't pass string in the type;
import { ADD_TO_CART } from "../constants";

export const addToCart = (data) => {
    // console.warn("actions", data);
    return{
        type: ADD_TO_CART,
        data: data   //data will be like iphone image, name, price;
    }
}


// export const removeToCart = (data) => {
//     return{
//         type: 'REMOVE_TO_CART',
//         data: data
//     }
// }