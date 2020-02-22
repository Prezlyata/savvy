export default (theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		// alignItems: 'center',
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			minWidth: 220
		},
		margin: '15px 0px'
	},
	wrapper: {
		paddingTop: 54,
		backgroundColor: '#f7f7f7',
		maxWidth: 1000,
		display: 'flex',
		flexDirection: 'column'
	},
	wrapperMenu: {
		backgroundColor: '#fff',
		padding: '30px 30px'
	},
	divider: {
		margin: '20px 0px 30px'
	},
	btn: {
		maxWidth: '100%',
		textAlign: 'center'
	}
});
