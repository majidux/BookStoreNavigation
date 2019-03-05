import {FETCH_BOOKS,SUCCESS_BOOKS,FAILED_BOOKS,SEARCH_BOOKS} from "./type";

export const initialState={
    bookData:[],
    searchState:[],
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
                bookData: action.payload,
                searchState: action.payload
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
        case SEARCH_BOOKS:{
            let searcher = state.searchState.filter(contact =>
                contact.login.toUpperCase().includes(action.payload.toUpperCase())
            );
            return{
                ...state,
                result:[...searcher]
            }
        }
        default:
            return state;
    }
};
