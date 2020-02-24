let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state
    }
}
export default authReducer;

