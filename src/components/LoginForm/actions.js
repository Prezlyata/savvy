import {authAPI} from '../Api/Api'

export const setAuthUserData = (userID, email, login, isAuth) => {
    return {
        type: 'SET_USER_DATA', 
        payload: {userID, email, login, isAuth} 
    }
}

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response =>{
            if (response.data.resultCode === 0) {
                let{id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
}

export const login = (email, password) => (dispatch) => {
    authAPI.login(email, password)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData())
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}