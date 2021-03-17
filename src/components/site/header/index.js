import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import Auth from '../auth'

import {getAppInfo} from '../../../actions/optionsApp'

import './index.scss'

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            headerBackground: false,
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        if (!this.props.app.domain) this.props.getAppInfo();

        this.body = document.body;

        this.body.addEventListener('scroll', this.handleScroll);

        document.querySelector('.header__burger').onclick = function() {
            document.querySelector('.header__burger').classList.toggle('active');
            document.querySelector('.header__menu').classList.toggle('active');
        }

    }

    componentWillUnmount() {
        this.body.removeEventListener('scroll', this.handleScroll);

    }

    handleScroll(e) {
        let scrollTop = e.target.scrollTop;

        this.setState({headerBackground: scrollTop > 1});
    }

    mobileMenuButton() {
        if (!localStorage.mobileVersion) return false;

        document.querySelector('.menu').style = 'display: block';
    }

    render() {

        const {
            expanded,
            headerBackground
        } = this.state;

        return (

            <header className={`header background ${expanded ? 'expanded' : ''}`}>
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__left">
                            <div className="header__logo">
                                <NavLink to="/">
                                    <img src="/images/logo_top.png" alt="логотип 7xtrade.com"/>
                                </NavLink>
                            </div>
                            <nav className="menu_top">
                                <ul>
                                    <li><NavLink to="/about">О нас</NavLink></li>
                                    <li><NavLink to="/faq">FAQ</NavLink></li>
                                    <li><NavLink to="/education">Обучение</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header__right">
                            <div className="auth_btns">
                                <a href="/login" className="btn btn_grey login_btn">Вход</a>
                                <a href="/register" className="btn btn_blue reg_btn">Регистрация</a>
                            </div>
                            <div className="menu_top__mobile">
                                <div className="header__burger" id="headerBurger">
                                    <span></span>
                                </div>
                                <nav className="header__menu" id="headerMenu">
                                    <ul className="header__list">
                                        <li>
                                            <NavLink to="/about" className="header__link">О нас</NavLink>
                                            <NavLink to="/faq" className="header__link">FAQ</NavLink>
                                            <NavLink to="/education" className="header__link">Обучение</NavLink>
                                            <NavLink to="/login" className="header__link">Вход</NavLink>
                                            <NavLink to="/register" className="header__link">Регистрация</NavLink>
                                        </li>
                                    </ul>
                                    <div className="header__menu__bg">
                                        <img src="/images/bg_bitcoin.png" alt=""/>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}

const mapStateToProps = (state) => ({
    app: state.app,
})

const mapDispatchToProps = (dispatch) => ({
    getAppInfo: (data) => dispatch(getAppInfo(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);