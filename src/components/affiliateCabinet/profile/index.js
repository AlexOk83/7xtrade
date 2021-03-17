import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { 
	changePassword,
	getProfileInfo,
	changeWalletInfo,
	changeProfileInfo
} from '../../../actions/affiliateProfile'

import './index.scss'

class Profile extends React.Component {

	constructor(props) {
		super(props);

		let { url } = props.match.params;

		this.state = {
			name: '',
			city: '',
			surname: '',
			country: '',
			wallet_data: '',
			wallet_type_id: 0,

			url: url,
			tabIndex: 0,
			isLoaded: false,

			editPassword: false,
			editWalletInfo: false,
			editProfileInfo: false,

			password: '',
			oldPassword: '',
			confirmPassword: ''
		};
	}

	componentDidMount() {
		this.props.getProfileInfo();
	}

	componentDidUpdate() {

		if(!this.state.isLoaded && !this.props.affiliate.loading) {
			let {
				name,
				city,
				surname,
				country,
				wallet_data,
				wallet_type_id,
			} = this.props.affiliate;

			this.setState({
				name: name,
				city: city,
				surname: surname,
				country: country,
				wallet_data: wallet_data,
				wallet_type_id: wallet_type_id ? wallet_type_id : 0,
				isLoaded: true
			});
		}


		if(this.props.affiliate.editProfileInfo) {
			if(this.state.editProfileInfo && this.props.affiliate.editProfileInfo.success) {
				let {
					name,
					city,
					surname,
					country,
				} = this.state;

				this.props.affiliate.name = name;
				this.props.affiliate.city = city;
				this.props.affiliate.surname = surname;
				this.props.affiliate.country = country;

				delete(this.props.affiliate.editProfileInfo);
				this.setState({editProfileInfo: false});
			}
		}

		if(this.props.affiliate.editWalletInfo) {
			if(this.state.editWalletInfo && this.props.affiliate.editWalletInfo.success) {
				let {
					wallet_data
				} = this.state;

				this.props.affiliate.wallet_data = wallet_data;

				delete(this.props.affiliate.editWalletInfo);
				this.setState({editWalletInfo: false});
			}
		}

		if(this.props.affiliate.changePassword) {
			if(this.props.affiliate.changePassword.success) delete(this.props.affiliate.changePassword);
		}
	}

	changeField(e) {
		let { name, value } = e.target;

		this.setState({[name]: value});
	}

