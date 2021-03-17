import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'

import {registerEmail} from '../../../../actions/authRegister'

import Header from '../../header'
//import Footer from '../../footer'

import DivLink from '../../../elements/divLink'

import '../index.scss'

class AuthRegister extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            checked: false,
            confirmPassword: '',
            emailIsValid: false,
            passwordIsValid: false,
            confirmPasswordIsValid: false,
            emailIsDirty: false,
            passwordIsDirty: false,
            confirmPasswordIsDirty: false,
        };

    }

    handleCheck(value) {
        const {checked} = this.state;

        let newValue = checked !== 'checked' ? 'checked' : false;

        this.setState({checked: newValue});
    }

    registerEmail = () => {
        const {
            email,
            password,
            confirmPassword
        } = this.state;

        const {
            affiliate,
            registerEmail
        } = this.props;

        const validate = this.validation();

        if (validate.includes('email')) {
            this.setState({ emailIsDirty: true, emailIsValid: false  })
        }

        if (validate.includes('password')) {
            this.setState({ passwordIsDirty: true, passwordIsValid: false  })
        }

        if (validate.includes('confirmPassword')) {
            this.setState({ confirmPasswordIsDirty: true, confirmPasswordIsValid: false  })
        }

        if (validate.length !== 0) {
            return;
        }

        registerEmail({
            email: email,
            password: password,
            affiliate: affiliate,
            confirm_password: confirmPassword,
            invitation_code: localStorage.invitationСode
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

    get classesConfirmPassword() {
        if (!this.state.confirmPasswordIsValid && this.state.confirmPasswordIsDirty) {
            return 'input_cover input_error';
        }

        return 'input_cover';
    }

    changeEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    changePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    changeConfirmPassword = (event) => {
        this.setState({ confirmPassword: event.target.value });
    }

    validation = () => {
        const { email, password, confirmPassword } = this.state;
        const errors = [];

        if (password.length < 8) {
            errors.push('password')
        }

        if (password !== confirmPassword) {
            errors.push('confirmPassword')
        }

        if (email.length === 0 || !email.match(/^(([a-zа-я0-9_-]+\.)*[a-zа-я0-9_-]+@[a-zа-я0-9_-]+(\.[a-zа-я0-9_-]+)*\.[a-zа-я]{2,6})?$/)) {
            errors.push('email')
        }

        return errors;
    }

    onDirty = (field) => {
        if (field === 'email') {
            this.setState({ emailIsDirty: true, emailIsValid: !this.validation().includes('email')  })

            return;
        }

        if (field === 'password') {
            this.setState({ passwordIsDirty: true, passwordIsValid: !this.validation().includes('password')  })

            return;
        }

        this.setState({ confirmPasswordIsDirty: true, confirmPasswordIsValid: !this.validation().includes('confirmPassword')  })
    }

    render() {
        //if(localStorage.token) return <Redirect to='/' />;
        if (this.props.affiliate && localStorage.affiliateToken) {
            return <Redirect to='/affiliate/cabinet' push/>
        } else if (!this.props.affiliate && localStorage.token) {
            return <Redirect to='/terminal' push/>
        }

        const {
            email,
            checked,
            password,
            confirmPassword
        } = this.state;

        let allowRegisterEmail = email && checked && password && confirmPassword;

        const {
            error,
            description
        } = this.props.authRegister;

        const {panel} = this.props;

        return (
            <div className={`auth auth-register ${panel ? 'panel' : 'window'}`}>
                <Header/>
                <section className="register">
                    <div className="container">
                        <div className="register__wrapper">
                            <div className="register__form">
                                <div className="register__form-header">
                                    <a href="/login" className="register__login_link">Войти</a>
                                    <a href="#" className="register__reg_link current">Регистрация</a>
                                </div>
                                <div className="register__form-body">
                                    <div className="register__inputs">
                                        <div className={this.classesEmail}>
                                            <input className="reg_email" type="email" placeholder="Введите Email"
                                                   onChange={this.changeEmail}
                                                   onBlur={() => this.onDirty('email')}
                                            />
                                            <span className="error_mess">Введите корректный адрес электронной почты</span>
                                        </div>
                                        <div className={this.classesPassword}>
                                            <input className="reg_pass" type="password" placeholder="Введите пароль"
                                                   onChange={this.changePassword}
                                                   onBlur={() => this.onDirty('password')}
                                            />
                                            <span className="error_mess">Пароль должен состоять минимум из 8 символов</span>
                                        </div>
                                        <div className={this.classesConfirmPassword}>
                                            <input className="" type="password" placeholder="Подтвердите пароль"
                                                   onChange={this.changeConfirmPassword}
                                                   onBlur={() => this.onDirty('confirmPassword')}
                                            />
                                            <span className="error_mess">Пароли не совпадают</span>
                                        </div>
                                    </div>
                                    <div className="register__confirm">
                                        <div className="form__checkbox">
                                            <input className="reg_chbx" type="checkbox" id="reg_chbx"
                                                   onChange={() => this.handleCheck()}
                                                   checked={checked}
                                                   required="required"/>
                                            <label className="reg_chbx_lable" htmlFor="reg_chbx">Я подтверждаю, что
                                                старше 18 лет и принимаю условия <a href="/docs/client-agreement.pdf"
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer">Пользовательского
                                                    соглашения</a></label>
                                        </div>
                                    </div>
                                    <div className="btn_cover input_error">
                                        <button className="btn btn_blue register__reg_btn"
                                                onClick={() => allowRegisterEmail ? this.registerEmail() : false}
                                                disabled={allowRegisterEmail ? '' : 'disabled'}>Регистрация
                                        </button>
                                        <span className="error_mess">{description}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

				{/* IF ERROR ADD CLASS '.input_error' TO '.input_cover' and btn_cover */}

                {/*<div className="form">
                    <div className="title">Регистрация</div>
                    <div className="line"/>
                    <div className="inputs">
                        <input type="email" placeholder="Email" onChange={e => this.setState({email: e.target.value})}/>
                        <input type="password" placeholder="Пароль"
                               onChange={e => this.setState({password: e.target.value})}/>
                        <input type="password" placeholder="Повтор пароля"
                               onChange={e => this.setState({confirmPassword: e.target.value})}/>
                    </div>

                    <div className="select-wrapper">
                        <input
                            type="checkbox"
                            onChange={() => this.handleCheck()}
                            checked={checked}
                            required="required"
                        />
                        <a href="/docs/client-agreement.pdf" target="_blank" rel="noopener noreferrer">
                            Я принимаю пользовательское соглашение
                        </a>
                    </div>

                    {panel ?
                        <div className="buttons">
                            {error ? <div className="error">{description}</div> : false}
                            <button
                                className="btn btn-blue enter"
                                onClick={() => allowRegisterEmail ? this.registerEmail() : false}
                                disabled={allowRegisterEmail ? '' : 'disabled'}
                            >Создать
                            </button>
                        </div>
                        : false}

                    {!panel ?
                        <div className="buttons buttons-window">
                            {error ? <div className="error">{description}</div> : false}
                            <div className="row">
                                <button
                                    className="btn btn-blue enter"
                                    onClick={() => email ? this.registerEmail() : false}
                                    disabled={email ? '' : 'disabled'}
                                >Создать
                                </button>
                                <DivLink to="/login" className="btn btn-yellow back">Назад</DivLink>
                            </div>
                        </div>
                        : false}

                </div>*/}

                {/*<Footer/>*/}
            </div>
        )
    }
}

AuthRegister.propTypes = {
    authRegister: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    authRegister: state.authRegister
})

const mapDispatchToProps = (dispatch) => ({
    registerEmail: (data) => dispatch(registerEmail(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthRegister)