import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'

import {
    recoverPassword
} from '../../../../actions/authRecover'

import Header from '../../header'
//import Footer from '../../footer'

import DivLink from '../../../elements/divLink'

import '../index.scss'

class AuthRecover extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: ''
        };

    }

    recoverPassword() {
        const {
            email
        } = this.state;

        const {
            affiliate,
            recoverPassword
        } = this.props;

        recoverPassword({
            email: email,
            affiliate: affiliate
        });
    }

    render() {
        //if(localStorage.token) return <Redirect to='/' />;
        if (this.props.affiliate && localStorage.affiliateToken) {
            return <Redirect to='/affiliate/cabinet' push/>
        } else if (!this.props.affiliate && localStorage.token) {
            return <Redirect to='/terminal' push/>
        }

        const {
            email
        } = this.state;

        const {
            error,
            description
        } = this.props.authRecover;

        const {panel} = this.props;

        return (
            <div className={`auth auth-recover ${panel ? 'panel' : 'window'}`}>
                <Header/>

                <section className="change_pass">
                    <div className="container">
                        <div className="change_pass__wrapper">
                            <div className="change_pass__form">
                                <div className="change_pass__form-header">
                                    <a href="/login" className="change_pass__change_pass_link">Войти</a>
                                    <a href="/register" className="register__reg_link">Регистрация</a>
                                </div>
                                <div className="change_pass__form-body">
                                    <div className="change_pass__title">
                                        Чтобы изменить пароль, пожалуйста, введите адрес электронной почты, который Вы
                                        использовали
                                        при регистрации своей учетной записи.
                                    </div>
                                    <div className="change_pass__inputs">
                                        <div className="input_cover">
                                            <input className="change_pass_email" type="email"
                                                   placeholder="Введите Email"
                                                   onChange={e => this.setState({email: e.target.value})}/>
                                            <span
                                                className="error_mess">Введите корректный адрес электронной почты</span>
                                        </div>
                                    </div>
                                    <div className="btn_cover">
                                        <button className="btn btn_blue change_pass__log_btn"
                                                onClick={() => email ? this.recoverPassword() : false}
                                                disabled={email ? '' : 'disabled'}>Подтвердить email
                                        </button>
                                        <span className="error_mess"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


              {/*  <div className="form">
                    <div className="title">Отправить новый пароль</div>
                    <div className="line"/>
                    <div className="inputs">
                        <input type="email" placeholder="E-mail"
                               onChange={e => this.setState({email: e.target.value})}/>
                    </div>

                    {panel ?
                        <div className="buttons">
                            {error ? <div className="error">{description}</div> : false}
                            <button
                                className="btn btn-blue enter"
                                onClick={() => email ? this.recoverPassword() : false}
                                disabled={email ? '' : 'disabled'}
                            >Отправить
                            </button>
                        </div>
                        : false}

                    {!panel ?
                        <div className="buttons buttons-window">
                            {error ? <div className="error">{description}</div> : false}
                            <div className="row">
                                <button
                                    className="btn btn-blue enter"
                                    onClick={() => email ? this.recoverPassword() : false}
                                    disabled={email ? '' : 'disabled'}
                                >Отправить
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

AuthRecover.propTypes = {
    authRecover: PropTypes.object.isRequired,
    recoverPassword: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    authRecover: state.authRecover
})

const mapDispatchToProps = (dispatch) => ({
    recoverPassword: (data) => dispatch(recoverPassword(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthRecover)