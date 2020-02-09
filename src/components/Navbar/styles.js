export default (theme) => ({
	title: {
		lineHeight: 2.6,
		color: 'rgba(63, 81, 181)'
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
		zIndex: 2,
		// Match [md, ∞[
		//       [960px, ∞[
		// display: 'inline',
		// position: 'fixed',
		listStyleType: 'none',
		position: 'fixed',
		margin: 0,
		width: '100%',

		backgroundColor: '#fff',
		boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',

		'& li': {
			fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
			display: 'inline',
			listStyleType: 'none',
			margin: 0
		}
	}
	// root: {
	// 	flexGrow: 1,
	// 	textAlign: 'left',
	// 	paddingBottom: 20
	// }
});
