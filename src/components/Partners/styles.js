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
		minWidth: 320
	},
	imgContainer:{
		display: 'block',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		// boxSizing: 'borderBox',
		overflow: 'hidden',
		// backgroundPosition: 'center',
		maxWidth: 180,
		height: 65
	},
	img:{
		height: 65
	},
	partnerContainer:{
		display: 'flex',
		flexDirection: 'column'
	},
	flagContainer:{
		display: 'flex',
		flexDirection: 'column'
	},
	flagContent:{
		display: 'flex',
		alignItems: 'center',
	},
	tableMobile:{
		[theme.breakpoints.down(890)]: {
			display: 'none'
		},
	},
	editActionMobile:{
		[theme.breakpoints.down(440)]: {
			display: 'flex',
			flexDirection: 'column'
		},
	}
});
