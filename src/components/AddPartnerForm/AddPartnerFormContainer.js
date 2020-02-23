import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import AddPartnerForm from './AddPartnerForm';
import { addNewPartner } from '../Partners/actions';

class AddPartnerFormContainer extends Component {
	submit = (values) => {
		console.log(values);
		const date = new Date();
		const newPartner = {
			id: date,
			pid: values.pid ? values.pid : null,
			name: values.name ? values.name : null,
			img: values.img ? values.img : null,
			url: values.url ? values.url : null,
			sso: values.sso ? values.sso : null,
			partnerIsActive: values.partnerIsActive ? values.partnerIsActive : null,
			sendWelcomeEmail: values.sendWelcomeEmail ? values.sendWelcomeEmail : null,
			sendWelcomeEmailSSO: values.sendWelcomeEmailSSO ? values.sendWelcomeEmailSSO : null,
			logWidgetView: values.logWidgetView ? values.logWidgetView : null,
			hasJointAccounts: values.hasJointAccounts ? values.hasJointAccounts : null,
			migrationViewEnabled: values.migrationViewEnabled ? values.migrationViewEnabled : null,
			skipConfirmIdentity: values.skipConfirmIdentity ? values.skipConfirmIdentity : null,
			skipAuth: values.skipAuth ? values.skipAuth : null,
			ssoTrafficMonitoring: values.ssoTrafficMonitoring ? values.ssoTrafficMonitoring : null
		};
		// const newPartner = {};
		this.props.addNewPartner(newPartner);
		this.props.history.push('/partners');
	};

	render() {
		return (
			<div>
				<AddPartnerForm onSubmit={this.submit} />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addNewPartner: (newPartner) => dispatch(addNewPartner(newPartner))
	};
};
const mapStateToProps = (state) => {
	return {};
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(AddPartnerFormContainer);
