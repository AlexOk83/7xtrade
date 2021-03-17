import React from 'react'

import Header from '../header'
import Footer from '../footer'

import DivLink from '../../elements/divLink'

import './index.scss'

class Education extends React.Component {

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
            viewAuth,
        } = this.state;

        const {includeToCabinet} = this.props;

        return (
            <div className="main">
                {!includeToCabinet ?
                    <Header
                        viewAuth={viewAuth}
                        openAuth={() => this.setState({viewAuth: !viewAuth})}
                    />
                    : false}

                <section className={`education ${includeToCabinet ? 'include-to-cabinet' : 'first'}`}>


                    <div className="container">
                        <div className="education__wrapper">
                            {!includeToCabinet ? <h1 className="education_title">Обучение</h1> : false}
                            <div className="education__items">
                                <a href="/education/basics-trading/0/0" className="education__item">
                                    <div className="education__item-icon fa fa-book"/>
                                    <div className="education__item-title">Основы трейдинга</div>
                                </a>

                                <a href="/education/learn-how-to-trade-in-30-minutes/0/0" className="education__item">
                                    <div className="education__item-icon fa fa-clock-o"/>
                                    <div className="education__item-title">Научитесь торговать за 30 минут</div>
                                </a>

                                <a href="/education/how-to-read-candlestick-chart/0/0" className="education__item">
                                    <div className="education__item-icon fa fa-bar-chart"/>
                                    <div className="education__item-title">Как читать свечной график</div>
                                </a>

                                <a href="/education/fundamental-analysis-for-beginners/0/0" className="education__item">
                                    <div className="education__item-icon fa fa-calendar-o"/>
                                    <div className="education__item-title">Фундаментальный анализ для начинающих</div>
                                </a>

                                <a href="/education/fundamental-analysis-for-advanced/0/0" className="education__item">
                                    <div className="education__item-icon fa fa-globe"/>
                                    <div className="education__item-title">Фундаментальный анализ для продвинутых</div>
                                </a>

                                <a href="/education/chart/0/0" className="education__item">
                                    <div className="education__item-icon fa fa-area-chart"/>
                                    <div className="education__item-title">График</div>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/*<div className="cards-list">
						<DivLink to="/education/basics-trading/0/0" className="card">
							<div className="fa fa-book"/>
							<div className="title">Основы трейдинга</div>
						</DivLink>
						<DivLink to="/education/learn-how-to-trade-in-30-minutes/0/0" className="card">
							<div className="fa fa-clock-o"/>
							<div className="title">Научитесь торговать за 30 минут</div>
						</DivLink>
						<DivLink to="/education/how-to-read-candlestick-chart/0/0" className="card">
							<div className="fa fa-bar-chart"/>
							<div className="title">Как читать свечной график</div>
						</DivLink>
						<DivLink to="/education/fundamental-analysis-for-beginners/0/0" className="card">
							<div className="fa fa-calendar-o"/>
							<div className="title">Фундаментальный анализ для начинающих</div>
						</DivLink>
						<DivLink to="/education/fundamental-analysis-for-advanced/0/0" className="card">
							<div className="fa fa-globe"/>
							<div className="title">Фундаментальный анализ для продвинутых</div>
						</DivLink>
						<DivLink to="/education/chart/0/0" className="card">
							<div className="fa fa-area-chart"/>
							<div className="title">График</div>
						</DivLink>
					</div>*/}
                </section>

                {!includeToCabinet ? <Footer/> : false}

            </div>
        )
    }

}

export default Education;