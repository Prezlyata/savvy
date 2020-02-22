import React, { Component } from 'react';
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
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import styles from './styles';

import MaterialUiForm from './MaterialUiForm';

import ContactForm from './ContactForm';

class AddPartner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			partner: []
		};
	}

	handleAddNewPartner = (
		pid,
		name,
		img,
		url,
		sso,
		partnerIsActive,
		sendWelcomeEmail,
		sendWelcomeEmailSSO,
		logWidgetView,
		hasJointAccounts,
		migrationViewEnabled,
		skipConfirmIdentity,
		skipAuth,
		ssoTrafficMonitoring
	) => {
		const date = new Date();
		const newPartner = {
			id: Date.now(),
			pid: pid,
			name: name,
			img: img,
			url: url,
			sso: sso,
			partnerIsActive: partnerIsActive,
			sendWelcomeEmail: sendWelcomeEmail,
			sendWelcomeEmailSSO: sendWelcomeEmailSSO,
			logWidgetView: logWidgetView,
			hasJointAccounts: hasJointAccounts,
			migrationViewEnabled: migrationViewEnabled,
			skipConfirmIdentity: skipConfirmIdentity,
			skipAuth: skipAuth,
			ssoTrafficMonitoring: ssoTrafficMonitoring
		};
		const newPartnerList = this.state.partner;
		newPartnerList.unshift(newPartner);
		this.setState({
			partner: newPartnerList
		});
	};

	submit = (values) => {
		console.log(values);
	};

	render() {
		const { handleSubmit, pristine, reset, submitting, classes } = this.props;
		// const { classes } = this.props;
		return (
			<React.Fragment>
				<Container maxWidth="md" className={classes.wrapper}>
					<div className={classes.wrapperMenu}>
						<form onSubmit={(e) => this.submit(e)}>
							{inputFields.map((field) => (
								<Field
									className={classes.root}
									key={field.name}
									name={field.name}
									label={field.label}
									type={field.type}
									variant={field.variant}
									size={field.size}
									// value={field.defaultValue}
									// {field.required}
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
								<Button
									variant="contained"
									color="primary"
									type="submit"
									// onClick={(e) => this.submit(e)}
									// disabled={pristine || submitting}
								>
									Add partner
								</Button>
								{/* <Button className={classes.btn} variant="contained" color="primary" type="button" disabled={pristine || submitting} onClick={reset}>
                                Clear Values
                            </Button> */}
							</div>
						</form>
					</div>
					{/* <Button className={classes.btn} variant="contained" color="primary">
						Add partner
					</Button> */}
				</Container>
				{/* <ContactForm onSubmit={this.submit}/> */}
				{/* <MaterialUiForm /> */}
			</React.Fragment>
		);
	}
}

export default compose(
	reduxForm({
		form: 'AddPartnerForm', // a unique identifier for this form
		validate
		// asyncValidate
	}),
	withStyles(styles)
)(AddPartner);
