let initialState = {
	login: null,
	password: null,
	// login: null,
	// isAuth: false
	auth: []
};

const authReducer = (state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				login: action.payload.login,
				password: action.payload.password
				// ...action.payload
			};
		default:
			return state;
	}
};
export default authReducer;
