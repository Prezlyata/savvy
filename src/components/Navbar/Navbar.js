import React from 'react';
import { withStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import styles from './styles';

const Navbar = (props) => {
	const { classes } = props;
	return (
		<div>
			<h1 className={classes.root}>React App</h1>
			<ul className={classes.nav}>
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
			</ul>
		</div>
	);
};

export default withStyles(styles)(Navbar);
