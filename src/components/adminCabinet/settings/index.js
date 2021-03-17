import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { 
	getInfo,
	updateInfo
} from '../../../actions/adminSettings'

import './index.scss'

class AdminSettings extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			loaded: false
		};
	}

	componentDidMount() {
		this.props.getInfo();
	}

	componentDidUpdate() {
		if(!this.state.loaded && this.props.adminSettings.isLoaded) {
			let {
				name,
				//domain,
				mail_name,
				mail_host,
				merchant_id,
				mail_username,
				mail_password,
				min_order_amount,
				max_virtual_dollars,
				merchant_secret_word,
				min_affiliate_order_amount
			} = this.props.adminSettings;

			this.setState({
				loaded: true,
				name: name,
				//domain: domain,
				mail_name: mail_name,
				mail_host: mail_host,
				merchant_id: merchant_id,
				mail_username: mail_username,
				mail_password: mail_password,
				min_order_amount: min_order_amount,
				max_virtual_dollars: max_virtual_dollars,
				merchant_secret_word: merchant_secret_word,
				min_affiliate_order_amount: min_affiliate_order_amount
			})
		}
	}

	render() {
		if(!this.props.adminSettings.isLoaded && !this.state.loaded) return false;

		let {
			name,
			//domain,
			mail_name,
			mail_host,
			merchant_id,
			mail_username,
			mail_password,
			min_order_amount,
			max_virtual_dollars,
			merchant_secret_word,
			min_affiliate_order_amount
		} = this.props.adminSettings;

		return (
			<div className="admin-settings">
				<div className="panel personal-data">
					<div className="body">
						<div className="field">
							<div className="name">
								<span>Название</span>
							</div>
							<input 
								name="name" 
								className="value" 
								defaultValue={name} 
								onChange={e => this.changeField(e)}
							/>
						</div>

						{/*<div className="field">
							<div className="name">
								<span>Домен</span>
							</div>
							<input 
								name="domain" 
								className="value" 
								defaultValue={domain} 
								onChange={e => this.changeField(e)}
							/>
						</div>*/}

						<div className="field">
							<div className="name">
								<span>Минимальная сумма для вывода игрокам</span>
							</div>
							<input 
								name="min_order_amount" 
								className="value" 
								defaultValue={min_order_amount} 
								onChange={e => this.changeField(e)}
							/>
						</div>

						<div className="field">
							<div className="name">
								<span>Минимальная сумма для вывода партнерам</span>
							</div>
							<input 
								name="min_affiliate_order_amount" 
								className="value" 
								defaultValue={min_affiliate_order_amount} 
								onChange={e => this.changeField(e)}
							/>
						</div>

						<div className="field">
							<div className="name">
								<span>Баланс виртуального счета</span>
							</div>
							<input 
								name="max_virtual_dollars" 
								className="value" 
								defaultValue={max_virtual_dollars} 
								onChange={e => this.changeField(e)}
							/>
						</div>

						<div className="field">
							<div className="name">
								<span>ID магазина на free-kassa</span>
							</div>
							<input 
								name="merchant_id" 
								className="value" 
								defaultValue={merchant_id} 
								onChange={e => this.changeField(e)}
							/>
						</div>

						<div className="field">
							<div className="name">
								<span>Секретный ключ магазина на free-kassa</span>
							</div>
							<input 
								name="merchant_secret_word" 
								className="value" 
								defaultValue={merchant_secret_word} 
								onChange={e => this.changeField(e)}
							/>
						</div>

						<div className="field">
							<div className="name">
								<span>Почтовый SMTP сервер</span>
							</div>
							<input 
								name="mail_host" 
								className="value" 
								defaultValue={mail_host} 
								onChange={e => this.changeField(e)}
							/>
						</div>

						<div className="field">
							<div className="name">
								<span>Адрес почты для общения с пользователями</span>
							</div>
							<input 
								name="mail_name" 
								className="value" 
								defaultValue={mail_name} 
								onChange={e => this.changeField(e)}
							/>
						</div>

						<div className="field">
							<div className="name">
								<span>Адрес почты для отправки писем</span>
							</div>
							<input 
								name="mail_username" 
								className="value" 
								defaultValue={mail_username} 
								onChange={e => this.changeField(e)}
							/>
						</div>

						<div className="field">
							<div className="name">
								<span>Пароль почты для отправки писем</span>
							</div>
							<input 
								name="mail_password" 
								className="value" 
								defaultValue={mail_password} 
								onChange={e => this.changeField(e)}
							/>
						</div>

						<div className="row-action">
							<button className="btn-action" onClick={() => this.sendData()}>
								Сохранить
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}

	changeField(e) {
		let { name, value } = e.target;

		this.setState({[name]: value});
	}

	sendData() {
		let {
			name,
			//domain,
			mail_name,
			mail_host,
			merchant_id,
			mail_username,
			mail_password,
			min_order_amount,
			max_virtual_dollars,
			merchant_secret_word,
			min_affiliate_order_amount
		} = this.state;

		this.props.updateInfo({
			name: name,
			//domain: domain,
			mail_name: mail_name,
			mail_host: mail_host,
			merchant_id: merchant_id,
			mail_username: mail_username,
			mail_password: mail_password,
			min_order_amount: min_order_amount,
			max_virtual_dollars: max_virtual_dollars,
			merchant_secret_word: merchant_secret_word,
			min_affiliate_order_amount: min_affiliate_order_amount
		});
	}

}

AdminSettings.propTypes = {
	adminSettings: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	adminSettings: state.adminSettings,
})

const mapDispatchToProps = (dispatch) => ({
	getInfo: (data) => dispatch(getInfo(data)),
	updateInfo: (data) => dispatch(updateInfo(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminSettings);