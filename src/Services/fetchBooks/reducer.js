import {FETCH_BOOKS,SUCCESS_BOOKS,FAILED_BOOKS} from "./type";

export const initialState={
    bookData:[],
    loading:false,
    error:null
};
export const fetchProductReducer =(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_BOOKS:{
            return{
                ...state,
                loading: true,
                error:null,
                
            }
        }
        case SUCCESS_BOOKS:{
            return{
                ...state,
                loading:false,
                bookData: action.payload
            }
        }
        case FAILED_BOOKS:{
            return{
                ...state,
                loading:false,
                error:action.payload,
                bookData:[]
            }
        }
        default:
            return state;
    }
};
