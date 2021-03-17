import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {
    increase,
    getIncreaseInfo
} from '../../../../actions/payment'
import {check} from '../../../../actions/promocodes'



import './index.scss'


class PaymentIncrease extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            orderAmount: 100,
            promocodeName: '',
        };
    }

    componentDidMount() {
        this.props.getIncreaseInfo()
    }

    createLinkPayment(value) {
        const {orderAmount} = this.state;

        const {promocode} = this.props.payment;

        this.props.increase({
            order_amount: orderAmount,
            promocode_id: promocode.id,
        });
    }

    promocodeCheck() {
        const {promocodeName} = this.state;

        this.props.check({
            promocode_name: promocodeName
        });
    }

    render() {
        const {
            orderAmount,
            promocodeName,
        } = this.state;

        const {
            url,
            promocode,
            min_increase_amount
        } = this.props.payment;

        if (url) {
            window.open(url, '_self');
            delete (this.props.payment.url);
        }

        let bonus = promocode.success ? +promocode.payment_bonus : 0;
        let result = +orderAmount + bonus;

        return (
            <div className="increase">
                <div className="refill__row">
                    <div className="content__mid-left">
                        <div className="content__mid-col refill__col-left">
                            <div className="data_block">
                                <div className="data_block-title">Детали платежа:</div>
                                <div className="data_block-inputs">
                                    <div className="input_cover">
                                        <div className="input_label">Сумма</div>
                                        <input type="number"
                                               min={min_increase_amount}
                                               step="1"
                                               value={orderAmount}
                                               onChange={e => this.setState({orderAmount: e.target.value})}/>
                                        <div className="input_placeholder">USD</div>
                                    </div>
                                </div>
                                <div className="data_block-actions">
                                    <div className="payment_templates">
                                        <button className="payment_templates__btn"
                                                onClick={() => this.setState({orderAmount: 150})}>150 $
                                        </button>
                                        <button className="payment_templates__btn"
                                                onClick={() => this.setState({orderAmount: 200})}>200 $
                                        </button>
                                        <button className="payment_templates__btn"
                                                onClick={() => this.setState({orderAmount: 300})}>300 $
                                        </button>
                                        <button className="payment_templates__btn"
                                                onClick={() => this.setState({orderAmount: 500})}>500 $
                                        </button>
                                    </div>
                                    <div className="chbx_btn_cover">
                                        <input className="chbx_promocode" type="checkbox" id="promocode"/>
                                        <label htmlFor="promocode">
                                            Использовать<br/>бонус</label>
                                    </div>
                                </div>
                                <div className="data_block-inputs promo_container">
                                    <div className="input_cover input_cover__promo">
                                        <div className="input_label">Промо-код</div>
                                        <input type="text"
                                               defaultValue={promocodeName}
                                               onChange={e => this.setState({promocodeName: e.target.value})}/>
                                        <button className="promo_btn">Применить промо-код</button>
                                    </div>
                                </div>
                            </div>
                            <div className="refill_desc">
                                <p>Минимальная сумма депозита: {min_increase_amount} $</p>
                                <p>Минимальная сумма вывода: 10.00 $</p>
                                <p>Быстрый вывод средств с вашего счета</p>
                            </div>
                        </div>

                        <div className="content__mid-col refill__col-right">
                            <div className="data_block">
                                <div className="data_block-refill">
                                    <div className="refill__item post_info">
                                        <div className="accInfo__item__title">Вы платите:</div>
                                        <div className="accInfo__item__value">1000.00 $</div>
                                    </div>
                                    <div className="refill__item get_info">
                                        <div className="accInfo__item__title">Вы получаете:</div>
                                        <div className="accInfo__item__value">2000.00 $</div>
                                    </div>

                                    <button className="btn btn_blue refill__btn"
                                            onClick={() => this.createLinkPayment()}
                                            disabled={+orderAmount < min_increase_amount ? 'disabled' : ''}>Пополнить →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content__mid-right">
                        <div className="content__mid-col refill__col-right">
                            <div className="data_block">
                                <div className="data_block-title">Аккаунт:</div>
                                <div className="data_block-accInfo">
                                    <div className="accInfo__item account_info">
                                        <div className="accInfo__item__title">На счету:</div>
                                        <div className="accInfo__item__value">0.00 $</div>
                                    </div>
                                    <div className="accInfo__item available_info">
                                        <div className="accInfo__item__title">Доступно для вывода:</div>
                                        <div className="accInfo__item__value">0.00 $</div>
                                    </div>
                                    <div className="accInfo__item bonus_info">
                                        <div className="accInfo__item__title">Бонусы:</div>
                                        <div className="accInfo__item__value">0.00 $</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content__mid-bottom">
                    <div className="content__mid-col refill__questions">
                        <ul className="refill__questions-tabs">
                            <li className=""><a href="#tab1_refill">Установлен ли размер минимальной
                                суммы, которую я могу зачислить на счет при регистрации? →</a></li>
                            <li><a href="#tab2_refill">Нужно ли пополнять счет на торговой платформе и
                                как часто это нужно делать? →</a></li>
                            <li><a href="#tab3_refill">Как можно пополнить счет?</a></li>
                            <li><a href="#tab4_refill">Существует ли комиссия при пополнении счета?
                                →</a></li>
                        </ul>
                    </div>
                    <div className="content__mid-col refill__answers">
                        <div className="tab_container">
                            <div className="refill__tab_content" id="tab1_refill">
                                <div className="refill__answers-item">
                                    <div className="item__header">
                                        <div className="header__left">
                                            <div className="item__header-icon"><img src="/icons/arrow_left.svg"
                                                                                    alt="arrow_left.svg"/></div>
                                            <div className="item__header-title">Установлен ли размер минимальной
                                                суммы, которую я могу зачислить на счет при регистрации?
                                            </div>
                                        </div>

                                        <div className="header__right tab_close">X</div>
                                    </div>
                                    <div className="item__body">
                                        <p>
                                            Преимущество торговой платформы Компании в том числе в том,
                                            что Вам не придется зачислять на счет крупные суммы. Начать
                                            торговлю Вы можете, инвестировав незначительную сумму денег.
                                            Минимальный депозит составляет 10 долларов США.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="refill__tab_content" id="tab2_refill">
                                <div className="refill__answers-item">
                                    <div className="item__header">
                                        <div className="header__left">
                                            <div className="item__header-icon"><img src="/icons/arrow_left.svg"
                                                                                    alt="arrow_left.svg"/></div>
                                            <div className="item__header-title">Нужно ли пополнять счет на
                                                торговой платформе и как часто это нужно делать?
                                            </div>
                                        </div>
                                        <div className="header__right tab_close">X</div>
                                    </div>
                                    <div className="item__body">
                                        <p>
                                            Для работы с Digital Trading Вам необходимо открыть личный
                                            счет. Чтобы заключать реальные сделки Вам безусловно нужно
                                            будет его пополнять на сумму приобретаемых опционов.
                                        </p>
                                        <p>
                                            Начать торговлю без денежных средств можно только используя
                                            учебный счет компании (демо-счет). Такой счет является
                                            бесплатным и создан для демонстрации функционирования
                                            торговой платформы. С помощью такого счета Вы можете
                                            потренироваться в приобретении digital опционов, понять
                                            основные принципы торговли, протестировать различные
                                            методики и стратегии, или же оценить уровень Вашей интуиции.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="refill__tab_content" id="tab3_refill">
                                <div className="refill__answers-item">
                                    <div className="item__header">
                                        <div className="header__left">
                                            <div className="item__header-icon"><img src="/icons/arrow_left.svg"
                                                                                    alt="arrow_left.svg"/></div>
                                            <div className="item__header-title">Как можно пополнить счет?
                                            </div>
                                        </div>
                                        <div className="header__right tab_close">X</div>
                                    </div>
                                    <div className="item__body">
                                        <p>
                                            Сделать это очень просто. Процедура займет пару минут.
                                        </p>
                                        <p>1) Откройте окно исполнения сделки и нажмите зеленую кнопку «Пополнить» в
                                            правом верхнем углу вкладки.
                                        </p>
                                        <p>Пополнить счет можно также через Ваш Личный кабинет, нажав кнопку «Пополнить»
                                            в профиле аккаунта.
                                        </p>
                                        <p>2) После необходимо выбрать способ пополнения счета (Компания предлагает
                                            массу удобных способов, которые доступны Клиенту и отображаются в его личном
                                            кабинете).
                                        </p>
                                        <p>3) Далее укажите валюту, в которой будет производиться пополнение счета, и
                                            соответственно валюту самого счета.
                                        </p>
                                        <p>4) Введите размер пополнения.
                                        </p>
                                        <p>5) Заполните предложенную форму, введя запрашиваемые платежные данные.
                                        </p>
                                        <p>6) Произведите платеж.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="refill__tab_content" id="tab4_refill">
                                <div className="refill__answers-item">
                                    <div className="item__header">
                                        <div className="header__left">
                                            <div className="item__header-icon"><img src="/icons/arrow_left.svg"
                                                                                    alt="arrow_left.svg"/></div>
                                            <div className="item__header-title">Существует ли коммиссия при
                                                выводе средств?
                                            </div>
                                        </div>
                                        <div className="header__right tab_close">X</div>
                                    </div>
                                    <div className="item__body">
                                        <p>
                                            Нет. Компания не взымает комиссию ни за операцию пополнения
                                            счета, ни за вывод средств.
                                        </p>
                                        <p>
                                            Однако, стоит учитывать, что платежные системы могут взимать
                                            свои комиссии и использовать внутренний курс конвертации
                                            валют.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className="column">
					<div className="head">Детали платежа</div>
					<div className="body">

						<div className="field">
							<div className="title">Сумма пополнения</div>
							<input 
								type="number" 
								min={min_increase_amount}
								step="1"
								value={orderAmount}
								onChange={e => this.setState({orderAmount: e.target.value})}
							/>
							<div className="addon icon">$</div>
						</div>

						<div className="field-buttons">
							<button onClick={() => this.setState({orderAmount: 150})}>150 $</button>
							<button onClick={() => this.setState({orderAmount: 200})}>200 $</button>
							<button onClick={() => this.setState({orderAmount: 300})}>300 $</button>
							<button onClick={() => this.setState({orderAmount: 500})}>500 $</button>
						</div>

						<div className="field">
							<div className="title">Промо-код</div>
							<input 
								type="text" 
								defaultValue={promocodeName}
								onChange={e => this.setState({promocodeName: e.target.value})}
							/>
							<div 
								className="addon link" 
								onClick={() => this.promocodeCheck()}
							>Применить</div>
						</div>

						<div className="desc">Минимальная сумма пополнения {min_increase_amount} $</div>
					</div>
				</div>

				<div className="column small info-blocks">
					<div className="body">

						<div className="info-block">
							<div className="title">Бонус</div>
							<div className="value">{bonus} $</div>
						</div>

						<div className="info-block">
							<div className="title">Итого</div>
							<div className="value">{result} $</div>
						</div>

						<button 
							className="btn btn-blue" 
							onClick={() => this.createLinkPayment()}
							disabled={+orderAmount < min_increase_amount ? 'disabled' : ''}
						>Пополнить</button>

					</div>
				</div>*/}

            </div>
        )
    }

}

PaymentIncrease.propTypes = {
    payment: PropTypes.object.isRequired,
    increase: PropTypes.func.isRequired,
    check: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    payment: state.payment
})

const mapDispatchToProps = (dispatch) => ({
    check: (data) => dispatch(check(data)),
    increase: (data) => dispatch(increase(data)),
    getIncreaseInfo: (data) => dispatch(getIncreaseInfo(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentIncrease);