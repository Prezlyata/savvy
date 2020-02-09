export default (theme) => ({
	wrapper: {
		paddingTop: 70,
		backgroundColor: '#f7f7f7',
		maxWidth: 1000
	},
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: 320
			//
		}
	},
	input: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		alignItems: 'center',
		overflow: 'hidden',
		[theme.breakpoints.down(890)]: {
			flexDirection: 'column'
		},
		paddingBottom: 10
	},
	table: {
		minWidth: 400
	}
});
