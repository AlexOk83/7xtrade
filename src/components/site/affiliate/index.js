import React from 'react'
import Particles from 'react-particles-js'

import Footer from '../footer'
import Questions from './questions'
import ProgramType from './programType'
import Infographics from './infographics'
import HeaderAffiliate from './headerAffiliate'
import Auth from '../auth'
import SmartPeopleEarnMoney from './smartPeopleEarnMoney'

import './index.scss'
import AuthRegister from "../auth/register";

class Affiliate extends React.Component {

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
			viewAuth
		} = this.state;

		return (
			<section className="affiliate">
				<HeaderAffiliate
					viewAuth={viewAuth}
					openAuth={() => this.setState({viewAuth: !viewAuth})} 
				/>
				<div className="container">
					<div className="affiliate__wrapper">
						<div className="affiliate__left">
							<div className="affiliate__title">
								<h1 className="affiliate_h1">Самые доходные предложения для партнёров</h1>
							</div>
							<div className="affiliate__content">
								<div className="content__row">
									<div className="row__title">Комиссия от прибыли до 80%</div>
									<div className="row__content">
										Чем больше клиентов с первым депозитом вы привлекаете, тем выше размер комиссии.
									</div>
								</div>
							</div>
							<div className="affiliate__content">
								<div className="content__row">
									<div className="row__title">Еженедельные выплаты</div>
									<div className="row__content">
										По запросу в службу поддержки вы можете получать моментальные выплаты, не дожидаясь отчетного периода.
									</div>
								</div>
							</div>
							<div className="affiliate__content">
								<div className="content__row">
									<div className="row__title">Индивидуальная помощь</div>
									<div className="row__content">
										Наша команда поможет вам в продвижении на индивидуальной основе абсолютно
										бесплатно.
									</div>
								</div>
							</div>
							<div className="affiliate__content">
								<div className="content__row">
									<div className="row__title">Любые источники привлечения</div>
									<div className="row__content">
										Используйте любые источники трафика для привлечения клиентов, получая стабильный
										доход.
									</div>
								</div>
							</div>

						</div>
						<div className="affiliate__right">
							<AuthRegister />
						</div>
					</div>
				</div>

				{/*<div className="section home">
					<Particles
					    params={{
							"particles": {
								"number": {
									"value": 80
								}
							}
						}} 
					/>
					<div className="center">
						<div className="text">
							<h1 className="title">
								Самые
								<br/>
								выгодные
								<br/>
								комиссионные
							</h1>
							<h3 className="desc">
								Гибкие и выгодные программы
							</h3>
							<button className="btn-blue launch" onClick={() => this.setState({viewAuth: !viewAuth})}>
								Начать зарабатывать
							</button>
						</div>
						<img src="/img/site/home-logo.png" alt=""/>
					</div>
				</div>*/}

				{/*<Infographics />*/}
				{/*<SmartPeopleEarnMoney openAuth={() => this.setState({viewAuth: !viewAuth})} />*/}
				{/*<ProgramType />
				<Questions />*/}
				<Footer />

			</section>
		)
	}

}

export default Affiliate;