import axios from 'axios';

export const setUser = (user) => {
	return {
		type: 'SET_USER',
		payload: user
	};
};

export const login = (login, password) => {
	console.log({ email: login, password: password });
	let userCredential = { email: login, password: password };
	return (dispatch) => {
		// dispatch(setUser(userCredential));
		axios
			.post('https://', userCredential)
			.then((response) => {
				console.log(response);
				let userData = response;
				dispatch(setUser(userData));
			})
			.catch((err) => console.log(err));
	};
};

// export const loadUser = () => {
// 	return (dispatch) => {
// 		axios.get('').then((res) => {
// 			console.log(res);
// 			dispatch(getUser(res));
// 		});
// 	};
// };

// export const setAuthUserData = (userID, email, login, isAuth) => {
//     return {
//         type: 'SET_USER_DATA',
//         payload: {userID, email, login, isAuth}
//     }
// }

// export const getAuthUserData = () => (dispatch) => {
//     authAPI.me()
//         .then(response =>{
//             if (response.data.resultCode === 0) {
//                 let{id, login, email} = response.data.data;
//                 dispatch(setAuthUserData(id, email, login, true));
//             }
//         })
// }

// export const login = (email, password) => (dispatch) => {
//     authAPI.login(email, password)
//         .then(response => {
//             if (response.data.resultCode === 0) {
//                 dispatch(setAuthUserData())
//             }
//         })
// }

// export const logout = () => (dispatch) => {
//     authAPI.logout()
//         .then(response => {
//             if (response.data.resultCode === 0) {
//                 dispatch(setAuthUserData(null, null, null, false));
//             }
//         })
// }