	render() {
		if(!this.state.isLoaded || !this.props.affiliate) return false;

		let {
			url,
			name,
			surname,
			country,
			wallet_data,
			wallet_type_id,

			tabIndex,
			editProfileInfo,

			password,
			oldPassword,
			confirmPassword
		} = this.state;

		let {
			email,
			dollars
		} = this.props.affiliate;

		let emptyTextProfile = !editProfileInfo ? '—' : '';

		name = name ? name : emptyTextProfile;
		email = email ? email : emptyTextProfile;
		surname = surname ? surname : emptyTextProfile;
		country = country ? country : emptyTextProfile;

		let walletDollars = dollars.toFixed(2);

		let allowChangePassword = password && oldPassword && confirmPassword;

		return (
			<div className="affiliate-profile">

				<Tabs 
					selectedIndex={tabIndex} 
					onSelect={tabIndex => this.setState({tabIndex})}
				>
					<TabList style={{display: 'none'}}>
						<Tab>
							<Link to={`${url}/info`}>
								Информация
							</Link>
						</Tab>
{/*						<Tab>
							<Link to={`${url}/personal-data`}>
								Персональные данные
							</Link>
						</Tab>
						<Tab>
							<Link to={`${url}/security`}>
								Безопасность
							</Link>
						</Tab>*/}
					</TabList>
							
					<TabPanel>
						<div className="column left">
							<div className="panel personal-data">
								<div className="head">Персональные данные</div>
								<div className="body">
									<div className="row">
										<div className="name">
											<span>Email</span>
										</div>
										<div className="value">{email}</div>
									</div>
									<div className="row">
										<div className="name">
											<span>Имя</span>
										</div>
										{!editProfileInfo ? <div className="value">{name}</div> : false}
										{editProfileInfo ?
											<input 
												name="name" 
												className="value" 
												defaultValue={name} 
												onChange={e => this.changeField(e)}
											/>
										: false}
									</div>
									<div className="row">
										<div className="name">
											<span>Фамилия</span>
										</div>
										{!editProfileInfo ? <div className="value">{surname}</div> : false}
										{editProfileInfo ?
											<input 
												name="surname" 
												className="value" 
												defaultValue={surname} 
												onChange={e => this.changeField(e)}
											/>
										: false}
									</div>
									<div className="row">
										<div className="name">
											<span>Страна</span>
										</div>
										{!editProfileInfo ? <div className="value">{country}</div> : false}
										{editProfileInfo ?
											<input 
												name="country" 
												className="value" 
												defaultValue={country} 
												onChange={e => this.changeField(e)}
											/>
										: false}
									</div>
									{!editProfileInfo ? 
										<button className="btn-action" onClick={() => this.setState({editProfileInfo: true})}>
											Редактировать
										</button>
									: false}
									{editProfileInfo ?
										<div className="row-action">
											<button className="btn-action cancel" onClick={() => this.setState({editProfileInfo: !editProfileInfo})}>
												Отмена
											</button>
											<button className="btn-action ok" onClick={() => this.changeProfileInfo()}>
												Сохранить
											</button>
										</div>
									: false}
								</div>
							</div>

							<div className="panel change-password">
								<div className="head">Смена пароля</div>
								<div className="body">
									<div className="row">
										<div className="name">
											<span>Старый пароль</span>
										</div>
										<input 
											name="oldPassword" 
											type="password"
											className="value" 
											defaultValue={oldPassword} 
											onChange={e => this.changeField(e)}
										/>
									</div>
									<div className="row">
										<div className="name">
											<span>Новый пароль</span>
										</div>
										<input 
											name="password" 
											type="password"
											className="value" 
											defaultValue={password} 
											onChange={e => this.changeField(e)}
										/>
									</div>
									<div className="row">
										<div className="name">
											<span>Повтор нового пароля</span>
										</div>
										<input 
											name="confirmPassword" 
											type="password"
											className="value" 
											defaultValue={confirmPassword} 
											onChange={e => this.changeField(e)}
										/>
									</div>
									<button 
										className="btn-action ok" 
										onClick={() => allowChangePassword ? this.changePassword() : false}
										disabled={allowChangePassword ? '' : 'disabled'}>
										<div className="text">Сменить пароль</div>
									</button>
								</div>
							</div>
						</div>

						<div className="column right">
							<div className="row box box-1">
								<div className="panel center">
									<div className="body row">
										<div className="media">
											<div className="name">
												<span>Баланс</span>
											</div>
											<div className="value">{walletDollars} $</div>
										</div>
										<div className="fa fa-money icon"/>
									</div>
								</div>

								{/*<div className="panel">
									<div className="body row">
										<div className="media">
											<div className="name">
												<span>Суммарная прибыль</span>
											</div>
											<div className="value">{`?`} $</div>
										</div>
										<div className="fa fa-money icon"/>
									</div>
								</div>*/}
							</div>

							{/*<div className="row box box-2">
								<div className="panel">
									<div className="body row">
										<div className="media">
											<div className="name">
												<span>Сумма к выплате</span>
											</div>
											<div className="value">{`?`} $</div>
										</div>
										<div className="fa fa-clock-o icon"/>
									</div>
								</div>

								<div className="panel">
									<div className="body row">
										<div className="media">
											<div className="name">
												<span>Выплачено</span>
											</div>
											<div className="value">{`?`} $</div>
										</div>
										<div className="fa fa-credit-card icon"/>
									</div>
								</div>
							</div>*/}

							<div className="panel wallets">
								<div className="head">Настройка выплат</div>
								<div className="body">
									<div className="row">
										<div className="name">
											<span>Метод платежа</span>
										</div>
										<select value={wallet_type_id} onChange={e => this.setState({wallet_type_id: e.target.value})}>
	        								<option value={0} disabled>Выберите кошелек</option>
											{this.walletList()}
										</select>
									</div>
									<div className="row">
										<div className="name">
											<span>Данные платежа</span>
										</div>
										<input 
											name="wallet_data" 
											className="value" 
											defaultValue={wallet_data} 
											onChange={e => this.changeField(e)}
											placeholder="Номер счета или телефона"
										/>
									</div>
									<div className="row-action">
										<button className="btn-action" onClick={() => this.changeWalletInfo()}>
											Сохранить
										</button>
									</div>
								</div>
							</div>
						</div>

					</TabPanel>
				</Tabs>

			</div>
		)
	}

	walletList() {
		let { wallet_types } = this.props.affiliate;

		if(!wallet_types) return false;

		let readyList = wallet_types.map((item, key) => {
			return ( <option key={key} value={item.id}>{item.name}</option> );
		});

		return readyList;
	}

	changeProfileInfo() {
		const {
			name,
			city,
			surname,
			country,
		} = this.state;

		this.props.changeProfileInfo({
			name: name,
			city: city,
			surname: surname,
			country: country
		})
	}

	changeWalletInfo() {
		const { 
			wallet_data,
			wallet_type_id
		} = this.state;

		this.props.changeWalletInfo({
			wallet_data: wallet_data,
			wallet_type_id: wallet_type_id
		})
	}

	changePassword() {
		const {
			password,
			oldPassword,
			confirmPassword
		} = this.state;

		this.props.changePassword({
			password: password,
			old_password: oldPassword,
			confirm_password: confirmPassword
		});
	}

}

Profile.propTypes = {
	affiliate: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	affiliate: state.affiliate,
})

const mapDispatchToProps = (dispatch) => ({
	changePassword: (data) => dispatch(changePassword(data)),
	getProfileInfo: (data) => dispatch(getProfileInfo(data)),
	changeWalletInfo: (data) => dispatch(changeWalletInfo(data)),
	changeProfileInfo: (data) => dispatch(changeProfileInfo(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);