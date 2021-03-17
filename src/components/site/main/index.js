import React from 'react'
import {Link} from 'react-router-dom'
import Particles from 'react-particles-js'

import Logos from './logos'
import Steps from './steps'
import WhyUs from './whyUs'
//import Chart from './chart'
import Header from '../header'
import Footer from '../footer'
//import Partners from './partners'
import Promocode from './promocode'
import Investments from './investments'

import './index.scss'
import 'swiper/swiper-bundle.min.css'

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            viewAuth: false,
            headerBackground: false,
        };

    }

    componentDidMount() {

    }

    render() {

        const {
            viewAuth
        } = this.state;

        return (
            <div className="main">
                <Header
                    viewAuth={viewAuth}
                    openAuth={() => this.setState({viewAuth: !viewAuth})}
                />

                <main className="workarea">
                    <section className="mainscreen">
                        <div className="container">
                            <div className="mainscreen__wrapper">
                                <div className="mainscreen__left">
                                    <div className="mainscreen__text">
                                        <h1 className="title">
                                            Инновационая торговля <span>на финансовых рынках</span>
                                        </h1>
                                        <h3 className="description">
                                            Регестрируйтесь и используйте 10.000$ на учебном счету
                                            Приветственный бонус на первое пополнение
                                        </h3>
                                    </div>
                                    <a className="mainscreen__cta btn btn_blue" href="/register">Регистрация →</a>

                                    <div className="mainscreen__utp">
                                        <div className="utp_item">
                                            <img src="/icons/wallet.png"
                                                 alt="Оперативный вывод средств в течении суток"/>
                                            <span>Оперативный вывод&nbsp;средств в&nbsp;течении&nbsp;суток</span>
                                        </div>
                                        <div className="utp_item">
                                            <img src="/icons/brain.png" alt="Бесплатная практика и материалы"/>
                                            <span>Бесплатная практика&nbsp;и материалы</span>
                                        </div>
                                        <div className="utp_item">
                                            <img src="/icons/chat.png" alt="Онлайн поддержка 24/7"/>
                                            <span>Онлайн поддержка 24/7</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mainscreen__right">
                                    <div className="mainscreen__img">
                                        <img src="/images/laptop_bg.png"
                                             alt="Платформа для разумных инвестиций 7xtrade.com"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>

                {/*<Chart openAuth={() => this.setState({viewAuth: !viewAuth})} />*/}
                {/*<Partners />*/}
                <Logos/>
                <Steps/>
                <Promocode />
				<WhyUs openAuth={() => this.setState({viewAuth: !viewAuth})}/>
				<Investments/>
                <Footer/>
            </div>
        )
    }

}

export default Main;