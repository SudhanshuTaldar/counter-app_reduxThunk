import thunkReducer from "./thunkReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    thunk:thunkReducer
});
export default allReducers