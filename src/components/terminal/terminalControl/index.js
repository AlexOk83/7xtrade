import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Deals from './deals'

import {setDeal} from '../../../actions/deals'

import CurrentChartInfo from '../terminalHeader/currentChartInfo'

import './index.scss'

class TerminalControl extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tradeTime: 1,
            tradePrice: 1
        };

    }

    tradeTimeCounter(value) {
        if (!value) {
            if (value !== 0) this.setState({tradeTime: ''});
            return false;
        }

        let newValue = +(typeof value === "string" ? value.replace(/\D+\^0+/g, "") : value);

        newValue = newValue <= 1 ? 1 : newValue;
        newValue = newValue > 60 ? 60 : newValue;

        this.setState({tradeTime: newValue});
    }

    tradePriceCounter(value) {
        if (!value) {
            if (value !== 0) this.setState({tradePrice: ''});
            return false;
        }

        let newValue = +(typeof value === "string" ? value.replace(/\D+\^0+/g, "") : value);

        newValue = newValue <= 1 ? 1 : newValue;
        newValue = newValue > 1000000 ? 1000000 : newValue;

        this.setState({tradePrice: newValue});
    }

    setDeal(type) {
        const {
            tradeTime,
            tradePrice
        } = this.state;

        //const { strike } = this.props.terminal;

        this.props.setDeal({
            type: type,
            minutes: tradeTime,
            amount: tradePrice,
            //spot_on_chart: strike,
            wallet: localStorage.wallet,
            chart_id: +localStorage.chartId,
        })
    }


    render() {
        let {
            tradeTime,
            tradePrice
        } = this.state;

        let {
            strike,
            current_chart
        } = this.props.terminal;

        /*let priceYield = +tradePrice + (+tradePrice * (current_chart.yield / 100));
        priceYield = priceYield.toFixed(2);*/

        let yieldProcent = current_chart.yield;

        return (
            <div className="terminal-control">

                <div className="form-box">
                    <div className="form_box__title">
                        <CurrentChartInfo data={current_chart} switchPreloader={true}/>
                    </div>
                    <div className="form_box__tradeTime">
                        <div className="tradeTime__title">Время</div>
                        <div className="tradeTime__inputBox">
                            <button className="minus" onClick={() => this.tradeTimeCounter(tradeTime - 1)}>-</button>
                            <input type="text" value={tradeTime}
                                   onBlur={() => !tradeTime ? this.setState({tradeTime: 1}) : false}
                                   onChange={e => this.tradeTimeCounter(e.target.value)}/>
                            <button className="plus" onClick={() => this.tradeTimeCounter(tradeTime + 1)}>+</button>
                        </div>
                    </div>

                    <div className="form_box__tradePrice">
                        <div className="tradePrice__title">Инвестиция</div>
                        <div className="tradePrice__inputBox">
                            <button className="minus" onClick={() => this.tradePriceCounter(tradePrice - 1)}>-</button>
                            <input type="text" id="tradePriceInput" value="1.00"
                                   value={tradePrice}
                                   onBlur={() => !tradePrice ? this.setState({tradePrice: 1}) : false}
                                   onChange={e => this.tradePriceCounter(e.target.value)}
                            />
                            <label htmlFor="tradePriceInput">$
                            </label>
                            <button className="plus" onClick={() => this.tradePriceCounter(tradePrice + 1)}>+</button>
                        </div>
                    </div>

                    <div className="form_box__strike">
                        <button className="strike_btn_green" onClick={() => this.setDeal('up')}
                                disabled={!strike ? 'disabled' : ''}
                        >
                                    <span className="strike_btn__prop">
                                        <span>Выше</span>
                                        <span className="btn_icon">
                                            <img src="icons/arrow_up_ctrl.svg" alt="Выше"/>
                                        </span>
                                    </span>
                            <span className="strike_btn__value">
                                        +{yieldProcent}%
                                    </span>
                        </button>
                        <div className="strike_desc">
                            <div className="desc__prop">Ваша выплата:</div>
                            <div className="desc__value">{yieldProcent}%</div>
                        </div>
                        <button className="strike_btn_red" onClick={() => this.setDeal('down')}
                                disabled={!strike ? 'disabled' : ''}
                        >
                                     <span className="strike_btn__prop">
                                        <span>Ниже</span>
                                        <span className="btn_icon">
                                            <img src="icons/arrow_up_ctrl.svg" alt="Ниже"/>
                                        </span>
                                    </span>
                            <span className="strike_btn__value">
                                       +{yieldProcent}%
                                    </span>
                        </button>
                    </div>

                    {/*<div className="form-group tradeTime">
                        <div className="title">Время</div>
                        <button className="minus" onClick={() => this.tradeTimeCounter(tradeTime - 1)}>-</button>
                        <input
                            type="text"
                            value={tradeTime}
                            //readOnly="readOnly"
                            onBlur={() => !tradeTime ? this.setState({tradeTime: 1}) : false}
                            onChange={e => this.tradeTimeCounter(e.target.value)}
                        />
                        <button className="plus" onClick={() => this.tradeTimeCounter(tradeTime + 1)}>+</button>
                    </div>*/}

                    {/*<div className="form-group tradePrice">
                        <div className="title">Сумма</div>
                        <button className="minus" onClick={() => this.tradePriceCounter(tradePrice - 1)}>-</button>
                        <input
                            type="text"
                            value={tradePrice}
                            onBlur={() => !tradePrice ? this.setState({tradePrice: 1}) : false}
                            onChange={e => this.tradePriceCounter(e.target.value)}
                        />
                        <button className="plus" onClick={() => this.tradePriceCounter(tradePrice + 1)}>+</button>
                    </div>*/}

                    {/*<div className="strike-box">
                        <button
                            className="btn red"
                            onClick={() => this.setDeal('down')}
                            disabled={!strike ? 'disabled' : ''}
                        >
                            <div className="fa fa-arrow-down"/>
                            +{yieldProcent}%
                        </button>

                        <div className="strike-price">
							<div className="title">Страйк цена</div>
							<div className="price">{strike ? strike : 'Не доступно'}</div>
						</div>

                        <button
                            className="btn green"
                            onClick={() => this.setDeal('up')}
                            disabled={!strike ? 'disabled' : ''}
                        >
                            <div className="fa fa-arrow-up"/>
                            +{yieldProcent}%
                        </button>
                    </div>*/}

                </div>

                {/*<div className="profit-box">
					Доходность: <b>{yieldProcent}%</b>
					<small>{priceYield} $</small>
				</div>*/}

                <Deals/>

            </div>
        )
    }

}

TerminalControl.propTypes = {
    setDeal: PropTypes.func.isRequired,
    terminal: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    terminal: state.terminal
})

const mapDispatchToProps = (dispatch) => ({
    setDeal: (data) => dispatch(setDeal(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(TerminalControl);