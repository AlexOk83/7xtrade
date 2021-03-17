import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {
    output,
    getBalance
} from '../../../../actions/payment'

import './index.scss'

class PaymentOutput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardNumber: '',
            cardHolder: '',
            orderAmount: '',
        };

        this.allowSend = false;
    }

    componentDidMount() {
        this.props.getBalance();
    }

    sendOutput() {
        let {
            cardNumber,
            cardHolder,
            orderAmount,
        } = this.state;

        if (!this.allowSend) return false;

        this.setState({
            cardNumber: '',
            cardHolder: '',
            orderAmount: ''
        });

        this.props.output({
            card_number: cardNumber,
            card_holder: cardHolder,
            order_amount: orderAmount
        });
    }

    render() {
        if (!this.props.payment) return false;

        let {
            balance,
            min_order_amount
        } = this.props.payment;
        let {
            cardNumber,
            cardHolder,
            orderAmount,
        } = this.state;

        this.allowSend = cardNumber.length &&
            cardHolder.length &&
            +orderAmount <= balance &&
            +orderAmount >= min_order_amount;

        return (
            <div className="payment_output">
                <div className="withdraw__row">
                    <div className="content__mid-left">
                        <div className="content__mid-col withdraw__col-left">
                            <div className="data_block">
                                <div className="data_block-title">Платежная система:</div>
                                <div className="data_block-cards">
                                    <a className="card_item" href="">
                                        <div className="card_item__icon">
                                            <img src="/icons/payment/bitcoin.png" alt="Bitcoin"/>
                                        </div>
                                        <div className="card_item__text">
                                            Bitcoin
                                        </div>
                                    </a>
                                    <a className="card_item" href="">
                                        <div className="card_item__icon">
                                            <img src="/icons/payment/paypal.png" alt="PayPal"/>
                                        </div>
                                        <div className="card_item__text">
                                            PayPal
                                        </div>
                                    </a>
                                    <a className="card_item" href="">
                                        <div className="card_item__icon">
                                            <img src="/icons/payment/perfectMoney.png"
                                                 alt="Perfect Money"/>
                                        </div>
                                        <div className="card_item__text">
                                            Perfect Money
                                        </div>
                                    </a>
                                    <a className="card_item selected" href="">
                                        <div className="card_item__icon">
                                            <img src="/icons/payment/masterCard.png" alt="MasterCard"/>
                                        </div>
                                        <div className="card_item__text">
                                            MasterCard
                                        </div>
                                    </a>
                                    <a className="card_item" href="">
                                        <div className="card_item__icon">
                                            <img src="/icons/payment/advCash.png" alt="AdvCash"/>
                                        </div>
                                        <div className="card_item__text">
                                            AdvCash
                                        </div>
                                    </a>
                                    <a className="card_item" href="">
                                        <div className="card_item__icon">
                                            <img src="/icons/payment/visa.png" alt="Visa"/>
                                        </div>
                                        <div className="card_item__text">
                                            Visa
                                        </div>
                                    </a>
                                    <a className="card_item" href="">
                                        <div className="card_item__icon">
                                            <img src="/icons/payment/payeer.png" alt="Payeer"/>
                                        </div>
                                        <div className="card_item__text">
                                            Payeer
                                        </div>
                                    </a>
                                    <a className="card_item" href="">
                                        <div className="card_item__icon">
                                            <img src="/icons/payment/mir.png" alt="Мир"/>
                                        </div>
                                        <div className="card_item__text">
                                            Мир
                                        </div>
                                    </a>
                                    <a className="card_item" href="">
                                        <div className="card_item__icon">
                                            <img src="/icons/payment/qiwi.png" alt="Qiwi"/>
                                        </div>
                                        <div className="card_item__text">
                                            Qiwi
                                        </div>
                                    </a>
                                    <a className="card_item" href="">
                                        <div className="card_item__icon">
                                            <img src="/icons/payment/yandexMoney.png"
                                                 alt="Яндекс деньги"/>
                                        </div>
                                        <div className="card_item__text">
                                            Яндекс деньги
                                        </div>
                                    </a>
                                </div>
                                <div className="withdraw__label">Выберите платежную систему для вывода
                                    средств
                                </div>
                            </div>
                        </div>
                        <div className="content__mid-col withdraw__col-right">
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
                    <div className="content__mid-right">
                        <div className="content__mid-col">
                            <div className="data_block">
                                <div className="data_block-title">Выбранный метод вывода средств:</div>
                                <div className="data_block-payment_type">
                                    <div className="payment_type__header">
                                        <div className="row header_row">
                                            <img src="/icons/payment/masterCard_large.png"
                                                 alt="MasterCard"/>
                                            <div className="header__title">
                                                MasterCard
                                            </div>
                                        </div>
                                    </div>
                                    <div className="payment_type__body">
                                        <div className="row amount_row">
                                            <div className="amount_row__prop">Мин. Сумма:</div>
                                            <div className="amount_row__value">10.00$</div>
                                        </div>
                                        <div className="row amount_row">
                                            <div className="amount_row__prop">Макс. Сумма:</div>
                                            <div className="amount_row__value">10.000$<span> за одну операцию </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="data_block">
                                <div className="data_block-inputs">
                                    <div className="input_cover">
                                        <div className="input_label">Сумма</div>
                                        <input name="amount" type="number"/>
                                        <div className="input_placeholder">USD</div>
                                    </div>
                                    <div className="input_cover">
                                        <div className="input_label">Держатель карты</div>
                                        <input name="cardOwner" type="text"/>
                                    </div>
                                    <div className="input_cover">
                                        <div className="input_label">Номер карты</div>
                                        <input name="cardNumber" type="number"/>
                                    </div>
                                </div>
                                <button className="btn btn_blue withdraw_btn">Вывести →</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content__mid-bottom">
                    <div className="content__mid-col withdraw__questions">
                        <ul className="withdraw__questions-tabs">
                            <li className=""><a href="#tab1_withdraw">Как вывести деньги со счета?
                                →</a></li>
                            <li><a href="#tab2_withdraw">Нужно ли мне проходить верефикацию? →</a></li>
                            <li><a href="#tab3_withdraw">Сколько времени занимает вывод средств? →</a>
                            </li>
                            <li><a href="#tab4_withdraw">Существует ли комиссия при выводе средств?
                                →</a></li>
                        </ul>
                    </div>
                    <div className="content__mid-col withdraw__answers">

                        <div className="tab_container">
                            <div className="withdraw__tab_content" id="tab1_withdraw">
                                <div className="withdraw__answers-item">
                                    <div className="item__header">
                                        <div className="header__left">
                                            <div className="item__header-icon"><img src="/icons/arrow_left.svg"
                                                                                    alt="arrow_left.svg"/></div>
                                            <div className="item__header-title">Как вывести деньги со счета?
                                            </div>
                                        </div>
                                        <div className="header__right tab_close">X</div>
                                    </div>
                                    <div className="item__body">
                                        <p>
                                            Процедура вывода капитала предельно проста и совершается
                                            через Ваш личный кабинет.
                                        </p>
                                        <p>
                                            Выберите платежный метод, введите доступную сумму для вывода
                                            и создайте заявку.
                                        </p>
                                        <p>
                                            Когда речь идет о выводе достаточно крупной суммы, Компания
                                            может запросить верификацию (верификация запрашивается на
                                            личное усмотрение Компании), вот почему очень важно
                                            регистрировать счет лично на себя, чтобы в любой момент
                                            время подтвердить свои права на него.
                                        </p>
                                        <p>
                                            Если сумма Вашего вывода меньше 10.000$, тогда верефикацию
                                            проходить не требуется.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="withdraw__tab_content" id="tab2_withdraw">
                                <div className="withdraw__answers-item">
                                    <div className="item__header">
                                        <div className="header__left">
                                            <div className="item__header-icon"><img src="/icons/arrow_left.svg"
                                                                                    alt="arrow_left.svg"/></div>
                                            <div className="item__header-title">Нужно ли мне проходить
                                                верификацию?
                                            </div>
                                        </div>
                                        <div className="header__right tab_close">X</div>
                                    </div>
                                    <div className="item__body">
                                        <p>
                                            В случае возникновения необходимости пройти верификацию Вы
                                            получите соответствующее уведомление на электронную почту
                                            и/или смс-оповещение.

                                        </p>
                                        <p>

                                            При этом необходимо иметь в виду, что компания использует те
                                            конкретные данные (в частности, адрес электронной почты и
                                            телефон), которые вы указали при регистрации, поэтому крайне
                                            важно предоставлять достоверные и актуальные данные.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="withdraw__tab_content" id="tab3_withdraw">
                                <div className="withdraw__answers-item">
                                    <div className="item__header">
                                        <div className="header__left">
                                            <div className="item__header-icon"><img src="/icons/arrow_left.svg"
                                                                                    alt="arrow_left.svg"/></div>
                                            <div className="item__header-title">Сколько времени занимает вывод
                                                средств?
                                            </div>
                                        </div>
                                        <div className="header__right tab_close">X</div>
                                    </div>
                                    <div className="item__body">
                                        <p>
                                            В среднем процедура вывода средств занимает от одного до
                                            пяти дней с даты получения соответствующей заявки Клиента и
                                            зависит только от объема одновременно обрабатываемых заявок.
                                            Компания всегда старается производить выплаты
                                            непосредственно в день поступления запроса от Клиента.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="withdraw__tab_content" id="tab4_withdraw">
                                <div className="withdraw__answers-item">
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


               {/* <div className="column">
                    <div className="head">Детали платежа</div>
                    <div className="body">

                        <div className="field">
                            <div className="title">Платежная система</div>
                            <input
                                type="text"
                                defaultValue="Visa / Mastercard"
                                disabled="disabled"
                            />
                        </div>

                        <div className="field">
                            <div className="title">Номер карты</div>
                            <input
                                type="text"
                                defaultValue={cardNumber}
                                onChange={e => this.setState({cardNumber: e.target.value})}
                            />
                        </div>

                        <div className="field">
                            <div className="title">Владелец карты</div>
                            <input
                                type="text"
                                defaultValue={cardHolder}
                                onChange={e => this.setState({cardHolder: e.target.value})}
                            />
                        </div>

                        <div className="field">
                            <div className="title">Сумма вывода средств</div>
                            <input
                                type="number"
                                min={min_order_amount}
                                step="1"
                                placeholder="Сумма"
                                value={orderAmount}
                                onChange={e => this.setState({orderAmount: e.target.value})}
                            />
                            <div className="addon icon">$</div>
                        </div>

                        <div className="desc">Деньги спишутся со счета в момент отправки заявки</div>
                        <div className="desc">Обработка заявки в течение 3-х рабочих дней</div>
                        <div className="desc">Может взиматься комиссия за вывод средств</div>
                    </div>
                </div>

                <div className="column small info-blocks">
                    <div className="body">

                        <div className="info-block">
                            <div className="title">Доступные средства</div>
                            <div className="value">{balance} $</div>
                        </div>

                        <div className="info-block">
                            <div className="title">Минимальная сумма вывода</div>
                            <div className="value">{min_order_amount} $</div>
                        </div>

                        <button
                            className="btn btn-blue send"
                            disabled={!this.allowSend ? 'disabled' : ''}
                            onClick={() => this.sendOutput()}
                        >Вывести
                        </button>

                    </div>
                </div>*/}

            </div>
    )
    }

    }

    PaymentOutput.propTypes = {
        payment: PropTypes.object.isRequired,
        output: PropTypes.func.isRequired,
    }

    const mapStateToProps = (state) => ({
        payment: state.payment
    })

    const mapDispatchToProps = (dispatch) => ({
        output: (data) => dispatch(output(data)),
        getBalance: (data) => dispatch(getBalance(data))
    })

    export default connect(mapStateToProps, mapDispatchToProps)(PaymentOutput);