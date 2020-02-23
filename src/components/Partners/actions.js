let partnersList = [
	{
		id: 1,
		pid: 159234,
		name: 'Frozen yoghurt',
		img: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
		url: 'https://www.google.com/',
		flag: 6.0,
		sso: 'WIDGET_SSO',
		partnerIsActive: false,
		sendWelcomeEmail: true,
		sendWelcomeEmailSSO: true,
		logWidgetView: true,
		hasJointAccounts: false,
		migrationViewEnabled: false,
		skipConfirmIdentity: true,
		skipAuth: false,
		ssoTrafficMonitoring: false
	},
	{
		id: 2,
		pid: 159234,
		name: 'Frozen yoghurt',
		img: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
		url: 'https://www.google.com/',
		flag: 6.0,
		sso: 'WIDGET_SSO',
		partnerIsActive: true,
		sendWelcomeEmail: true,
		sendWelcomeEmailSSO: true,
		logWidgetView: true,
		hasJointAccounts: false,
		migrationViewEnabled: false,
		skipConfirmIdentity: true,
		skipAuth: false,
		ssoTrafficMonitoring: false
	},
	{
		id: 3,
		pid: 159234,
		name: 'Frozen yoghurt',
		img: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
		url: 'https://www.google.com/',
		flag: 6.0,
		sso: 'WIDGET_SSO',
		partnerIsActive: true,
		sendWelcomeEmail: true,
		sendWelcomeEmailSSO: true,
		logWidgetView: true,
		hasJointAccounts: false,
		migrationViewEnabled: false,
		skipConfirmIdentity: true,
		skipAuth: false,
		ssoTrafficMonitoring: false
	},
	{
		id: 4,
		pid: 159234,
		name: 'Frozen yoghurt',
		img: 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg',
		url: 'https://www.google.com/',
		flag: 6.0,
		sso: 'WIDGET_SSO',
		partnerIsActive: true,
		sendWelcomeEmail: true,
		sendWelcomeEmailSSO: true,
		logWidgetView: true,
		hasJointAccounts: false,
		migrationViewEnabled: false,
		skipConfirmIdentity: true,
		skipAuth: false,
		ssoTrafficMonitoring: false
	}
];

export const getPartnersList = () => {
	//request get => response (list)
	return {
		type: 'GET_PARTNERS_LIST',
		payload: partnersList
	};
};

export const addNewPartner = (newPartner) => {
	return {
		type: 'ADD_NEW_PARTNER',
		payload: newPartner
	};
};
