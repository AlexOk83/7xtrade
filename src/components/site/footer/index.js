import React from 'react'
import { connect } from 'react-redux'
//import config from '../../../config'
import { NavLink } from 'react-router-dom'

import './index.scss'

class Footer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};

	}

	render() {
		let year = (new Date()).getFullYear();


		return (
			<footer className="footer">

				<div className="footer__top">
					<div className="container">
						<div className="footer__top-cover">
							<div className="footer__top-title">Инвестируйте в криптовалюту получайте&nbsp;доход</div>
							<div className="footer__top-cta">
								<NavLink className="btn btn_blue footer_cta_btn" to="/login">Открыть реальный счет →</NavLink>
							</div>
						</div>
					</div>
				</div>
				<div className="footer__bot">
					<div className="container">
						<div className="footer__bot-cover">
							<div className="footer_row footer__bot-title">
								<div className="footer__logo">
									<NavLink to="/">
										<img src="/images/logo_bot.png" alt="логотип 7xtrade.com"/>
									</NavLink>
								</div>

								<div className="footer__social">
									<a href="#" className="footer__social-fb"></a>
									<a href="https://vk.com/7xtrade" target="_blank" className="footer__social-vk"></a>
								</div>
							</div>
							<div className="footer_row footer__bot-nav">
								<div className="nav_col">
									<div className="menu_bot-title">Партнерская программа</div>
									<ul className="menu_bot">
										<li>
											<NavLink to="/affiliate">Регистрация</NavLink>
										</li>
									</ul>
								</div>
								<div className="nav_col">
									<div className="menu_bot-title">FAQ</div>
									<ul className="menu_bot">
										<li><NavLink to="/faq">Основные вопросы</NavLink></li>
										<li><NavLink to="/faq">Финансовые вопросы</NavLink></li>
										<li><NavLink to="/faq">Верефикация</NavLink></li>
									</ul>
								</div>
								<div className="nav_col">
									<div className="menu_bot-title">О нас</div>
									<ul className="menu_bot">
										<li>
											<NavLink to="/about">Основная информация</NavLink>
										</li>
									</ul>
								</div>
								<div className="nav_col">
									<ul className="menu_bot privacy">
										<li>
											<NavLink to="#">Политика приватности
												Пользовательское соглашение</NavLink>
										</li>
									</ul>
								</div>
							</div>
							<div className="footer_row footer__bot-info">
								<div className="info">
									<p>Адрес 7Xtrade LTD: Suite 1, Second Floor, Sound & Vision House, Francis Rachel
										Str.,
										Victoria, Mahe, Seychelles ID: 221042
									</p>
									<p>7Xtade Limited регулируется ЦРОФР </p>
									<p>Услуги данного вебсайта недоступны в ряде стран, включая США, Канаду, Гонконг,
										Японию, а
										также для лиц моложе 18 лет.
									</p>
									<p>Предупреждение о рисках: торговля на Digital Trading и с использованием заемных
										финансовых
										инструментов сопряжена со значительным риском и может привести к
										потере вашего инвестированного капитала. Вы не должны инвестировать больше, чем
										можете
										позволить себе потерять, и должны осознавать все связанные с этим риски.
										Торговля с использованием заемных средств не подходит для всех инвесторов.
										Торговля
										продуктами без привлечения заемных средств, такими как акции, также
										сопряжена с риском, поскольку стоимость акции может как падать, так и расти, что
										может
										означать что вы можете получить меньше средств даже в случае выйгрыша, чем
										вы изначально вложили. Успешные результаты в прошлом не являются гарантией
										будущих
										результатов. Перед торговлей, пожалуйста, примите во внимание ваш уровень
										опыта, инвестиционные цели и, при необходимости, обратитесь за независимой
										финансовой
										консультацией. Клиент обязан выяснить, разрешено ли ему / ей пользоваться
										услугами бренда 7XTRADE на основании требований законодательства страны его
										проживания.
									</p>
									<p>Copyright © 2021 <span>7XTRADE</span>. Все права защищены</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*<div className="ledge">
					<div className="content">
						<div className="title">
							Инвестируйте в криптовалюты <br/>
							и получайте доход
						</div>
						<NavLink className="btn btn-blue" to="/login">Начать торговать →</NavLink>
					</div>
					<div className="img"/>
					<img src="/img/site/footer-ledge.png" alt=""/>
				</div>*/}
				{/*<div className="row">
					<div className="row images">
						<img className="logo" src="/img/site/footer-logo.png" alt=""/>
						<div className="right">
							<img className="fb" src="/img/footer-fb.png" alt=""/>
							<img className="vk" src="/img/footer-vk.png" alt=""/>
						</div>
					</div>
					<div className="row links">
						<div>
							<NavLink exact to="/">Главная</NavLink>
							<NavLink to="/about">О нас</NavLink>
						</div>
						<div>
							<NavLink to="/education">Обучение</NavLink>
							<NavLink to="/faq">FAQ</NavLink>
						</div>
						<div>
							<a href="/docs/client-agreement.pdf">Клиентское соглашение</a>
							<a href="/docs/privacy-policy.pdf">Конфиденциальность</a>
						</div>
					</div>
				</div>*/}
				{/*<div className="row">
					<div className="line" />
					<div className="desc">
						Адрес Awesomo LTD: № 25595 BC 2019, Suite 305, Eagle Star House, Theklas Lysioti 
						<br/><br/>
						Awesomo Limited регулируется ЦРОФР (Лицензия номер TSRF RU 0395 AA V0161). 
						<br/><br/>
						Услуги данного вебсайта недоступны в ряде стран, включая США, Канаду, Гонконг, Японию, а также для лиц моложе 18 лет.
						<br/><br/>
						Предупреждение о рисках: торговля на Digital Trading и с использованием заемных финансовых инструментов сопряжена со значительным риском и может привести к
						 потере вашего инвестированного капитала. Вы не должны инвестировать больше, чем можете позволить себе потерять, и должны осознавать все связанные с этим риски. 
						<br/>
						Торговля с использованием заемных средств не подходит для всех инвесторов. Торговля продуктами без привлечения заемных средств, такими как акции, также 
						сопряжена с риском, поскольку стоимость акции может как падать, так и расти, что может означать что вы можете получить меньше средств даже в случае выйгрыша, чем
						 вы изначально вложили. Успешные результаты в прошлом не являются гарантией будущих результатов. Перед торговлей, пожалуйста, примите во внимание ваш уровень
						 опыта, инвестиционные цели и, при необходимости, обратитесь за независимой финансовой консультацией. Клиент обязан выяснить, разрешено ли ему / ей пользоваться 
						услугами бренда {this.props.app.name} на основании требований законодательства страны его проживания.
						<br/><br/>
						Copyright © {year} {this.props.app.name}. Все права защищены
					</div>
					<div className="column">
						<div className="contacts-cell">
							{this.props.app.domain}
						</div>
						<div className="contacts-cell">
							1 Manhattan Plaza, New York, USA
						</div>
						<div className="copyright">
							© 2012-2021
						</div>
					</div>
				</div>*/}
			</footer>
		)
	}

}

const mapStateToProps = (state) => ({
	app: state.app
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Footer);