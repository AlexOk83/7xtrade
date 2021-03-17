import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Auth from '../../auth'

import './index.scss'

class HeaderAffiliate extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			headerBackground: false,
		};

		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		this.body = document.body;

		this.body.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		this.body.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(e) {
		let scrollTop = e.target.scrollTop;

		this.setState({headerBackground: scrollTop > 1});
	}

	render() {

		const {
			headerBackground
		} = this.state;

		return (
			<header className="affiliate__header">
				<div className="container">
					<div className="affiliate__header-wrapper">
						<div className="header__logo">
							<NavLink exact to="/">
								<img src="/images/logo_top.png" alt="логотип 7xtrade.com"/>
								{/*<div className="title-platform">{this.props.app.name}</div>*/}
							</NavLink>
						</div>
						<div className="header__link">
							<NavLink exact to="/" className="header__link">
								Вернуться назад
							</NavLink>
						</div>
					</div>
				</div>
				<nav>
					{/*<NavLink exact to="/">Главная</NavLink>
					<NavLink exact to="/about">О компании</NavLink>
					<NavLink exact to="/education-categories">Обучение</NavLink>
					<NavLink exact to="/affiliate">Партнерство</NavLink>
					<NavLink exact to="/faq">FAQ</NavLink>*/}
				</nav>
				{/*<div className="launch" style={{opacity: +!this.props.viewAuth}}>*/}
				{/*	<button className="btn btn-yellow" onClick={() => this.props.openAuth()}>*/}
				{/*		Вход*/}
				{/*	</button>*/}
				{/*</div>*/}

				{this.props.viewAuth ? 
					<Auth 
						affiliate={true}
						openAuth={() => this.props.openAuth()} 
					/> 
				: false}
			</header>
		)
	}

}

const mapStateToProps = (state) => ({
	app: state.app
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAffiliate);