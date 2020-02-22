import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../utils/validators';
// import { Textarea } from '../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);
const ContactForm = (props) => {
	const { handleSubmit, pristine, reset, submitting } = props;

	return (
		// <form onSubmit={handleSubmit}>
		// 	<div>
		// 		<label>First Name</label>
		// 		<div>
		// 			<Field name="firstName" component="input" type="text" placeholder="First Name" />
		// 		</div>
		// 	</div>
		// 	<div>
		// 		<label>Last Name</label>
		// 		<div>
		// 			<Field name="lastName" component="input" type="text" placeholder="Last Name" />
		// 		</div>
		// 	</div>
		// 	<div>
		// 		<label>Email</label>
		// 		<div>
		// 			<Field name="email" component="input" type="email" placeholder="Email" />
		// 		</div>
		// 	</div>
		// 	<div>
		// 		<label>Sex</label>
		// 		<div>
		// 			<label>
		// 				<Field name="sex" component="input" type="radio" value="male" /> Male
		// 			</label>
		// 			<label>
		// 				<Field name="sex" component="input" type="radio" value="female" /> Female
		// 			</label>
		// 			<label>
		// 				<Field name="sex" component="input" type="radio" value="other" /> Other
		// 			</label>
		// 		</div>
		// 	</div>
		// 	<div>
		// 		<label>Favorite Color</label>
		// 		<div>
		// 			<Field name="favoriteColor" component="select">
		// 				<option />
		// 				<option value="ff0000">Red</option>
		// 				<option value="00ff00">Green</option>
		// 				<option value="0000ff">Blue</option>
		// 			</Field>
		// 		</div>
		// 	</div>
		// 	<div>
		// 		<label htmlFor="employed">Employed</label>
		// 		<div>
		// 			<Field name="employed" id="employed" component="input" type="checkbox" />
		// 		</div>
		// 	</div>
		// 	<div>
		// 		<label>Notes</label>
		// 		<div>
		// 			<Field name="notes" component="textarea" />
		// 		</div>
		// 	</div>
		// 	<div>
		// 		<button type="submit" disabled={pristine || submitting}>
		// 			Submit
		// 		</button>
		// 		<button type="button" disabled={pristine || submitting} onClick={reset}>
		// 			Clear Values
		// 		</button>
		// 	</div>
		// </form>
		<form onSubmit={props.handleSubmit} >
			{/* <div>
				<label htmlFor="firstName">First Name</label>
				<Field
					name="firstName"
					component={Textarea}
					placeholder={'Post message'}
					type="text"
					validate={[ requiredField, maxLength10 ]}
				/>
			</div>
			<div>
				<label htmlFor="lastName">Last Name</label>
				<Field name="lastName" component="input" type="text" />
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<Field name="email" component="input" type="email" />
			</div>
			<button type="submit">Submit</button> */}
		</form>
	);
};

//   ContactForm = reduxForm({
//     form: 'contact'
//   })(ContactForm);

//   export default ContactForm;

export default reduxForm({ form: 'AddPartnerForm' })(ContactForm);
