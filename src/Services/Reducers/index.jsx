//It is the Root reducer. Basically it combines all the reducers present.

import { combineReducers } from "redux";
import cardItems from "./reducer";

export default combineReducers({
    cardItems,
});