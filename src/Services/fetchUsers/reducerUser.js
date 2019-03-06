import {FAILED_USERS,FETCH_USERS,SUCCESS_USERS} from "./userType";

export const initialState={
    userData:[],
    loading:false,
    error:null
};
export const fetchUserReducer =(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_USERS:{
            return{
                ...state,
                loading: true,
                error:null,
            }
        }
        case SUCCESS_USERS:{
            return{
                ...state,
                loading:false,
                userData: action.payload
            }
        }
        case FAILED_USERS:{
            return{
                ...state,
                loading:false,
                error:action.payload,
                userData:[]
            }
        }
        default:
            return state;
    }
};
