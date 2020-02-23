import React from 'react';
import {
	inputFields,
	partnerStatus,
	emailRules,
	loginRules,
	memberProfileRules,
	products,
	ssoRules
} from './configFields';
import { validate } from '../../utils/validators';
import { renderTextField, renderCheckbox } from '../common/FormsControls/FormsControls';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import FormLabel from '@material-ui/core/FormLabel';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import styles from './styles';

const AddPartnerForm = (props) => {
	const { handleSubmit, pristine, reset, submitting, classes } = props;
	return (
		<React.Fragment>
			<Container maxWidth="md" className={classes.wrapper}>
				<div className={classes.wrapperMenu}>
					<form onSubmit={handleSubmit}>
						{inputFields.map((field) => (
							<Field
								className={classes.root}
								key={field.name}
								name={field.name}
								label={field.label}
								type={field.type}
								variant={field.variant}
								size={field.size}
								component={renderTextField}
							/>
						))}
						<Divider className={classes.divider} />
						<FormLabel component="legend">Partner active status:</FormLabel>
						{partnerStatus.map((field, idx) => (
							<Field
								className={classes.root}
								key={field.name}
								name={field.name}
								label={field.label}
								component={renderCheckbox}
							/>
						))}
						<Divider className={classes.divider} />
						<FormLabel component="legend">Email Rules:</FormLabel>
						{emailRules.map((field, idx) => (
							<Field
								className={classes.root}
								key={field.name}
								name={field.name}
								label={field.label}
								component={renderCheckbox}
							/>
						))}
						<Divider className={classes.divider} />
						<FormLabel component="legend">Login Rules:</FormLabel>
						{loginRules.map((field, idx) => (
							<Field
								className={classes.root}
								key={field.name}
								name={field.name}
								label={field.label}
								component={renderCheckbox}
							/>
						))}
						<Divider className={classes.divider} />
						<FormLabel component="legend">Member Profile Rules:</FormLabel>
						{memberProfileRules.map((field, idx) => (
							<Field
								className={classes.root}
								key={field.name}
								name={field.name}
								label={field.label}
								component={renderCheckbox}
							/>
						))}
						<Divider className={classes.divider} />
						<FormLabel component="legend">Products:</FormLabel>
						{products.map((field, idx) => (
							<Field
								className={classes.root}
								key={field.name}
								name={field.name}
								label={field.label}
								component={renderCheckbox}
							/>
						))}
						<Divider className={classes.divider} />
						<FormLabel component="legend">SSO Rules:</FormLabel>
						{ssoRules.map((field, idx) => (
							<Field
								className={classes.root}
								key={field.name}
								name={field.name}
								label={field.label}
								component={renderCheckbox}
							/>
						))}
						<div className={classes.btn}>
							<Button variant="contained" color="primary" type="submit" disabled={pristine || submitting}>
								Add partner
							</Button>
							{/* <Button className={classes.btn} variant="contained" color="primary" type="button" disabled={pristine || submitting} onClick={reset}>
                                Clear Values
                            </Button> */}
						</div>
					</form>
				</div>
			</Container>
		</React.Fragment>
	);
};

export default compose(
	reduxForm({
		form: 'AddPartnerForm', // a unique identifier for this form
		validate
		// asyncValidate
	}),
	withStyles(styles)
)(AddPartnerForm);
