import React from 'react'
import Popup from 'reactjs-popup'
import PropTypes from 'prop-types'
//import Chart from 'react-apexcharts'
import { connect } from 'react-redux'
//import { Link } from 'react-router-dom'

import { 
	userDelete,
	changePassword,
	getProfileInfo,
	changeProfileInfo
} from '../../../actions/profile'
import { logout } from '../../../actions/authLogout'

import './index.scss'

class Profile extends React.Component {

	constructor(props) {
		super(props);

		this.state = {

		};
	}

	componentDidMount() {
		this.props.getProfileInfo();
	}

	componentDidUpdate() {

	}

	changeField(e) {
		let { name, value } = e.target;

		this.setState({[name]: value});
	}

	render() {
		if(!this.props.profile.email || !document.querySelector('.content')) return false;

		let {
			password,
			oldPassword,
			confirmPassword
		} = this.state;

		let {
			city,
			name,
			//email,
			country,
			surname,
			max_loss,
			min_loss,
			max_income,
			min_income,
			count_deals,
			count_deals_win,
			count_deals_loss,
			count_deals_draw,
		} = this.props.profile;

		count_deals_win = count_deals_win ? count_deals_win : 0;
		count_deals_loss = count_deals_loss ? count_deals_loss : 0;
		count_deals_draw = count_deals_draw ? count_deals_draw : 0;
		count_deals = count_deals ? count_deals : 0;

		max_loss = max_loss < 0 ? max_loss * -1 : max_loss;
		min_loss = min_loss < 0 ? min_loss * -1 : min_loss;

		let allowChangePassword = password && oldPassword && confirmPassword;

		//let contentWidth = document.querySelector('.content').clientWidth;
		//let apexWidth = window.innerWidth > 768 ? (contentWidth / 2) - (10 / 100 * (contentWidth / 2)) : contentWidth - 20;

		return (
			<div className="profile">

				{/*<div className="row">
					<div className="column">
						<div className="head">Сделки</div>
						<div className="body apexcharts">
							<Chart 
								options={{
						              labels: ['Сделок с прибылью', 'Сделок с убытком', 'Сделок с возвратом'],
						            }} 
								series={[count_deals_win, count_deals_loss, count_deals_draw]} 
	      						type="donut" 
	      						width={apexWidth} 
	      						height={300} 
	      					/>
	      					<div className="count-deals">
	      						<div className="row">
									<div className="title">Всего сделок</div>
									<div className="value">{count_deals}</div>
								</div>
								<Link to={`/cabinet/history-deals`}>Список всех сделок →</Link>
							</div>
	      				</div>
					</div>

					<div className="column">
						<div className="head">Рекорды</div>
						<div className="body">
							<Chart 
								options={{
								chart: {
					                type: 'bar',
					                height: 380
					              },
					              plotOptions: {
					                bar: {
					                  barHeight: '100%',
					                  distributed: false,
					                  horizontal: false,
					                  dataLabels: {
					                    position: 'bottom'
					                  },
					                }
					              },
					              colors: [
					              	'#00e333', 
					              	'#be050a',
					              ],
					              dataLabels: {
					                enabled: true,
					                textAnchor: 'start',
					                style: {
					                  colors: ['#fff']
					                },
					                formatter: function (val, opt) {
					                  return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
					                },
					                offsetX: -20,
					                dropShadow: {
					                  enabled: true
					                }
					              },
					              stroke: {
					                width: 1,
					                colors: ['#fff']
					              },
					              xaxis: {
					                categories: [
					                	'Доход',
					                	'Убыток',
					                ],
					              },
					              tooltip: {
					                theme: 'dark',
					                x: {
					                  show: false
					                },
					                y: {
					                  title: {
					                    formatter: function () {
					                      return ''
					                    }
					                  }
					                }
					              }
					              }}
								series={[{
									name: 'Максимально',
					            	data: [+max_income, +max_loss]
					            }, {
					            	name: 'Минимально',
					            	data: [+min_income, +min_loss]
					            }]}
	      						type="bar" 
	      						width={apexWidth} 
	      						height={300} 
	      					/>
	      				</div>
					</div>
				</div>*/}

				<div className="row">
					<div className="column">
						<div className="head">Персональные данные</div>
						<div className="body">
							<div className="field">
								<div className="title">Имя</div>									
								<input 
									name="name" 
									className="value" 
									placeholder="Пусто"
									defaultValue={name}
									onChange={e => this.changeField(e)}
								/>
							</div>
							<div className="field">
								<div className="title">Фамилия</div>
								<input 
									name="surname" 
									className="value" 
									placeholder="Пусто"
									defaultValue={surname}
									onChange={e => this.changeField(e)}
								/>
							</div>
							<div className="field">
								<div className="title">Страна</div>
								<input 
									name="country" 
									className="value" 
									placeholder="Пусто"
									defaultValue={country} 
									onChange={e => this.changeField(e)}
								/>
							</div>
							<div className="field">
								<div className="title">Город</div>
								<input 
									name="city" 
									className="value" 
									placeholder="Пусто"
									defaultValue={city} 
									onChange={e => this.changeField(e)}
								/>
							</div>
							{/*<div className="field">
								<div className="title">Email</div>
								<input 
									name="email" 
									className="value" 
									placeholder="Пусто"
									defaultValue={email} 
									disabled="disabled"
									onChange={e => this.changeField(e)}
								/>
							</div>*/}

							<button 
								className="btn btn-blue apply" 
								onClick={() => this.changeProfileInfo()}
							>
								Применить изменения
							</button>
						</div>

						<div className="change-password">
							<div className="head">Смена пароля</div>
							<div className="body">

								<div className="field">
									<div className="title">Старый пароль</div>
									<input 
										name="oldPassword" 
										type="password"
										className="value" 
										value={oldPassword}
										onChange={e => this.changeField(e)}
									/>
								</div>

								<div className="field">
									<div className="title">Новый пароль</div>
									<input 
										name="password" 
										type="password"
										className="value"
										value={password}
										onChange={e => this.changeField(e)}
									/>
								</div>

								<div className="field">
									<div className="title">Повтор нового пароля</div>
									<input 
										name="confirmPassword" 
										type="password"
										className="value"
										value={confirmPassword}
										onChange={e => this.changeField(e)}
									/>
								</div>

								<button 
									className="btn btn-blue apply" 
									onClick={() => allowChangePassword ? this.changePassword() : false}
									disabled={allowChangePassword ? '' : 'disabled'}
								>
									Сменить пароль
								</button>

							</div>
						</div>
					</div>
					

					<div className="column info-blocks">
						<div>
							<div className="info-block">
								<div className="title">Сделок с прибылью</div>
								<div className="value">{count_deals_win}</div>
							</div>

							<div className="info-block">
								<div className="title">Сделок с убытком</div>
								<div className="value">{count_deals_loss}</div>
							</div>

							<div className="info-block">
								<div className="title">Сделок с возвратом</div>
								<div className="value">{count_deals_draw}</div>
							</div>

							<div className="info-block">
								<div className="title">Всего сделок</div>
								<div className="value">{count_deals}</div>
							</div>
						</div>

						<div>
							<div className="info-block">
								<div className="title">Максимальный доход</div>
								<div className="value">{max_income} $</div>
							</div>

							<div className="info-block">
								<div className="title">Минимальный доход</div>
								<div className="value">{min_income} $</div>
							</div>

							<div className="info-block">
								<div className="title">Максимальный убыток</div>
								<div className="value">{max_loss} $</div>
							</div>

							<div className="info-block">
								<div className="title">Минимальный убыток</div>
								<div className="value">{min_loss} $</div>
							</div>
						</div>

						<Popup 
							trigger={
								<button 
									className="btn btn-red apply"
								>
									Удалить аккаунт
								</button>
							} 
							modal
						>
							{close => (
								<div className="cabinet-modal-delete">
									<button className="close" onClick={close}>
										&times;
									</button>
									<div className="content">
										<div className="fa fa-info-circle"/>
										<div className="title">Удалить аккаунт</div>
										<div className="desc">
											Вы подтверждаете удаление своей учетной записи? 
											Это действие не может быть отменено.
										</div>
									</div>
									<div className="buttons">
										<a href="#/" className="btn btn-transparent" onClick={() => this.userDelete()}>
											Да, подтверждаю
										</a>
										<button className="btn btn-white" onClick={close}>
											Отменить
										</button>
									</div>
								</div>
							)}
						</Popup>
					</div>

				</div>

			</div>
		)
	}

	userDelete() {
		this.props.logout({});
		this.props.userDelete();
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

		this.setState({
			password: '',
			oldPassword: '',
			confirmPassword: ''
		});
	}

}

Profile.propTypes = {
	profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	profile: state.profile,
})

const mapDispatchToProps = (dispatch) => ({
	logout: (data) => dispatch(logout(data)),
	userDelete: (data) => dispatch(userDelete(data)),
	changePassword: (data) => dispatch(changePassword(data)),
	getProfileInfo: (data) => dispatch(getProfileInfo(data)),
	changeProfileInfo: (data) => dispatch(changeProfileInfo(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);