// import React from 'react';
// import {Link} from 'react-router-dom';
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

import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
    backgroundColor: theme.palette.background.paper,
    texTransform: 'capitalize'
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Tabs value={value} onChange={handleChange}>
            <Tab label="Member" component={Link} to="/member/" />   
            <Tab label="Partner" component={Link} to="/partner/"/>        
            <Tab label="CCPA" component={Link} to="/ccpa/" />       
            <Tab label="Offers" component={Link} to="/offers/" />
            <Tab label="Offer Page Content" component={Link} to="/offerPageContent/" />
            <Tab label="Full Credit Report" component={Link} to="/report/" />
            <Tab label="Option" component={Link} to="/option/" />
        </Tabs>
      </AppBar>
    </div>
  );
}