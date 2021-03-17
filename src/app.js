import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Main from './components/site/main'
import About from './components/site/about'
import Terminal from './components/terminal'
import NotFound from './components/notFound'
import FAQPost from './components/site/faq/post'
import Login from './components/site/auth/login'
import FAQCategories from './components/site/faq'
import Affiliate from './components/site/affiliate'
import AdminCabinet from './components/adminCabinet'
import Recover from './components/site/auth/recover'
import Register from './components/site/auth/register'
import TerminalCabinet from './components/terminalCabinet'
import AffiliateCabinet from './components/affiliateCabinet'
import EducationPost from './components/site/education/post'
import EducationCategories from './components/site/education'

import ReactSwipe from './components/elements/reactSwipe'

import './app.scss'

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {

		};

		localStorage.removeItem('wallet');

		const query = new URLSearchParams(window.location.search);

		const invitationСode = query.get('invitation_code')

		if(invitationСode) localStorage.setItem('invitationСode', invitationСode);

		window.innerWidth < 768 ? localStorage.setItem('mobileVersion', true) : localStorage.removeItem('mobileVersion');
	}

	render() {
		const Unauthorized = ({ component: Component, ...rest }) => (
			<Route {...rest} render={props => (
				<ReactSwipe {...props}>
					<Component {...props} />
				</ReactSwipe>
			)}/>
		);

		const Authorized = ({ component: Component, ...rest }) => (
			localStorage.token ? (
				<Route {...rest} render={props => (
					<ReactSwipe {...props}>
						<Component {...props} />
					</ReactSwipe>
				)}/>
			) : <Redirect to='/login' />
		);

		const AuthorizedAffiliate = ({ component: Component, ...rest }) => (
			localStorage.affiliateToken ? (
				<Route {...rest} render={props => (
					<ReactSwipe {...props}>
						<Component {...props} />
					</ReactSwipe>
				)}/>
			) : <Redirect to='/affiliate' />
		);

		return (
			<Router>
				<Switch>
					<Unauthorized exact path="/login" component={Login} />
					<Unauthorized exact path="/recover" component={Recover} />
					<Unauthorized exact path="/register" component={Register} />

					<Unauthorized exact path="/" component={Main} />
					<Unauthorized exact path="/about" component={About} />
					<Unauthorized exact path="/faq" component={FAQCategories} />
					<Unauthorized exact path="/affiliate" component={Affiliate} />
					<Unauthorized exact path="/education" component={EducationCategories} />
					<Unauthorized exact path="/faq/:category?/:part?/:page?" component={FAQPost} />
					<Unauthorized exact path="/education/:category?/:part?/:page?" component={EducationPost} />

					<Authorized exact path="/terminal" component={Terminal} />
					<Authorized exact path="/cabinet/:category?/:part?/:page?" component={TerminalCabinet} />
					<Authorized exact path="/admin/:category?/:part?/:page?" component={AdminCabinet} />
					<AuthorizedAffiliate exact path="/affiliate/cabinet/:category?/:part?/:page?" component={AffiliateCabinet} />

					<Unauthorized path="*" component={NotFound} />
				</Switch>
			</Router>
		)
	}
}

export default App;