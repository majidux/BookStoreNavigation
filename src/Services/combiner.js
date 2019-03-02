import {combineReducers} from "redux";
import * as fetchProductReducer from './fetchBooks/reducer';


const rootReducer = combineReducers({
    bookReducer: fetchProductReducer.fetchProductReducer
});
export default rootReducer;
