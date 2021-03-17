import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { 
	output,
	getBalance
} from '../../../../actions/affiliatePayment'

class PaymentOutput extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			orderAmount: '',
			orderComment: '',
		};

		this.allowSend = false;
	}

	componentDidMount() {
		this.props.getBalance();
	}

	sendOutput() {
		let {
			orderAmount,
			orderComment,
		} = this.state;

		if(!this.allowSend) return false;

		this.setState({
			orderAmount: '',
			orderComment: '',
		});

		this.props.output({
			order_amount: +orderAmount,
			order_comment: orderComment
		});
	}

	render() {
		if(!this.props.affiliatePayment.isLoaded) return false;

		let { 
			balance,
			wallet_data,
			wallet_type_name,
			min_order_amount,
		} = this.props.affiliatePayment;

		let {
			orderAmount,
			orderComment
		} = this.state;

		this.allowSend = orderAmount > 0 &&
						 +orderAmount <= balance &&
						 +orderAmount >= min_order_amount;

		return (
			<div className="panel full">
				<div className="body">
					<div className="payment-output">

						<div className="form">
							<div className="form-group">
								<div className="title">
									Сумма вывода средств
								</div>
								<div className="input-group">
									<div className="icon">$</div>
									<input 
										type="number" 
										min={min_order_amount}
										step="1" 
										placeholder="Сумма"
										value={orderAmount}
										onChange={e => this.setState({orderAmount: e.target.value})}
									/>
								</div>
								<textarea 
									placeholder="Комментарий" 
									name="comment" 
									cols="50" 
									rows="10"
									maxLength={250}
									value={orderComment}
									onChange={e => this.setState({orderComment: e.target.value})}
								/>
								<button 
									className="btn send" 
									disabled={!this.allowSend ? 'disabled' : ''}
									onClick={() => this.sendOutput()}
								>Вывести</button>
							</div>
						</div>

						<div className="info">
							<div className="wallet">
								<div className="type">Метод платежа: {wallet_type_name}</div>
								<div className="data">Данные платежа: {wallet_data}</div>
							</div>
							<div className="balance">
								<div className="title">Доступные средства</div>
								<div className="price">{balance} $</div>
							</div>
							<p>Минимальная сумма вывода {min_order_amount} $</p>
							<p>Деньги спишутся со счета в момент отправки заявки</p>
							<p>Обработка заявки в течение 3-х рабочих дней</p>
							<p>Комиссия за вывод средств 0%</p>
						</div>
						
					</div>

				</div>
			</div>
		)
	}

}

PaymentOutput.propTypes = {
	affiliatePayment: PropTypes.object.isRequired,
	output: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	affiliatePayment: state.affiliatePayment
})

const mapDispatchToProps = (dispatch) => ({
	output: (data) => dispatch(output(data)),
	getBalance: (data) => dispatch(getBalance(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentOutput);