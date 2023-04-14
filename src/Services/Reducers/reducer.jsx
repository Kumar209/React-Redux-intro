//Data will come from action , for that to happen we have to connect action and reducer that will be possible using container
import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

const initialState = {
  //We put [] array because there will be many items to add to cart not single.
  cardData: [],
};

// export default function cardItems(state=initialState, action){
export default function cardItems(state = [], action) {
  //eslint-diable-next-line default-case
  switch (action.type) {
    case ADD_TO_CART:
      // console.warn("reducer", action);
      return [
        ...state, //old value
        { cardData: action.data }, //new value updated
      ];

    case REMOVE_TO_CART:
      // console.warn("reducer", action);
      state.pop();
      return [
        ...state, //old value
      ]
    default:
      return state;
  }
}
