import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

//import { logout } from '../../actions/authLogout'
import { getUserInfo } from '../../actions/terminal'

import Guide from './guide'
import Profile from './profile'
import Promocodes from './promocodes'
import Output from './payment/output'
import Increase from './payment/increase'
import HistoryDeals from './historyDeals'
import HistoryPayments from './payment/history'

import TerminalHeader from '../terminal/terminalHeader'
import TerminalSidebar from '../terminal/terminalSidebar'

import './index.scss'
import {Select} from "../formElements/select";

class Cabinet extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			url: '/cabinet',
			tabIndex: -1,
			tabName: null,
		};
	}

	componentDidMount() {
		let { category } = this.props.match.params;

		this.switchPage(category);

		this.props.getUserInfo({is_request: true});
	}

	componentDidUpdate(prevProps) {
		let { category } = this.props.match.params;

		if(this.state.tabName !== category && category) this.switchPage(category);
	}

	switchPage(tabName) {
		switch(tabName) {
			case 'profile': 
				this.setState({
					tabIndex: 0,
					tabName: tabName
				}); 
				break;
			case 'increase': 
				this.setState({
					tabIndex: 1,
					tabName: tabName
				}); 
				break;
			case 'output': 
				this.setState({
					tabIndex: 2,
					tabName: tabName
				}); 
				break;
			case 'history-payments': 
				this.setState({
					tabIndex: 3,
					tabName: tabName
				}); 
				break;
			case 'history-deals': 
				this.setState({
					tabIndex: 4,
					tabName: tabName
				}); 
				break;
			case 'promo-codes': 
				this.setState({
					tabIndex: 5,
					tabName: tabName
				}); 
				break;
			case 'guide': 
				this.setState({
					tabIndex: 6,
					tabName: tabName
				}); 
				break;
			default: 
				if(!tabName) {
					tabName = 'profile';

					this.setState({
						tabIndex: 0,
						tabName: tabName
					}); 

					this.props.history.replace(this.state.url + '/' + tabName);
					break;
				}

				this.props.history.replace('/404')
				break;
		}
	}

	openMenuOnMobile() {
		if(!localStorage.mobileVersion) return false;

		document.querySelector('.menu').style = 'display: block';
	}

	closeMenuOnMobile() {
		if(!localStorage.mobileVersion) return false;

		document.querySelector('.menu').style = 'display: none';
	}

	render() {
		/*if(this.props.authLogout.success) {
			delete(this.props.authLogout.success)
			return <Redirect to='/'/>;
		}*/

		const {
			url,
			tabName,
			tabIndex
		} = this.state;

		const tablist = [
			{ value: '/terminal', name: 'Терминал' },
			{ value: '/cabinet/profile', name: 'Профиль' }
		]

		return (
			<div className="cabinet">
				<div className="container_full">
					<div className="cabinet__wrapper">
						<TerminalSidebar/>

						<div className="cabinet_main">
							<TerminalHeader
								allowCharts={false}
								allowGetBonus={false}
							/>

							<Tabs
								className="content"
								selectedIndex={tabIndex}
								onSelect={tabIndex => this.setState({tabIndex})}
							>

								<div className="content__top">
									<div className="content__top-left">
										<TabList className="menu" style={tabName === 'guide' ? {display: 'none'} : {}}>
											{/*<div
							className="fa fa-times close-menu-on-mobile"
							onClick={() => this.closeMenuOnMobile()}
						/>*/}

											<Tab>
												<Link to={`${url}/profile`} onClick={() => this.closeMenuOnMobile()}>
													<div className="fa fa-user-o icon"/>
													<div className="title">Профиль</div>
												</Link>
											</Tab>

											<Tab>
												<Link to={`${url}/increase`} onClick={() => this.closeMenuOnMobile()}>
													<div className="fa fa-user-o icon"/>
													<div className="title">Пополнение</div>
												</Link>
											</Tab>

											<Tab>
												<Link to={`${url}/output`} onClick={() => this.closeMenuOnMobile()}>
													<div className="fa fa-usd icon"/>
													<div className="title">Вывод</div>
												</Link>
											</Tab>

											<Tab>
												<Link to={`${url}/history-payments`} onClick={() => this.closeMenuOnMobile()}>
													<div className="fa fa-usd icon"/>
													<div className="title">История</div>
												</Link>
											</Tab>

											<Tab>
												<Link to={`${url}/history-deals`} onClick={() => this.closeMenuOnMobile()}>
													<div className="fa fa-list-ol icon"/>
													<div className="title">Сделки</div>
												</Link>
											</Tab>

											<Tab>
												<Link to={`${url}/promo-codes`} onClick={() => this.closeMenuOnMobile()}>
													<div className="fa fa-bomb icon"/>
													<div className="title">Промокоды</div>
												</Link>
											</Tab>

											{localStorage.isAdmin ?
												<li>
													<Link to={`/admin`} onClick={() => this.closeMenuOnMobile()}>
														<div className="fa fa-cogs icon"/>
														<div className="title">Админ-панель</div>
													</Link>
												</li>
												: false}

											{/*<li className="exit">
							<a href="#/" onClick={() => this.logout()}>
								<div className="fa fa-sign-out icon"/>
								<div className="title">Выйти</div>
							</a>
						</li>*/}
											<Tab style={{display: 'none'}}>{/*Guide*/}</Tab>
										</TabList>
									</div>
									<div className="mobile-tablist" style={{ marginBottom: 20 }}>
										<Select options={tablist} value='Профиль' />
									</div>
									<div className="content__top-right">
										<div className="content__top-info">
											<div className="account_info">
												<div className="account_info__title">На счету:</div>
												<div className="account_info__value">0.00 $</div>
											</div>
											<div className="available_info">
												<div className="available_info__title">Доступно для вывода:</div>
												<div className="available_info__value">0.00 $</div>
											</div>
										</div>
									</div>
								</div>

								<div className="content__mid">
									<TabPanel>
										<Profile {...this.props}/>
									</TabPanel>

									<TabPanel>
										<Increase {...this.props}/>
									</TabPanel>

									<TabPanel>
										<Output {...this.props}/>
									</TabPanel>

									<TabPanel>
										<HistoryPayments {...this.props}/>
									</TabPanel>

									<TabPanel>
										<HistoryDeals {...this.props}/>
									</TabPanel>

									<TabPanel>
										<Promocodes {...this.props}/>
									</TabPanel>

									<TabPanel>
										<Guide {...this.props}/>
									</TabPanel>
								</div>
							</Tabs>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

Cabinet.propTypes = {
	//logout: PropTypes.func.isRequired,
	//authLogout: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	//authLogout: state.authLogout
})

const mapDispatchToProps = (dispatch) => ({
	//logout: (data) => dispatch(logout(data)),
	getUserInfo: (data) => dispatch(getUserInfo(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cabinet);