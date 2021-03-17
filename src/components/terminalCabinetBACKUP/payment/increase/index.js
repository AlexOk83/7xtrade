import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { 
	increase,
	getIncreaseInfo
} from '../../../../actions/payment'
import { check } from '../../../../actions/promocodes'


class PaymentIncrease extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			orderAmount: 100,
			promocodeName: '',
		};
	}

	componentDidMount() {
		this.props.getIncreaseInfo()
	}

	createLinkPayment(value) {
		const { orderAmount } = this.state;

		const { promocode } = this.props.payment;

		this.props.increase({
			order_amount: orderAmount,
			promocode_id: promocode.id,
		});
	}

	promocodeCheck() {
		const { promocodeName } = this.state;

		this.props.check({
			promocode_name: promocodeName
		});
	}

	render() {
		const { 
			orderAmount,
			promocodeName,
		} = this.state;

		const { 
			url,
			promocode,
			min_increase_amount
		} = this.props.payment;

		if(url) {
			window.open(url, '_self');
			delete(this.props.payment.url);
		}

		let bonus = promocode.success ? +promocode.payment_bonus : 0;
		let result = +orderAmount + bonus;

		return (
			<div className="increase row">
				<div className="column">
					<div className="head">Детали платежа</div>
					<div className="body">

						<div className="field">
							<div className="title">Сумма пополнения</div>
							<input 
								type="number" 
								min={min_increase_amount}
								step="1"
								value={orderAmount}
								onChange={e => this.setState({orderAmount: e.target.value})}
							/>
							<div className="addon icon">$</div>
						</div>

						<div className="field-buttons">
							<button onClick={() => this.setState({orderAmount: 150})}>150 $</button>
							<button onClick={() => this.setState({orderAmount: 200})}>200 $</button>
							<button onClick={() => this.setState({orderAmount: 300})}>300 $</button>
							<button onClick={() => this.setState({orderAmount: 500})}>500 $</button>
						</div>

						<div className="field">
							<div className="title">Промо-код</div>
							<input 
								type="text" 
								defaultValue={promocodeName}
								onChange={e => this.setState({promocodeName: e.target.value})}
							/>
							<div 
								className="addon link" 
								onClick={() => this.promocodeCheck()}
							>Применить</div>
						</div>

						<div className="desc">Минимальная сумма пополнения {min_increase_amount} $</div>
					</div>
				</div>

				<div className="column small info-blocks">
					<div className="body">

						<div className="info-block">
							<div className="title">Бонус</div>
							<div className="value">{bonus} $</div>
						</div>

						<div className="info-block">
							<div className="title">Итого</div>
							<div className="value">{result} $</div>
						</div>

						<button 
							className="btn btn-blue" 
							onClick={() => this.createLinkPayment()}
							disabled={+orderAmount < min_increase_amount ? 'disabled' : ''}
						>Пополнить</button>

					</div>
				</div>

			</div>
		)
	}

}

PaymentIncrease.propTypes = {
	payment: PropTypes.object.isRequired,
	increase: PropTypes.func.isRequired,
	check: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	payment: state.payment
})

const mapDispatchToProps = (dispatch) => ({
	check: (data) => dispatch(check(data)),
	increase: (data) => dispatch(increase(data)),
	getIncreaseInfo: (data) => dispatch(getIncreaseInfo(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentIncrease);