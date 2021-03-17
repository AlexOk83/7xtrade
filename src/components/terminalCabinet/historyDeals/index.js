import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CabinetTable from '../../elements/cabinetTable'
import CurrentChartInfo from '../../terminal/terminalHeader/currentChartInfo'

import { getList } from '../../../actions/deals'

import './index.scss'

class HistoryDeals extends React.Component {

	constructor(props) {
		super(props);

	    this.state = {
	    	walletType: 'dollars'
	    };
	}

	changeWalletType() {
		let newWalletType = this.state.walletType === 'dollars' ? 'virtual_dollars' : 'dollars';

		this.setState({walletType: newWalletType});
		this.props.getList({wallet: newWalletType});
	}

	render() {
		const {
			walletType
		} = this.state;

		const { 
			list,
			count,
			isLoaded
		} = this.props.deals;

		let titleWallet;

		switch(walletType) {
			case 'dollars': titleWallet = 'Реальный счет'; break;
			case 'virtual_dollars': titleWallet = 'Демо счет'; break;
			default: titleWallet = 'Реальный счет'; break;
		}

		return (
			<div className="history-deals">
				<div className="deals__header">
					<div className="deals__select">
						{titleWallet}
						<div className="fa fa-exchange icon" onClick={() => this.changeWalletType()}/>

						<select className="dealsAccType_select" id="dealsAccType">
							<option selected value="DEMO">
								Демо счет
							</option>
							<option value="ENG">Реальный счет</option>
						</select>
					</div>
					<div className="deals__pagination">
						<button className="deals__pagination-prev">←&#160;&#160;Предыдущая</button>
						<div className="deals__pagination-value">1/1</div>
						<button className="deals__pagination-next">Следущая&#160;&#160;→</button>
					</div>
				</div>
				<div className="deals__content">
					<div className="deals__table">
						<div className="deals__table-header">
							<div className="header__left">
								<div className="header__left-item">Инструмент</div>
								<div className="header__left-item">Информация</div>
								<div className="header__left-item">Котировка, открытие</div>
								<div className="header__left-item">Котировка, закрытие</div>
								<div className="header__left-item">Сумма</div>
							</div>
							<div className="header__right">
								<div className="header__right-item">Результат</div>
							</div>
						</div>
						<div className="deals__table-body">
							<div className="deals__table-item">
								<div className="item-left">
									<div className="item-left-col tool">
										<img src="/icons/profile/HKD_USD.png"
											 alt="Валютная пара HKD/USD"/>
											<div className="tool__value">HKD/USD</div>
									</div>
									<div className="item-left-col information">
										<div className="information__value">87%</div>
										<div className="information__prop">
											8901d24d-c892-49be-8a0c-73ffb10489cb
										</div>
									</div>
									<div className="item-left-col quot_open">
										<div className="quot_open__value">1.56576</div>
										<div className="quot_open__prop">14.01.2021 11:53:14.422</div>
									</div>
									<div className="item-left-col quot_close">
										<div className="quot_close__value">1.56576</div>
										<div className="quot_close__prop">14.01.2021 11:53:14.422</div>
									</div>
									<div className="item-left-col amount">
										<div className="amount__icon amount__icon-down">
											<img src="/icons/profile/amount_index.png" alt=""/>
										</div>
										<div className="amount__value">1.00$</div>
									</div>
								</div>
								<div className="item-right">
									<div className="item-right-col result">
										<div className="result__value">0.00$</div>
									</div>
								</div>

							</div>
							<div className="deals__table-item">
								<div className="item-left">
									<div className="item-left-col tool">
										<img src="/icons/profile/RUR_UAH.png"
											 alt="Валютная пара HKD/USD"/>
											<div className="tool__value">HKD/USD</div>
									</div>
									<div className="item-left-col information">
										<div className="information__value">87%</div>
										<div className="information__prop">
											8901d24d-c892-49be-8a0c-73ffb10489cb
										</div>
									</div>
									<div className="item-left-col quot_open">
										<div className="quot_open__value">1.56576</div>
										<div className="quot_open__prop">14.01.2021 11:53:14.422</div>
									</div>
									<div className="item-left-col quot_close">
										<div className="quot_close__value">1.56576</div>
										<div className="quot_close__prop">14.01.2021 11:53:14.422</div>
									</div>
									<div className="item-left-col amount">
										<div className="amount__icon amount__icon-up">
											<img src="/icons/profile/amount_index.png" alt=""/>
										</div>
										<div className="amount__value">1.00$</div>
									</div>
								</div>
								<div className="item-right">
									<div className="item-right-col result">
										<div className="result__value">0.00$</div>
									</div>
								</div>

							</div>
							<div className="deals__table-item">
								<div className="item-left">
									<div className="item-left-col tool">
										<img src="/icons/profile/RUR_EUR.png"
											 alt="Валютная пара HKD/USD"/>
											<div className="tool__value">HKD/USD</div>
									</div>
									<div className="item-left-col information">
										<div className="information__value">87%</div>
										<div className="information__prop">
											8901d24d-c892-49be-8a0c-73ffb10489cb
										</div>
									</div>
									<div className="item-left-col quot_open">
										<div className="quot_open__value">1.56576</div>
										<div className="quot_open__prop">14.01.2021 11:53:14.422</div>
									</div>
									<div className="item-left-col quot_close">
										<div className="quot_close__value">1.56576</div>
										<div className="quot_close__prop">14.01.2021 11:53:14.422</div>
									</div>
									<div className="item-left-col amount">
										<div className="amount__icon amount__icon-down">
											<img src="/icons/profile/amount_index.png" alt=""/>
										</div>
										<div className="amount__value">1.00$</div>
									</div>
								</div>
								<div className="item-right">
									<div className="item-right-col result">
										<div className="result__value">0.00$</div>
									</div>
								</div>

							</div>
							<div className="deals__table-item">
								<div className="item-left">
									<div className="item-left-col tool">
										<img src="/icons/profile/HKD_USD.png"
											 alt="Валютная пара HKD/USD"/>
											<div className="tool__value">HKD/USD</div>
									</div>
									<div className="item-left-col information">
										<div className="information__value">87%</div>
										<div className="information__prop">
											8901d24d-c892-49be-8a0c-73ffb10489cb
										</div>
									</div>
									<div className="item-left-col quot_open">
										<div className="quot_open__value">1.56576</div>
										<div className="quot_open__prop">14.01.2021 11:53:14.422</div>
									</div>
									<div className="item-left-col quot_close">
										<div className="quot_close__value">1.56576</div>
										<div className="quot_close__prop">14.01.2021 11:53:14.422</div>
									</div>
									<div className="item-left-col amount">
										<div className="amount__icon amount__icon-down">
											<img src="/icons/profile/amount_index.png" alt=""/>
										</div>
										<div className="amount__value">1.00$</div>
									</div>
								</div>
								<div className="item-right">
									<div className="item-right-col result">
										<div className="result__value">0.00$</div>
									</div>
								</div>

							</div>
							<div className="deals__table-item">
								<div className="item-left">
									<div className="item-left-col tool">
										<img src="/icons/profile/RUR_EUR.png"
											 alt="Валютная пара HKD/USD"/>
											<div className="tool__value">HKD/USD</div>
									</div>
									<div className="item-left-col information">
										<div className="information__value">87%</div>
										<div className="information__prop">
											8901d24d-c892-49be-8a0c-73ffb10489cb
										</div>
									</div>
									<div className="item-left-col quot_open">
										<div className="quot_open__value">1.56576</div>
										<div className="quot_open__prop">14.01.2021 11:53:14.422</div>
									</div>
									<div className="item-left-col quot_close">
										<div className="quot_close__value">1.56576</div>
										<div className="quot_close__prop">14.01.2021 11:53:14.422</div>
									</div>
									<div className="item-left-col amount">
										<div className="amount__icon amount__icon-up">
											<img src="/icons/profile/amount_index.png" alt=""/>
										</div>
										<div className="amount__value">1.00$</div>
									</div>
								</div>
								<div className="item-right">
									<div className="item-right-col result">
										<div className="result__value">0.00$</div>
									</div>
								</div>

							</div>
							<div className="deals__table-item">
								<div className="item-left">
									<div className="item-left-col tool">
										<img src="/icons/profile/HKD_USD.png"
											 alt="Валютная пара HKD/USD"/>
											<div className="tool__value">HKD/USD</div>
									</div>
									<div className="item-left-col information">
										<div className="information__value">87%</div>
										<div className="information__prop">
											8901d24d-c892-49be-8a0c-73ffb10489cb
										</div>
									</div>
									<div className="item-left-col quot_open">
										<div className="quot_open__value">1.56576</div>
										<div className="quot_open__prop">14.01.2021 11:53:14.422</div>
									</div>
									<div className="item-left-col quot_close">
										<div className="quot_close__value">1.56576</div>
										<div className="quot_close__prop">14.01.2021 11:53:14.422</div>
									</div>
									<div className="item-left-col amount">
										<div className="amount__icon amount__icon-down">
											<img src="/icons/profile/amount_index.png" alt=""/>
										</div>
										<div className="amount__value">1.00$</div>
									</div>
								</div>
								<div className="item-right">
									<div className="item-right-col result">
										<div className="result__value">0.00$</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="column">
					<div className="head">Персональные данные</div>
					<div className="body">
						<div className="field">
							<div className="title">Тип счета</div>
							<div className="input">
								{titleWallet}
								<div className="fa fa-exchange icon" onClick={() => this.changeWalletType()}/>
							</div>
						</div>
					</div>
				</div>
				<CabinetTable 
					{...this.props}
					isLoaded={isLoaded}
					paginationNextBack={true}
					thead={
						<tr>
							<th className="order">Ордер</th>
							<th className="asset">Инструмент</th>
							<th className="open-price">Котировка, открытие</th>
							<th className="close-price">Котировка, закрытие</th>
							<th className="amount">Сумма</th>
							<th className="profit">Прибыль</th>
						</tr>
					}
					countItems={count}
					tbody={this.tableBody(list)}
					requestToServer={params => this.props.getList({
						...params,
						wallet: walletType
					})}
				/>
			</div>
		)
	}

