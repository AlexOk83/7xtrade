import React from 'react'

class SmartPeopleEarnMoney extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};

	}

	render() {

		return (
			<div className="section smart-people-earn-money">
				<div className="title">Умные зарабатывают с нами</div>
				<div className="desc"></div>
				<div className="boxs">
					<div className="box">
						<div className="title">65%</div>
						<div className="desc">
							Получайте стабильный доход 
							в виде процента от дохода 
							платформы с каждого активного пользователя
						</div>
					</div>
					<div className="box">
						<div className="title">CPA</div>
						<div className="desc">
							Получайте от $50 за каждого активного клиента
						</div>
					</div>
				</div>
			</div>
		)
	}

}

export default SmartPeopleEarnMoney;