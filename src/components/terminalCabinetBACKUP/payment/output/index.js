import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { 
	output,
	getBalance
} from '../../../../actions/payment'

class PaymentOutput extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			cardNumber: '',
			cardHolder: '',
			orderAmount: '',
		};

		this.allowSend = false;
	}

	componentDidMount() {
		this.props.getBalance();
	}

	sendOutput() {
		let {
			cardNumber,
			cardHolder,
			orderAmount,
		} = this.state;

		if(!this.allowSend) return false;

		this.setState({
			cardNumber: '',
			cardHolder: '',
			orderAmount: ''
		});

		this.props.output({
			card_number: cardNumber,
			card_holder: cardHolder,
			order_amount: orderAmount
		});
	}

	render() {
		if(!this.props.payment) return false;

		let { 
			balance,
			min_order_amount
		} = this.props.payment;
		let {
			cardNumber,
			cardHolder,
			orderAmount,
		} = this.state;

		this.allowSend = cardNumber.length && 
						 cardHolder.length && 
						 +orderAmount <= balance &&
						 +orderAmount >= min_order_amount;

		return (
			<div className="increase row">
				<div className="column">
					<div className="head">Детали платежа</div>
					<div className="body">

						<div className="field">
							<div className="title">Платежная система</div>
							<input 
								type="text" 
								defaultValue="Visa / Mastercard"
								disabled="disabled"
							/>
						</div>

						<div className="field">
							<div className="title">Номер карты</div>
							<input 
								type="text" 
								defaultValue={cardNumber}
								onChange={e => this.setState({cardNumber: e.target.value})}
							/>
						</div>

						<div className="field">
							<div className="title">Владелец карты</div>
							<input 
								type="text" 
								defaultValue={cardHolder}
								onChange={e => this.setState({cardHolder: e.target.value})}
							/>
						</div>

						<div className="field">
							<div className="title">Сумма вывода средств</div>
							<input 
								type="number" 
								min={min_order_amount}
								step="1" 
								placeholder="Сумма"
								value={orderAmount}
								onChange={e => this.setState({orderAmount: e.target.value})}
							/>
							<div className="addon icon">$</div>
						</div>

						<div className="desc">Деньги спишутся со счета в момент отправки заявки</div>
						<div className="desc">Обработка заявки в течение 3-х рабочих дней</div>
						<div className="desc">Может взиматься комиссия за вывод средств</div>
					</div>
				</div>

				<div className="column small info-blocks">
					<div className="body">

						<div className="info-block">
							<div className="title">Доступные средства</div>
							<div className="value">{balance} $</div>
						</div>

						<div className="info-block">
							<div className="title">Минимальная сумма вывода</div>
							<div className="value">{min_order_amount} $</div>
						</div>

						<button 
							className="btn btn-blue send" 
							disabled={!this.allowSend ? 'disabled' : ''}
							onClick={() => this.sendOutput()}
						>Вывести</button>

					</div>
				</div>

			</div>
		)
	}

}

PaymentOutput.propTypes = {
	payment: PropTypes.object.isRequired,
	output: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	payment: state.payment
})

const mapDispatchToProps = (dispatch) => ({
	output: (data) => dispatch(output(data)),
	getBalance: (data) => dispatch(getBalance(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentOutput);