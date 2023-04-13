//Data will come from action , for that to happen we have to connect action and reducer that will be possible using container
import { ADD_TO_CART } from "../constants";

const initialState = {
    //We put [] array because there will be many items to add to cart not single.
    cardData: []
}

export default function cardItems(state=initialState, action){
    //eslint-diable-next-line default-case
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...StaticRange,     //old value
                cardData:action.data     //new value updated
            }
            break;
        default:
            return state
    }
}