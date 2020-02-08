export default (theme) => ({
	title: {
		lineHeight: 2.6
	},
	desktopMenu: {
		margin: '0 auto',
		maxWidth: 800,
		display: 'flex',
		justifyContent: 'space-around',
		[theme.breakpoints.down(600)]: {
			display: 'none'
		}
	},
	mobileMenu: {
		display: 'flex',
		justifyContent: 'right',
		[theme.breakpoints.up(600)]: {
			display: 'none'
		}
	},
	nav: {
		// Match [md, ∞[
		//       [960px, ∞[
		// display: 'inline',
		listStyleType: 'none',
		margin: 0,

		backgroundColor: '#fff',
		padding: 0,
		boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',

		'& li': {
			fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
			display: 'inline',
			listStyleType: 'none',
			margin: 0
		}
	},
	root: {
		flexGrow: 1,
		textAlign: 'left'
	}
});
