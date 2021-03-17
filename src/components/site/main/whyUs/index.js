import React from 'react'

class WhyUs extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};

	}

	render() {

		return (
			<section className="why-us">
				{/*<div className="title">Почему мы?</div>*/}
				{/*<div className="desc"></div>*/}

				<div className="container">
					<div className="advantages__wrapper">
						<ul className="advantages__items">
							<li className="advantages__item">
								<div className="item_left">
									<img src="/icons/icon_indicators.png" alt="Торговые Индикаторы"/>
								</div>
								<div className="item_right">
									<div className="steps__item-title">Торговые Индикаторы</div>
									<div className="steps__item-desc">
										Работайте с лучшими инструментами, анализируя рынок эффективнее
									</div>
								</div>
							</li>
							<li className="advantages__item">
								<div className="item_left">
									<img src="/icons/icon_profit.png" alt="Высокая доходность"/>
								</div>
								<div className="item_right">
									<div className="steps__item-title">Высокая доходность</div>
									<div className="steps__item-desc">
										Доходность по некоторым активам достигает 90%
									</div>
								</div>
							</li>
							<li className="advantages__item">
								<div className="item_left">
									<img src="/icons/icon_safety.png" alt="Безопасность капитала"/>
								</div>
								<div className="item_right">
									<div className="steps__item-title">Безопасность капитала</div>
									<div className="steps__item-desc">
										Информация о транзакциях и надежная защита средств
									</div>
								</div>
							</li>
							<li className="advantages__item">
								<div className="item_left">
									<img src="/icons/icon_min.png" alt="Мин. пополнение 10$"/>
								</div>
								<div className="item_right">
									<div className="steps__item-title">Мин. пополнение 10$</div>
									<div className="steps__item-desc">
										Комфортный старт без крупных вложений уже сейчас
									</div>
								</div>
							</li>
							<li className="advantages__item">
								<div className="item_left">
									<img src="/icons/icon_out.png" alt="Вывод Средств"/>
								</div>
								<div className="item_right">
									<div className="steps__item-title">Вывод Средств</div>
									<div className="steps__item-desc">
										Оперативный вывод средств в течении суток без комиссии
									</div>
								</div>
							</li>
							<li className="advantages__item">
								<div className="item_left">
									<img src="/icons/icon_tech.png" alt="Технологичная платформа"/>
								</div>
								<div className="item_right">
									<div className="steps__item-title">Технологичная платформа</div>
									<div className="steps__item-desc">
										Наша платформа работает на самых современных технологиях
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>

				{/*<div className="boxs">
					<div className="items-box">
						<div className="item">
							<img src="/img/site/whyus-1.png" alt=""/>
							<div className="content">
								<div className="title">Торговые Индикаторы</div>
								<div className="desc">Работайте с лучшими инструментами, анализируя рынок эффективнее</div>
							</div>
						</div>
						<div className="item">
							<img src="/img/site/whyus-2.png" alt=""/>
							<div className="content">
								<div className="title">Высокая доходность</div>
								<div className="desc">Доходность по некоторым активам достигает 90%</div>
							</div>
						</div>
						<div className="item">
							<img src="/img/site/whyus-3.png" alt=""/>
							<div className="content">
								<div className="title">Безопасность капитала</div>
								<div className="desc">Информация о транзакциях и надежная защита средств</div>
							</div>
						</div>
						<div className="item">
							<img src="/img/site/whyus-4.png" alt=""/>
							<div className="content">
								<div className="title">Мин. пополнение 10$</div>
								<div className="desc">Комфортный старт без крупных вложений уже сейчас</div>
							</div>
						</div>
						<div className="item">
							<img src="/img/site/whyus-5.png" alt=""/>
							<div className="content">
								<div className="title">Вывод Средств</div>
								<div className="desc">Оперативный вывод средств в течении суток без комиссии</div>
							</div>
						</div>
						<div className="item">
							<img src="/img/site/whyus-6.png" alt=""/>
							<div className="content">
								<div className="title">Технологичная платформа</div>
								<div className="desc">Наша платформа работает на самых современных технологиях</div>
							</div>
						</div>
					</div>
				</div>*/}
			</section>
		)
	}

}

export default WhyUs;