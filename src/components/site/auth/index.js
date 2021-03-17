import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import Login from './login'
import Recover from './recover'
import Register from './register'

import './index.scss'

class Auth extends Component {

	constructor(props) {
		super(props);

		this.state = {
			tabIndex: 0
		};

	}

	render() {
		const { affiliate } = this.props;

		const { tabIndex } = this.state;

		return (
			<div className="auth">
				<div className="close"/>
				<Tabs 
					selectedIndex={tabIndex} 
					onSelect={tabIndex => this.setState({tabIndex})}
				>
					<TabList>
						<div className="title">{affiliate ? 'Кабинет для партнеров' : ''}</div>
						<div className="row">
							<Tab>
								Войти
							</Tab>

							<Tab>
								Регистрация
							</Tab>
						</div>

						<div className="fa fa-times" onClick={() => this.props.openAuth()}/>

						{/*recover*/}
						<Tab style={{display: 'none'}} />
					</TabList>

					<TabPanel>
						<Login 
							panel={true}
							affiliate={affiliate}
							openRecover={() => this.setState({tabIndex: 2})}
						/>
					</TabPanel>

					<TabPanel>
						<Register 
							panel={true}
							affiliate={affiliate}
						/>
					</TabPanel>

					<TabPanel>
						<Recover 
							panel={true}
							affiliate={affiliate}
						/>
					</TabPanel>

				</Tabs>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	authLogin: state.authLogin,
	authRecover: state.authRecover,
	authRegister: state.authRegister
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)