	tableBody(list) {
		if(!list.length) return false;

		let readyList = list.map((item, key) => {

			let income = item.income.toFixed(2);
			income = item.income > 0 ? `+${income}` : income;

			return (
				<tr key={key}>
					<td>{item.order_id}</td>
					<td>
						<CurrentChartInfo data={item} allowYield={false}/>
					</td>
					<td>
						{item.spot.toFixed(2)}
						<div className="desc">
							<Moment locale="ru" format="YYYY/MM/DD HH:mm:ss" unix local ago>{item.opening_time}</Moment>
						</div>
					</td>
					<td>
						{item.close_spot.toFixed(2)}
						<div className="desc">
							<Moment locale="ru" format="YYYY/MM/DD HH:mm:ss" unix local ago>{item.closing_time}</Moment>
						</div>
					</td>
					<td className="row">
						<span className={`arrow fa fa-arrow-${item.type}`}/>
						<span> {item.amount.toFixed(2)}$</span>
					</td>
					<td>
						<span className={item.status}>{income}$</span>
						<span> ({item.yield}%)</span>
					</td>
				</tr>
			)
		});

		return readyList;
	}

}

HistoryDeals.propTypes = {
	getList: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	deals: state.deals,
})

const mapDispatchToProps = (dispatch) => ({
	getList: (data) => dispatch(getList(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HistoryDeals);