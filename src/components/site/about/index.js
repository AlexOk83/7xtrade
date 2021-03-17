import React from 'react'
import config from '../../../config'
import {connect} from 'react-redux'

import Auth from '../auth'
import Header from '../header'
import Footer from '../footer'

import './index.scss'

class About extends React.Component {

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

                {viewAuth ? <Auth openAuth={() => this.setState({viewAuth: !viewAuth})}/> : false}

                <section className="about first">
                    <div className="container">
                        <div className="about__wrapper">
                            <h1 className="about__title">О нашей компании</h1>
                            <div className="about__map">
                                <div className="about__map-title">
                                    7xtrade на карте мира
                                </div>
                                <div className="about__map-img">
                                    <img src="/images/map.png" alt="7xtrade на карте мира"/>
                                </div>
                            </div>
                            <div className="about__content">
                                <h2>Платформа нового уровня, платформа будущего</h2>
                                <div className="text_box">
                                    <p>{this.props.app.name}&nbsp;&mdash;— это компания с&nbsp;передовыми технологиями, созданная для
                                        комфортного
                                        инвестирования на
                                        финансовых рынках.</p>
                                    <p>Проект официально запущен в&nbsp;<span>2019</span>&nbsp;году. Мы&nbsp;заявили
                                        о&nbsp;себе, как о&nbsp;честном брокере с
                                        быстрыми
                                        выплатами, широким списком инструментов для анализа, точными котировками,
                                        качественной
                                        клиентской поддержкой, а&nbsp;также обширными обучающими материалами.</p>
                                    <p>Мы&nbsp;ориентированы на&nbsp;постоянное улучшение платформы, чтобы каждый пользователь
                                        повышал свой
                                        доход.
                                        Выводить деньги можно быстро также быстро, как и&nbsp;пополнять счёт. Без каких либо
                                        задержек.</p>
                                </div>
                                <h2>Каждый может реализовать свои возможности</h2>
                                <div className="text_box">
                                    <p>Мы&nbsp;разработали технологичный функционал для максимально широкой аудитории. Теперь
                                        каждому
                                        человеку доступно инвестирование на&nbsp;финансовых рынках с&nbsp;минимальными вложениями.
                                        Работать
                                        можно
                                        из&nbsp;любой точки мира, достаточно иметь выход в&nbsp;интернет.</p>
                                </div>
                                <h2>7XTRADE в цифрах</h2>
                                <div className="payments">
                                    <div className="payments__left">
                                        <h3 className="payments__title">Выплаты</h3>
                                        <div className="payments__content">
                                            <p>
                                                Средства трейдеров доступны для вывода в любое время.
                                                Из года в год мы увеличиваем скорость выплат и улучшаем наше торговое образование.
                                                В результате все больше и больше людей преуспевают с нами.
                                                Количество выплат увеличивается в среднем на <span>7%</span> каждый месяц.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="block payments__right">
                                        <h3 className="payments__title payments__title-right">$ 13 703 841</h3>
                                        <div className="payments__content">
                                            <p>было выплачено за последний месяц</p>
                                        </div>
                                        <img src="/img/site/graph-payments.svg" alt=""/>
                                    </div>
                                </div>

                                <div className="payments">
                                    <div className="payments__left">
                                        <h3 className="payments__title">Пользователей в день</h3>
                                        <div className="payments__content">
                                            <p>
                                                Количество наших пользователей постоянно растет.
                                                Отныне каждый студент или пенсионер, художник-фрилансер
                                                или предприниматель может стать трейдером.
                                                Торговля больше не&nbsp;является преследованием &laquo;инсайдеров&raquo;;
                                                это стало увлекательным и&nbsp;прибыльным хобби.
                                            </p>
                                            <p>
                                                <span>247256</span> пользователей совершили сделки на реальном счете за
                                                последний месяц
                                            </p>
                                        </div>
                                    </div>
                                    <div className="block payments__right">
                                        <h3 className="payments__title payments__title-right">25 000+</h3>
                                        <div className="payments__content">
                                            <p>пользователей торгуют каждый день</p>
                                        </div>
                                        <img src="/img/site/graph-users-in-day.svg" alt=""/>
                                    </div>
                                </div>

                                <div className="payments">
                                    <div className="payments__left">
                                        <h3 className="payments__title">Сделок в месяц</h3>
                                        <div className="payments__content">
                                            <p>
                                                Среди наших трейдеров более чем больше профессионалов,
                                                торгующих самыми разнообразными активами в рамках долгосрочных
                                                и краткосрочных сделок, тестирующих новые стратегии и применяющих знания,
                                                полученные в ходе консультаций и вебинаров.
                                            </p>
                                            <p>
                                                <span>$ 5,1</span> - это размер средней сделки за последний месяц.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="block payments__right">
                                        <h3 className="payments__title payments__title-right">35 457 939</h3>
                                        <div className="payments__content">
                                            <p>торги были закрыты за последний месяц</p>
                                        </div>
                                        <img src="/img/site/graph-deals-in-month.svg" alt=""/>
                                    </div>
                                </div>

                                <div className="payments">
                                    <div className="payments__left">
                                        <h3 className="payments__title">Объем торгов</h3>
                                        <div className="payments__content">
                                            <p>
                                                Мы буквально растем с каждым днем, становясь все больше и больше компании.
                                            </p>
                                            <p>
                                                <span>$ 5,1</span> - это размер средней сделки за последний месяц.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="block payments__right">
                                        <h3 className="payments__title payments__title-right">179 229 316 долл. США</h3>
                                        <div className="payments__content">
                                            <p>в обороте за последний месяц</p>
                                        </div>
                                        <img src="/img/site/graph-tading-volume.svg" alt=""/>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>


                    {/*<h1>О компании</h1>
					{this.props.app.name ?
						<div className="text">
							<span>
								{this.props.app.name} — американский финансовый брокер. Около 7 лет мы успешно сотрудничали исключительно с крупными
								частными лицами и компаниями. Закупали и продавали большие пакеты акций и облигаций
								для наших клиентов по всему миру.
							</span>
							<span>
								Мы долго размышляли над тем, как развить этот успешный опыт прямых инвестиций и
								консультирования, и решили создать публичную платформу, предоставляющую сервис для
								массового клиента.
							</span>
							<span>
								Наша логика проста: если мы, как компания, смогли достичь успеха в непубличной
								работе, то почему бы не попробовать модель открытого участия. Так и появилась
								наша новая платформа с огромным успешным опытом – {config.projectName}.
							</span>
						</div>
					: false}*/}
                </section>
                <Footer/>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    app: state.app
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(About);