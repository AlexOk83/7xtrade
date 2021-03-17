import React from 'react'
import { NavLink } from 'react-router-dom'

class Steps extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};

	}

	render() {

		return (


			<section className="steps">
				<div className="container">
					<div className="steps__wrapper">
						<h2 className="steps__title">
							Начать торговлю за 3&nbsp;шага
						</h2>
						<ul className="steps__items">
							<li className="steps__item">
								<div className="steps__item-header">Регистрация</div>
								<div className="steps__item-body">
									Откройте счет, пройдя простую регистрацию,&nbsp;абсолютно бесплатно
								</div>
								<div className="steps__item-link">
									<NavLink to="/register">Открыть счет бесплатно →</NavLink>
								</div>
							</li>
							<li className="steps__item">
								<div className="steps__item-header">Практика</div>
								<div className="steps__item-body">
									Обучайтесь, используя демо-счет и&nbsp;полезные материалы
								</div>
								<div className="steps__item-link">
									<NavLink to="/education">Обучающие материалы →</NavLink>
								</div>
							</li>
							<li className="steps__item">
								<div className="steps__item-header">Торговля</div>
								<div className="steps__item-body">
									Ипользуйте приветственный бонус на&nbsp;первое пополнение
								</div>
								<div className="steps__item-link">
									<NavLink to="/terminal">Пополнить счет →</NavLink>
								</div>
							</li>
						</ul>
					</div>
				</div>



				{/*<div className="title">Начать торговлю за 3 шага</div>
				<div className="desc"></div>
				<div className="boxs">
					<div className="item">
						<div className="title">Регистрация</div>
						<div className="desc">
							Откройте счет, пройдя простую <br/>
							регистрацию, абсолютно бесплатно <br/>
							<NavLink to="/register">Открыть счет бесплатно →</NavLink>
						</div>
					</div>
					<div className="item">
						<div className="title">Практика</div>
						<div className="desc">
							Обучайтесь, используя  демо-счет <br/>
							и полезные материалы <br/>
							<NavLink to="/education">Обучающие материалы →</NavLink>
						</div>
					</div>
					<div className="item">
						<div className="title">Торговля</div>
						<div className="desc">
							Ипользуйте приветственный бонус <br/>
							на первое пополнение <br/>
							<NavLink to="/terminal">Начать торговать →</NavLink>
						</div>
					</div>
				</div>*/}
			</section>
		)
	}

}

export default Steps;