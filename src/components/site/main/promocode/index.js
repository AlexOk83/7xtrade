import React from 'react'
// import { NavLink } from 'react-router-dom'

class Promocode extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};

	}

	render() {

		return (
			<section className="promocode">
				<div className="promocode__wrapper">
					<div className="promocode__left">
						<div className="promocode__header">Промокод SXT100</div>
						<div className="promocode__body">
							Используй приветственный бонус на&nbsp;первое пополнение от 50$
						</div>
					</div>
					<div className="promocode__right">
						<img src="images/promocode_img.png"
							 alt="Используй приветственный бонус на первое пополнение от 50$"/>
					</div>
				</div>
			</section>
		)
	}

}

export default Promocode;