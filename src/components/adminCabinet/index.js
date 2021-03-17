import React from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { history } from '../../store'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

//import Promo from './promo'
import Users from './users'
import Deals from './deals'
import Assets from './assets'
import Settings from './settings'
import PaymentOutputs from './paymentOutputs'

import './index.scss'

class AdminCabinet extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			url: '/admin',
			tabIndex: 0,
			tabName: null,
		};
	}

	switchPage(tabName) {
		switch(tabName) {
			case 'settings': 
				this.setState({
					tabIndex: 0,
					tabName: tabName
				}); 
				break;
			case 'assets': 
				this.setState({
					tabIndex: 1,
					tabName: tabName
				}); 
				break;
			case 'users': 
				this.setState({
					tabIndex: 2,
					tabName: tabName
				}); 
				break;
			case 'deals': 
				this.setState({
					tabIndex: 3,
					tabName: tabName
				}); 
				break;
			case 'payment-outputs': 
				this.setState({
					tabIndex: 4,
					tabName: tabName
				}); 
				break;
			case 'promo': 
				this.setState({
					tabIndex: 5,
					tabName: tabName
				}); 
				break;
			default: 
				let newTabName = 'settings';

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

	render() {
		if(!localStorage.isAdmin) return <Redirect to='/not-found'/>;

		const {
			url,
			isLoaded,
			tabIndex
		} = this.state;

		if(!isLoaded) return false;

		return (
			<div className="admin-cabinet">
				<div className="open-menu-on-mobile" onClick={() => this.openMenuOnMobile()}>
					<div className="fa fa-bars"/>
				</div>

				<Tabs 
					selectedIndex={tabIndex} 
					onSelect={tabIndex => this.setState({tabIndex})}
				>
					<TabList className="menu">
						<div className="fa fa-times close-menu-on-mobile" onClick={() => this.closeMenuOnMobile()}/>

						<Link to={`/`} className="logo">
							<img src="/img/logo.png" alt=""/>
							<div className="cabinet-name">Admin</div>
						</Link>
						<li>
							<Link to={`/terminal`}>
								<div className="fa fa-bar-chart icon"/>
								<div className="title">Терминал</div>
							</Link>
						</li>
						<li>
							<Link to={`/cabinet`}>
								<div className="fa fa-user icon"/>
								<div className="title">Личный кабинет</div>
							</Link>
						</li>
						<Tab>
							<Link to={`${url}/settings`} onClick={() => this.closeMenuOnMobile()}>
								<div className="fa fa-cogs icon"/>
								<div className="title">Настройка платформы</div>
							</Link>
						</Tab>
						<Tab>
							<Link to={`${url}/assets`} onClick={() => this.closeMenuOnMobile()}>
								<div className="fa fa-area-chart icon"/>
								<div className="title">Активы</div>
							</Link>
						</Tab>
						<Tab>
							<Link to={`${url}/users`} onClick={() => this.closeMenuOnMobile()}>
								<div className="fa fa-users icon"/>
								<div className="title">Пользователи</div>
							</Link>
						</Tab>
						<Tab>
							<Link to={`${url}/deals`} onClick={() => this.closeMenuOnMobile()}>
								<div className="fa fa-list-ol icon"/>
								<div className="title">Сделки всех пользователей</div>
							</Link>
						</Tab>

						<Tab>
							<Link to={`${url}/payment-outputs`} onClick={() => this.closeMenuOnMobile()}>
								<div className="fa fa-th-list icon"/>
								<div className="title">Список заявок на вывод средств</div>
							</Link>
						</Tab>

						{/*<Tab>
							<Link to={`${url}/promo`}>
								<div className="fa fa-bomb icon"/>
								<div className="title">Промокоды</div>
							</Link>
						</Tab>*/}
					</TabList>
							
					<TabPanel>
						<Settings {...this.props}/>
					</TabPanel>

					<TabPanel>
						<Assets {...this.props}/>
					</TabPanel>

					<TabPanel>
						<Users {...this.props}/>
					</TabPanel>

					<TabPanel>
						<Deals {...this.props}/>
					</TabPanel>

					<TabPanel>
						<PaymentOutputs {...this.props}/>
					</TabPanel>

					{/*<TabPanel>
						<Promo {...this.props}/>
					</TabPanel>*/}
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

export default AdminCabinet;