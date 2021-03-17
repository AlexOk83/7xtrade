import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import { loginEmail } from '../../../../actions/authLogin'

import Header from '../../header'

import '../index.scss'
import {Select} from "../../../formElements/select";

class AuthLogin extends Component {

	constructor(props) {
		super(props);

		this.state = {
			emailValue: '',
			passwordValue: '',
			emailIsValid: false,
			passwordIsValid: false,
			emailIsDirty: false,
			passwordIsDirty: false,
		};

	}


	loginEmail = () => {
		const { emailValue, passwordValue } = this.state;
		const {	affiliate, loginEmail } = this.props;

		const validate = this.validation();



		if (validate.includes('email')) {
			this.setState({ emailIsDirty: true, emailIsValid: false  })
		}

		if (validate.includes('password')) {
			this.setState({ passwordIsDirty: true, passwordIsValid: false  })
		}

		if (validate.length !== 0) {
			return;
		}

		loginEmail({
			email: emailValue,
			password: passwordValue,
			affiliate: affiliate
		});
	}

	get classesEmail() {
		if (!this.state.emailIsValid && this.state.emailIsDirty) {
			return 'input_cover input_error';
		}

		return 'input_cover';
	}
	get classesPassword() {
		if (!this.state.passwordIsValid && this.state.passwordIsDirty) {
			return 'input_cover input_error';
		}

		return 'input_cover';
	}

	changeEmail = (event) => {
		this.setState({ emailValue: event.target.value });
	}

	changePassword = (event) => {
		this.setState({ passwordValue: event.target.value });
	}

	validation = () => {
		const { emailValue, passwordValue } = this.state;
		const errors = [];

		if (passwordValue < 8) {
			errors.push('password')
		}

		if (emailValue.length === 0 || !emailValue.match(/^(([a-zа-я0-9_-]+\.)*[a-zа-я0-9_-]+@[a-zа-я0-9_-]+(\.[a-zа-я0-9_-]+)*\.[a-zа-я]{2,6})?$/)) {
			errors.push('email')
		}

		return errors;
	}

	onDirty = (isPassword) => {
		if (isPassword) {
			this.setState({ passwordIsDirty: true, passwordIsValid: !this.validation().includes('password')  })

			return;
		}

		this.setState({ emailIsDirty: true, emailIsValid: !this.validation().includes('email')  })
	}

	render() {
		if(this.props.affiliate && localStorage.affiliateToken) {
			return <Redirect to='/affiliate/cabinet' push/>
		} else if(!this.props.affiliate && localStorage.token) {
			return <Redirect to='/terminal' push/>
		}
		
		const {	emailValue, passwordValue } = this.state;
		const allowLoginEmail = emailValue && passwordValue;
		const { error, description } = this.props.authLogin;
		const { panel } = this.props;
		const options = [
			{ value: 'male', name: 'Мужской' },
			{ value: 'female', name: 'Женский' },
		]

		return (
			<div className={`auth auth-login ${panel ? 'panel' : 'window'}`}>
				<Header/>
				<section className="login">
					<div className="container">
						<div className="login__wrapper">
							<div className="login__form">
								<div className="login__form-header">
									<a href="#" className="login__login_link current">Войти</a>
									<a href="/register" className="register__reg_link">Регистрация</a>
								</div>
								<div className="login__form-body">
									<div className="login__inputs">

										<div className={this.classesEmail}>
											<input className="login_email" type="email" placeholder="Введите Email"
												   onChange={this.changeEmail}
												   onBlur={() => this.onDirty(false)}
											/>
											<span className="error_mess">Введите корректный адрес электронной почты</span>
										</div>

										<div className={this.classesPassword}>
											<input className="login_pass" type="password" placeholder="Введите пароль"
												   onChange={this.changePassword}
												   onBlur={() => this.onDirty(true)}
											/>
											<span className="error_mess">Пароль должен состоять минимум из 8 символов</span>
										</div>

										<div className="input_cover">
											<Select options={options} name={'test'} id={'test'} placeholder='Выберите пол' />
										</div>
									</div>

									<div className="login__confirm">
										<div className="form__checkbox">
											<input className="login_chbx" type="checkbox" id="login_chbx"/>
											<label className="login_chbx_lable" htmlFor="login_chbx">Запомнить меня</label>
										</div>
									</div>

									<div className="btn_cover input_error">
										<button className="btn btn_blue login__log_btn" onClick={this.loginEmail}>Войти</button>
										<span className="error_mess">{description}</span>
									</div>
									<div className="fpass_cover">
										<a href="/recover" className="forgot_pass">Забыли пароль?</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* IF ERROR ADD CLASS '.input_error' TO '.input_cover' */}

			{/*	<div className="form">
					<div className="title">Авторизация</div>
					<div className="line"/>
					<div className="inputs">
						<input type="email" placeholder="Email" onChange={e => this.setState({email: e.target.value})}/>
						<input type="password" placeholder="Пароль" onChange={e => this.setState({password: e.target.value})}/>
					</div>

					{panel ?
						<div className="buttons">
							<div className="recover" onClick={() => this.props.openRecover()}>
								Забыли пароль?
							</div>
							{error ? <div className="error">{description}</div> : false}
							<button 
								className="btn btn-blue enter"
								onClick={() => allowLoginEmail ? this.loginEmail() : false}
								disabled={allowLoginEmail ? '' : 'disabled'}
							>Войти</button>
						</div>
					: false}

					{!panel ?
						<div className="buttons buttons-window">
							{error ? <div className="error">{description}</div> : false}
							<div className="row">
								<button 
									className="btn btn-blue enter"
									onClick={() => allowLoginEmail ? this.loginEmail() : false}
									disabled={allowLoginEmail ? '' : 'disabled'}
								>Войти</button>
								<DivLink to="/recover" className="recover">Забыли пароль?</DivLink>
							</div>
							<div className="subtitle">Нет аккаунта?</div>
							<DivLink to="/register" className="btn btn-yellow create-account">Регистрация</DivLink>
						</div>
					: false}
				</div>*/}

				{/*<Footer/>*/}
			</div>
		)
	}
}

AuthLogin.propTypes = {
	authLogin: PropTypes.object.isRequired,
	loginEmail: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	authLogin: state.authLogin
})

const mapDispatchToProps = (dispatch) => ({
	loginEmail: (data) => dispatch(loginEmail(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin)