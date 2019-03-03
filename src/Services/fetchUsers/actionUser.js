import {FETCH_USERS, SUCCESS_USERS, FAILED_USERS} from './userType';

export const fetchBooks = () => ({
    type: FETCH_USERS
});
export const successBooks = (items) => ({
    type: SUCCESS_USERS,
    payload: items
});
export const failedData = () => ({
    type: FAILED_USERS,
    payload: error
});
export const userFetcher = () => {
    return (dispatch) => {
        dispatch(fetchBooks());
        fetch(`https://www.googleapis.com/books/v1/volumes?q=movie`)
            .then(response => response.json())
            .then(data => {
                dispatch(successBooks(data.items));
            })
            .catch(error => dispatch(failedData(error)));
    }
};
