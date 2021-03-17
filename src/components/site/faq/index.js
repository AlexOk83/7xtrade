import React from 'react'

import Header from '../header'
import Footer from '../footer'

import DivLink from '../../elements/divLink'

import './index.scss'

class FAQ extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			viewAuth: false,
			headerBackground: false,
		};

	}

	componentDidMount() {

	}

	render() {
		const {
			viewAuth,
		} = this.state;

		const { includeToCabinet } = this.props;

		return (
			<div className="main">
				{!includeToCabinet ?
					<Header 
						viewAuth={viewAuth}
						openAuth={() => this.setState({viewAuth: !viewAuth})} 
					/>
				: false}

				<section className={`faq ${includeToCabinet ? 'include-to-cabinet' : 'first'}`}>
					<div className="container">
						<div className="faq__wrapper">

							{!includeToCabinet ? <h1 className="faq_title">FAQ</h1> : false}
							<div className="faq__items">
								<a href="/faq/trading-platform/0/0" className="faq__item">
									<div className="faq__item-icon fa fa-bar-chart"/>
									<div className="faq__item-title">Торговая платформа</div>
								</a>

								<a href="/faq/deals/0/0" className="faq__item">
									<div className="faq__item-icon fa fa-line-chart"/>
									<div className="faq__item-title">Сделки</div>
								</a>

								<a href="/faq/trading-time/0/0" className="faq__item">
									<div className="faq__item-icon fa fa-bar-chart"/>
									<div className="faq__item-title">Торговое время</div>
								</a>

								<a href="/faq/profile/0/0" className="faq__item">
									<div className="faq__item-icon fa fa-user"/>
									<div className="faq__item-title">Профиль</div>
								</a>

								<a href="/faq/payments-increases/0/0" className="faq__item">
									<div className="faq__item-icon fa fa-money"/>
									<div className="faq__item-title">Платежи</div>
								</a>

								<a href="/faq/payments-outputs/0/0" className="faq__item">
									<div className="faq__item-icon fa fa-credit-card"/>
									<div className="faq__item-title">Выплаты</div>
								</a>

								<a href="/faq/processing-time/0/0" className="faq__item">
									<div className="faq__item-icon fa fa-file-text"/>
									<div className="faq__item-title">Время обработки заявки</div>
								</a>
							</div>
						</div>
					</div>


					{/*<div className="cards-list">
						<DivLink to="/faq/trading-platform/0/0" className="card">
							<div className="fa fa-bar-chart"/>
							<div className="title">Торговая платформа</div>
						</DivLink>
						<DivLink to="/faq/deals/0/0" className="card">
							<div className="fa fa-line-chart"/>
							<div className="title">Сделки</div>
						</DivLink>
						<DivLink to="/faq/trading-time/0/0" className="card">
							<div className="fa fa-clock-o"/>
							<div className="title">Торговое время</div>
						</DivLink>
						<DivLink to="/faq/profile/0/0" className="card">
							<div className="fa fa-user"/>
							<div className="title">Профиль</div>
						</DivLink>
						<DivLink to="/faq/payments-increases/0/0" className="card">
							<div className="fa fa-money"/>
							<div className="title">Платежи</div>
						</DivLink>
						<DivLink to="/faq/payments-outputs/0/0" className="card">
							<div className="fa fa-credit-card"/>
							<div className="title">Выплаты</div>
						</DivLink>
						<DivLink to="/faq/processing-time/0/0" className="card">
							<div className="fa fa-file-text"/>
							<div className="title">Время обработки заявки</div>
						</DivLink>
					</div>*/}

				</section>

				{!includeToCabinet ? <Footer /> : false}

			</div>
		)
	}

}

export default FAQ;