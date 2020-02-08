export default (theme) => ({
	nav: {
		// Match [md, ∞[
		//       [960px, ∞[
		// display: 'inline',
		listStyleType: 'none',
		margin: 0,
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: '#fff',
		padding: 0,
		boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
		[theme.breakpoints.down(750)]: {
			display: 'none'
		},
		'& li': {
			fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
			display: 'inline',
			listStyleType: 'none',
			margin: 0
		}
	},
	root: {
		flexGrow: 1,
		textAlign: 'center'
	}
});
