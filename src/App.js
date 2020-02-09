import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';

import Home from './pages/Home';
import Member from './pages/Member';
import Partners from './components/Partners/Partners';
import Ccpa from './pages/Ccpa';
import Offers from './pages/Offers';
import OfferPageContent from './pages/OfferPageContent';
import Report from './pages/Report';
import Option from './pages/Option';
import Error from './pages/Error';

const App = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/member" component={Member} />
				<Route exact path="/partners" component={Partners} />
				<Route exact path="/ccpa" component={Ccpa} />
				<Route exact path="/offers" component={Offers} />
				<Route exact path="/offerPageContent" component={OfferPageContent} />
				<Route exact path="/report" component={Report} />
				<Route exact path="/option" component={Option} />
				<Route exact path="/member:slug" component={Member} />
				<Route component={Error} />
			</Switch>
			{/* <Test /> */}
		</React.Fragment>
	);
};

export default App;
