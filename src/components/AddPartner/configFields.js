export const inputFields = [
	{
		label: 'Partner PID',
		name: 'Partner PID',
		type: 'number',
		variant: 'outlined',
		required: 'required',
		size: 'small',
		defaultValue: null
	},
	{
		label: 'Platform',
		name: 'Platform',
		type: 'text',
		variant: 'outlined',
		size: 'small',
		defaultValue: null
	},
	{
		label: 'Partner name',
		name: 'Partner name',
		type: 'text',
		variant: 'outlined',
		required: 'required',
		size: 'small',
		defaultValue: null
	},
	{
		label: 'Login Url',
		name: 'Login Url',
		type: 'text',
		variant: 'outlined',
		required: null,
		size: 'small',
		defaultValue: null
	},
	{
		label: 'WebSite',
		name: 'WebSite',
		type: 'text',
		variant: 'outlined',
		required: null,
		size: 'small',
		defaultValue: null
	},
	{
		label: 'FI_ID',
		name: 'FI_ID',
		type: 'text',
		variant: 'outlined',
		required: null,
		size: 'small',
		defaultValue: null
	},
	{
		label: 'Dormancy period',
		name: 'DormancyPeriod',
		type: 'number',
		variant: 'outlined',
		required: 'required',
		size: 'small',
		defaultValue: '120'
	}
];

export const partnerStatus = [
	{
		name: 'Active',
		label: 'Active',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	}
];

export const emailRules = [
	{
		name: 'Send Welcome Emails',
		label: 'Send Welcome Emails',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: 'Send Welcome Emails at SSO',
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
		name: 'Send inactive emails',
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
		name: 'Reset activity on api login',
		label: 'Reset activity on api login',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: 'Skip Authentication',
		label: 'Skip Authentication',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	}
];

export const memberProfileRules = [
	{
		name: 'Member can edit email in profile',
		label: 'Member can edit email in profile',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	}
];
export const products = [
	{
		name: 'APPLICATION SSO IFRAME INTEGRATED',
		label: 'APPLICATION SSO IFRAME INTEGRATED',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: 'APPLICATION_SSO',
		label: 'APPLICATION_SSO',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: 'WIDGET_SSO',
		label: 'WIDGET_SSO',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	}
];
export const ssoRules = [
	{
		name: 'Enable Migration from non-SSO to SSO',
		label: 'Enable Migration from non-SSO to SSO',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: 'Enable PMID Migration',
		label: 'Enable PMID Migration',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: "Don't Confirm Identity during navigation from OLB to SM website",
		label: "Don't Confirm Identity during navigation from OLB to SM website",
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: "Don't Confirm Identity during navigation from Widget to SM website",
		label: "Don't Confirm Identity during navigation from Widget to SM website",
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: 'Allow multiple accounts from single partner member id',
		label: 'Allow multiple accounts from single partner member id',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: 'Allow widget notifications',
		label: 'Allow widget notifications',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	},
	{
		name: 'Enable monitoring of incoming sso traffic',
		label: 'Enable monitoring of incoming sso traffic',
		value: 'end',
		color: 'primary',
		labelPlacement: 'end'
	}
];
