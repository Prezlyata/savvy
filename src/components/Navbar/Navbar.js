import React from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { IconButton, List, Drawer, Typography, MenuList, MenuItem } from '@material-ui/core';
import {
	MenuIcon,
	HomeIcon,
	PermIdentityIcon,
	PeopleOutlineIcon,
	DetailsIcon,
	DeveloperBoardIcon,
	MultilineChartIcon,
	RemoveFromQueueIcon,
	LibraryBooksIcon
} from '@material-ui/icons/PermIdentity';
import './Navbar.css';
import styles from './styles';

const Navbar = (props) => {
	const { classes } = props;

	const [ state, setState ] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false
	});
	const toggleDrawer = (side, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [side]: open });
	};
	const sideList = (side) => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List>
				<MenuList>
					<MenuItem component={Link} to="/">
						<HomeIcon />
						Home
					</MenuItem>
					{/* <Divider /> */}
					<MenuItem component={Link} to="/member">
						<PermIdentityIcon />
						Member
					</MenuItem>
					<MenuItem component={Link} to="/partner">
						<PeopleOutlineIcon />
						Partner
					</MenuItem>
					<MenuItem component={Link} to="/ccpa">
						<RemoveFromQueueIcon />
						CCPA
					</MenuItem>
					<MenuItem component={Link} to="/offers">
						<LibraryBooksIcon />
						Offers
					</MenuItem>
					<MenuItem component={Link} to="/offerPageContent">
						<DeveloperBoardIcon />
						Offer Page Content
					</MenuItem>
					<MenuItem component={Link} to="/report">
						<MultilineChartIcon />
						Full Credit Report
					</MenuItem>
					<MenuItem component={Link} to="/option">
						<DetailsIcon />
						Option
					</MenuItem>
				</MenuList>
			</List>
		</div>
	);
	return (
		<div>
			<h1 className={classes.root}>React App</h1>

			<ul className={classes.nav}>
				<div className={classes.mobileMenu}>
					<IconButton onClick={toggleDrawer('right', true)} aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Savvy Money
					</Typography>
					<Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
						{sideList('right')}
					</Drawer>
				</div>
				<div className={classes.desktopMenu}>
					<li>
						<NavLink exact to="/" className="ripple">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/member" className="ripple">
							Member
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/partner" className="ripple">
							Partner
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/ccpa" className="ripple">
							CCPA
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/offers" className="ripple">
							Offers
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/offerPageContent" className="ripple">
							Offer Page Content
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/report" className="ripple">
							Full Credit Report
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/option" className="ripple">
							Option
						</NavLink>
					</li>
				</div>
			</ul>
		</div>
	);
};

export default withStyles(styles)(Navbar);
