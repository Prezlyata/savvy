const partnersReducer = (state = { partnersList: [] }, action) => {
	switch (action.type) {
		case 'GET_PARTNERS_LIST':
			state.partnersList = action.payload;
			return {
				...state
			};
		case 'ADD_NEW_PARTNER':
			state.partnersList.push(action.payload);
			return {
				...state
			};
		default:
			return state;
	}
};

export default partnersReducer;
