// import React from 'react';
import { Link } from 'react-router-dom';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import { makeStyles } from '@material-ui/core/styles';
// import { flexbox } from '@material-ui/system';

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles(theme => ({
//     wrapper: {
//         maxWidth: 1000,
//         margin: '0 auto'
//     },
//     root: {
//         flexGrow: 1,
//         backgroundColor: theme.palette.background.paper,
//       },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//   }));

// const Navbar = () => {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//     const classes = useStyles();

//   return (
//       <div>
//               <div className={classes.root}>
//       <AppBar position="static">
//         <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0}>
//         Item One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//     </div>
//     <Paper square >
//       <Tabs
//       className={classes.wrapper}
//         value={value}
//         indicatorColor="primary"
//         textColor="primary"
//         onChange={handleChange}
//         variant="fullWidth"
//         // orientation="vertical"
//         // aria-label="disabled tabs example"
//       >

//         <Tab label="Member" component={Link} to="/member/" />
//         <Tab label="Partner" component={Link} to="/partner/"/>
//         <Tab label="CCPA" component={Link} to="/ccpa/" />
//         <Tab label="Offers" component={Link} to="/offers/" />
//         <Tab label="Offer Page Content" component={Link} to="/offerPageContent/" />
//         <Tab label="Full Credit Report" component={Link} to="/report/" />
//         <Tab label="Option" component={Link} to="/option/" />

//         {/* <Route exact path='/Error/:slug' component ={Link} to='/error/' />
//           <Route component={Error} /> */}

//       </Tabs>
//     </Paper>
//     </div>
//   );
// }
// export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		flexGrow: 0,
// 		backgroundColor: theme.palette.background.paper
// 		// texTransform: 'capitalize'
// 	},
// 	menuButton: {
// 		marginRight: theme.spacing(2)
// 	},
// 	title: {
// 		flexGrow: 1
// 	},
// 	list: {
// 		width: 700,
// 		listStyleType: 'none',
// 		display: 'flex',
// 		flexWrap: 'wrap',
// 		flexDirection: 'row',
// 		justifyContent: 'space-between'
// 	},
// 	linkStyle: {
// 		textDecoration: 'none',
// 		color: '#000'
// 	}
// }));

// export default function SimpleTabs() {
// 	const classes = useStyles();
// 	const [ value, setValue ] = React.useState(1);

// 	const handleChange = (event, newValue) => {
// 		setValue(newValue);
// 		console.log(newValue);
// 	};

// 	return (
// 		<div className={classes.root}>
// 			<AppBar position="static" color="inherit">
// 				{/* <Tabs value={value} onChange={handleChange}>

// 					<Tab label="Member" className={classes.title} component={Link} to="/member/" />
// 					<Tab label="Partner" component={Link} to="/partner/" />
// 					<Tab label="CCPA" component={Link} to="/ccpa/" />
// 					<Tab label="Offers" component={Link} to="/offers/" />
// 					<Tab label="Offer Page Content" component={Link} to="/offerPageContent/" />
// 					<Tab label="Full Credit Report" component={Link} to="/report/" />
// 					<Tab label="Option" component={Link} to="/option/" />
// 				</Tabs> */}
// 				<ul className={classes.list} value={2} onClick={handleChange}>
// 					<li>
// 						<Link value={2} className={classes.linkStyle} to="/member">
// 							Member
// 						</Link>
// 					</li>
// 					<li>
// 						<Link className={classes.linkStyle} to="/partner">
// 							Partner
// 						</Link>
// 					</li>
// 					<li>
// 						<Link className={classes.linkStyle} to="/ccpa">
// 							CCPA
// 						</Link>
// 					</li>
// 					<li>
// 						<Link className={classes.linkStyle} to="/offers">
// 							Offers
// 						</Link>
// 					</li>
// 					<li>
// 						<Link className={classes.linkStyle} to="/offerPageContent">
// 							Offer Page Content
// 						</Link>
// 					</li>
// 					<li>
// 						<Link className={classes.linkStyle} to="/report">
// 							Full Credit Report
// 						</Link>
// 					</li>
// 					<li>
// 						<Link className={classes.linkStyle} to="/option">
// 							Option
// 						</Link>
// 					</li>
// 				</ul>
// 			</AppBar>
// 		</div>
// 	);
// }

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import { display } from '@material-ui/system';

// // const useStyles = makeStyles((theme)=> {
// // 	root: {
// // 		flexGrow: 1,
// // 	},
// // 	hide: {
// // 		maxWidth: 700,
// // 		display: 'block'
// // 	}
// // });

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		flexGrow: 1
// 	},
// 	hide: {
// 		// Match [md, ∞[
// 		//       [960px, ∞[
// 		[theme.breakpoints.down(750)]: {
// 			display: 'none'
// 		}
// 	}
// }));

// export default function CenteredTabs() {
// 	const classes = useStyles();
// 	const [ value, setValue ] = React.useState(0);

// 	const handleChange = (event, newValue) => {
// 		setValue(newValue);
// 	};

// 	const width = 100;

// 	const widthModifier = {
// 		minWidth: `${width}px`,
// 		textTransform: 'none'
// 	};

// 	return (
// 		<Paper className={classes.root}>
// 			<Tabs
// 				className={classes.hide}
// 				value={value}
// 				// style={widthModifier}
// 				// onChange={handleChange}
// 				indicatorColor="primary"
// 				textColor="primary"
// 				centered
// 			>
// 				<Tab label="Member" className={classes.title} component={Link} to="/member/" style={widthModifier} />
// 				<Tab label="Partner" component={Link} to="/partner/" style={widthModifier} />
// 				<Tab label="CCPA" component={Link} to="/ccpa/" style={widthModifier} />
// 				<Tab label="Offers" component={Link} to="/offers/" style={widthModifier} />
// 				<Tab label="Offer Page Content" component={Link} to="/offerPageContent/" style={widthModifier} />
// 				<Tab label="Full Credit Report" component={Link} to="/report/" style={widthModifier} />
// 				<Tab label="Option" component={Link} to="/option/" style={widthModifier} />
// 			</Tabs>
// 		</Paper>
// 	);
// }
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Home, Book, AccountBox } from '@material-ui/icons';

const Navbar = () => {
	return (
		<List component="nav">
			<ListItem component="div">
				<ListItemText inset>
					<TypoGraphy color="inherit" variant="title">
						Home <Home />
					</TypoGraphy>
				</ListItemText>

				<ListItemText inset>
					<TypoGraphy color="inherit" variant="title">
						Posts <Book />
					</TypoGraphy>
				</ListItemText>

				<ListItemText inset>
					<TypoGraphy color="inherit" variant="title">
						Contact <AccountBox />
					</TypoGraphy>
				</ListItemText>
			</ListItem>
		</List>
	);
};
export default Navbar;
