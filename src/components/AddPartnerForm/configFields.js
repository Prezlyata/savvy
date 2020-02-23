export const inputFields = [
	{
		label: 'Partner PID',
		name: 'pid',
		type: 'number',
		variant: 'outlined',
		size: 'small',
		defaultValue: null
	},
	{
		label: 'Platform',
		name: 'platform',
		type: 'text',
		variant: 'outlined',
		size: 'small',
		defaultValue: null
	},
	{
		label: 'Partner name',
		name: 'name',
		type: 'text',
		variant: 'outlined',
		size: 'small',
		defaultValue: null
	},
	{
		label: 'Login Url',
		name: 'url',
		type: 'text',
		variant: 'outlined',
		size: 'small',
		defaultValue: null
	},
	{
		label: 'WebSite',
		name: 'webSite',
		type: 'text',
		variant: 'outlined',
		size: 'small',
		defaultValue: null
	},
	{
		label: 'FI_ID',
		name: 'FI_ID',
		type: 'text',
		variant: 'outlined',
		size: 'small',
		defaultValue: null
	},
	{
		label: 'Dormancy period',
		name: 'dormancyPeriod',
		type: 'number',
		variant: 'outlined',
		size: 'small',
		defaultValue: '120'
	}
];

export const partnerStatus = [
	{
		name: 'active',
		label: 'Active',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	}
];

export const emailRules = [
	{
		name: 'sendWelcomeEmail',
		label: 'Send Welcome Emails',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: 'sendWelcomeEmailSSO',
		label: 'Send Welcome Emails at SSO',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: 'Send monitoring and score update notification emails',
		label: 'Send monitoring and score update notification emails',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: 'sendInactiveEmails',
		label: 'Send inactive emails',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	}
];

export const loginRules = [
	{
		name: 'Log ‘login’ when widget is displayed in OLB',
		label: 'Log ‘login’ when widget is displayed in OLB',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: 'resetActivityOnApiLogin',
		label: 'Reset activity on api login',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: 'skipAuth',
		label: 'Skip Authentication',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	}
];

export const memberProfileRules = [
	{
		name: 'memberCanEditEmailInProfile',
		label: 'Member can edit email in profile',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	}
];
export const products = [
	{
		name: 'appSSOIframeIntegrated',
		label: 'APPLICATION SSO IFRAME INTEGRATED',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: 'applicationSSO',
		label: 'APPLICATION_SSO',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: 'widgetSSO',
		label: 'WIDGET_SSO',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	}
];
export const ssoRules = [
	{
		name: 'migrationFromNonSSOtoSSO',
		label: 'Enable Migration from non-SSO to SSO',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: 'migrationViewEnabled',
		label: 'Enable PMID Migration',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: 'skipConfirmIdentity',
		label: 'Skip Confirm Identity',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: 'hasJointAccounts',
		label: 'Has Joint Accounts',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: 'AllowWidgetNotifications',
		label: 'Allow widget notifications',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: 'ssoTrafficMonitoring',
		label: 'Enable monitoring of incoming sso traffic',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	}
];
