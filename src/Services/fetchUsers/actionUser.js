import {FETCH_USERS, SUCCESS_USERS, FAILED_USERS} from './userType';

export const fetchBooks = () => ({
    type: FETCH_USERS
});
export const successBooks = (user) => ({
    type: SUCCESS_USERS,
    payload: user
});
export const failedData = () => ({
    type: FAILED_USERS,
    payload: error
});
export const userFetcher = () => {
    return (dispatch) => {
        let dataUser = `http://localhost:3000/users`;
        dispatch(fetchBooks());
        fetch(dataUser, {method: 'POST'})
            .then(response => response.json())
            .then(data => {
                dispatch(successBooks(data));
            })
            .catch(error => dispatch(failedData(error)));
    }
};
