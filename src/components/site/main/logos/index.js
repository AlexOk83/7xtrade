import React from 'react'
// import { NavLink } from 'react-router-dom'

class Logos extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};

	}

	render() {

		return (
			<section className="logos">
				<div className="container">
					<div className="logos__wrapper">
						<ul>
							<li><img src="/images/company_icon_01.jpg" alt="логотип Тинькофф"/></li>
							<li><img src="/images/company_icon_02.jpg" alt="логотип TradingView"/></li>
							<li><img src="/images/company_icon_03.jpg" alt="логотип Binance"/></li>
							<li><img src="/images/company_icon_04.jpg" alt="логотип Nasdaq"/></li>
							<li><img src="/images/company_icon_05.jpg" alt="логотип Сбер"/></li>
							<li><img src="/images/company_icon_06.jpg" alt="логотип Chase"/></li>
						</ul>
					</div>
				</div>
			</section>
		)
	}

}

export default Logos;