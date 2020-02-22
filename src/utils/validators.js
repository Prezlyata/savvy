export const requiredField = (value) => {
	if (value) return undefined;

	return 'Field is required';
};

export const maxLengthCreator = (maxLength) => (value) => {
	if (value.length > maxLength) return `Max length is ${maxLength} symbols`;

	return undefined;
};

export const validate = (values) => {
	const errors = {};
	const requiredFields = [ 'Partner PID', 'Partner name' ];
	requiredFields.forEach((field) => {
		if (!values[field]) {
			errors[field] = 'Required';
		}
	});
	if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}
	return errors;
};

// export const maxLength30 = value =>{
//     if (value && value.length > 30) return 'Max length is 30 symbols';

//     return undefined;
// }
