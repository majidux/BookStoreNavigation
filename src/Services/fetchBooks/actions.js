import {FETCH_BOOKS,SUCCESS_BOOKS,FAILED_BOOKS} from './type';

export const fetchBooks = () =>({
    type:FETCH_BOOKS
});
export const successBooks = (items) =>({
    type:SUCCESS_BOOKS,
    payload:items
});
export const failedData =()=>({
    type:FAILED_BOOKS,
    payload: error
});
export const thunkAction=()=>{
    return(dispatch)=>{
        dispatch(fetchBooks());
        fetch(`https://www.googleapis.com/books/v1/volumes?q=movie`)
            .then(response=>response.json())
            .then(data =>{
                dispatch(successBooks(data.items));
            })
            .catch(error=>dispatch(failedData(error)));
    }
};
