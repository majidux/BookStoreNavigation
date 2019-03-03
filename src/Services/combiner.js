import {combineReducers} from "redux";
import * as fetchProductReducer from './fetchBooks/reducer';
import * as fetchUserReducer from "./fetchUsers/reducerUser";


const rootReducer = combineReducers({
    bookReducer: fetchProductReducer.fetchProductReducer,
    userReducer:fetchUserReducer.fetchUserReducer
});
export default rootReducer;
