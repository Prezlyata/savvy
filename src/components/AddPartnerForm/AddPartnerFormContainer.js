import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import AddPartnerForm from './AddPartnerForm';
import { addNewPartner } from '../Partners/actions';

class AddPartnerFormContainer extends Component {
	submit = (values) => {
		console.log(values);
		const newPartner = {
			id: Date.now(),
			pid: values.pid ? values.pid : null,
			name: values.name ? values.name : null,
			img: values.img
				? values.img
				: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
			url: values.url ? values.url : null,
			sso: values.sso ? values.sso : false,
			partnerIsActive: values.partnerIsActive ? values.partnerIsActive : false,
			sendWelcomeEmail: values.sendWelcomeEmail ? values.sendWelcomeEmail : false,
			sendWelcomeEmailSSO: values.sendWelcomeEmailSSO ? values.sendWelcomeEmailSSO : false,
			logWidgetView: values.logWidgetView ? values.logWidgetView : false,
			hasJointAccounts: values.hasJointAccounts ? values.hasJointAccounts : false,
			migrationViewEnabled: values.migrationViewEnabled ? values.migrationViewEnabled : false,
			skipConfirmIdentity: values.skipConfirmIdentity ? values.skipConfirmIdentity : false,
			skipAuth: values.skipAuth ? values.skipAuth : false,
			ssoTrafficMonitoring: values.ssoTrafficMonitoring ? values.ssoTrafficMonitoring : false
		};
		// const newPartner = {};
		console.log(newPartner);
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
