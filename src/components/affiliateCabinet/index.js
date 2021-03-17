import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { history } from '../../store'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { logout } from '../../actions/authLogout'

import Promo from './promo'
import Stats from './stats'
import Profile from './profile'
import Payment from './payment'

import './index.scss'

class AffiliateCabinet extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			url: '/affiliate/cabinet',
			tabIndex: 0,
			tabName: null,
		};
	}

	switchPage(tabName) {
		switch(tabName) {
			case 'profile': 
				this.setState({
					tabIndex: 0,
					tabName: tabName
				}); 
				break;
			case 'promo': 
				this.setState({
					tabIndex: 1,
					tabName: tabName
				}); 
				break;
			case 'payment': 
				this.setState({
					tabIndex: 2,
					tabName: tabName
				}); 
				break;
			case 'stats': 
				this.setState({
					tabIndex: 3,
					tabName: tabName
				}); 
				break;
			default: 
				let newTabName = 'profile';

				this.setState({
					tabIndex: 0,
					tabName: newTabName
				})

				history.replace(this.state.url + '/' + newTabName);
				break;
		}
	}

	componentDidMount() {
		let { category } = this.props.match.params;

		this.switchPage(category);
		this.setState({isLoaded: true});
	}

	componentDidUpdate(prevProps) {
		let { category } = this.props.match.params;

		if(this.state.tabName !== category && category) this.switchPage(category);
	}

	logout() {
		this.props.logout({
			affiliate: true
		});
	}

	render() {
		if(this.props.authLogout.success) {
			delete(this.props.authLogout.success)
			return <Redirect to='/affiliate'/>;
		}

		const {
			url,
			isLoaded,
			tabIndex
		} = this.state;

		if(!isLoaded) return false;

		return (
			<div className="affiliate-cabinet">
				<div className="open-menu-on-mobile" onClick={() => this.openMenuOnMobile()}>
					<div className="fa fa-bars"/>
				</div>

				<Tabs 
					selectedIndex={tabIndex} 
					onSelect={tabIndex => this.setState({tabIndex})}
				>
					<TabList className="menu">
						<div className="fa fa-times close-menu-on-mobile" onClick={() => this.closeMenuOnMobile()}/>

						<Link to={`/affiliate`} className="logo">
							<img src="/img/logo.png" alt=""/>
							<div className="cabinet-name">Affiliate</div>
						</Link>
						<Tab>
							<Link to={`${url}/profile`} onClick={() => this.closeMenuOnMobile()}>
								<div className="fa fa-user-o icon"/>
								<div className="title">Профиль</div>
							</Link>
						</Tab>
						<Tab>
							<Link to={`${url}/promo`} onClick={() => this.closeMenuOnMobile()}>
								<div className="fa fa-picture-o icon"/>
								<div className="title">Партнерские ссылки</div>
							</Link>
						</Tab>
						<Tab>
							<Link to={`${url}/payment`} onClick={() => this.closeMenuOnMobile()}>
								<div className="fa fa-usd icon"/>
								<div className="title">Выплаты</div>
							</Link>
						</Tab>

						<Tab>
							<Link to={`${url}/stats`} onClick={() => this.closeMenuOnMobile()}>
								<div className="fa fa-list-ul icon"/>
								<div className="title">Статистика</div>
							</Link>
						</Tab>

						{/*<Tab>
							<Link to={`${url}/promo-codes`}>
								<div className="fa fa-bomb icon"/>
								<div className="title">Выплаты</div>
							</Link>
						</Tab>*/}

						<li className="exit">
							<a href="#/" onClick={() => this.logout()}>
								<div className="fa fa-sign-out icon"/>
								<div className="title">Выйти</div>
							</a>
						</li>
					</TabList>
							
					<TabPanel>
						<Profile {...this.props}/>
					</TabPanel>

					<TabPanel>
						<Promo {...this.props}/>
					</TabPanel>

					<TabPanel>
						<Payment {...this.props}/>
					</TabPanel>

					<TabPanel>
						<Stats {...this.props}/>
					</TabPanel>
				</Tabs>
			</div>
		)
	}

	openMenuOnMobile() {
		if(!localStorage.mobileVersion) return false;

		document.querySelector('.menu').style = 'display: block';
	}

	closeMenuOnMobile() {
		if(!localStorage.mobileVersion) return false;
		
		document.querySelector('.menu').style = 'display: none';
	}

}

AffiliateCabinet.propTypes = {
	logout: PropTypes.func.isRequired,
	authLogout: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	authLogout: state.authLogout
})

const mapDispatchToProps = (dispatch) => ({
	logout: (data) => dispatch(logout(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AffiliateCabinet);