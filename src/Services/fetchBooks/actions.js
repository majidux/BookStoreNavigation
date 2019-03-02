import {FETCH_BOOKS,SUCCESS_BOOKS,FAILED_BOOKS} from './type';

export const fetchBooks = () =>({
    type:FETCH_BOOKS
});
export const successBooks = () =>({
    type:SUCCESS_BOOKS,
    payload:item
});
export const failedData =()=>({
    type:FAILED_BOOKS,
    payload: error
});
export const thunkAction=()=>{
    return(dispatch)=>{
        dispatch(fetchBooks());
        fetch(`http://localhost:3000/items`)
            .then(response=>response.json())
            .then(data =>{
                dispatch(successBooks(data));
            })
            .catch(error=>dispatch(failedData(error)));
    }
};
