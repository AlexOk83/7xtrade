import React from 'react'
import { Link } from 'react-router-dom'
import { history } from '../../../../store'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import HistoryOutputs from './historyOutputs'
import HistoryIncreases from './historyIncreases'
import './index.scss'


class PaymentHistory extends React.Component {

	constructor(props) {
		super(props);

		
		this.state = {
			url: '/cabinet/history-payments',
			tabIndex: 0,
			tabName: null,
		};
	}

	switchPage(tabName) {
		switch(tabName) {
			case 'increase': 
				this.setState({
					tabIndex: 0,
					tabName: tabName
				}); 
				break;
			case 'output': 
				this.setState({
					tabIndex: 1,
					tabName: tabName
				}); 
				break;
			default: 
				let newTabName = 'increase';

				this.setState({
					tabIndex: 0,
					tabName: newTabName
				})

				history.replace(this.state.url + '/' + newTabName);
				break;
		}
	}

	componentDidMount() {
		let { page } = this.props.match.params;

		this.switchPage(page);
	}

	componentDidUpdate(prevProps) {
		let { page } = this.props.match.params;

		if(this.state.tabName !== page && page) this.switchPage(page);
	}

	render() {
		const {
			url,
			tabIndex,
		} = this.state;

		return (
			<div className="payment-history">
				<div className="history__header">
					<div className="history__select">
						<select className="historyOperationType_select" id="historyOperationType">
							<option selected value="WITHDRAW">
								Вывод
							</option>
							<option value="REFILL">Пополнение</option>
						</select>
					</div>
					<div className="history__pagination">
						<button className="history__pagination-prev">←&#160;&#160;Предыдущая</button>
						<div className="history__pagination-value">1/1</div>
						<button className="history__pagination-next">Следущая&#160;&#160;→</button>
					</div>
				</div>
				<div className="history__content">
					<div className="history__table">
						<div className="history__table-header">
							<div className="header__item">Ордер</div>
							<div className="header__item">Дата и время</div>
							<div className="header__item">Сумма</div>
							<div className="header__item">Статус</div>
						</div>
						<div className="history__table-body">
							<div className="history__table-item">
								<div className="item-col order">
									<div className="order__value">a59a66dc-54e4-11eb-a312-901b0ea4a9b0</div>
								</div>
								<div className="item-col dateTime">
									<div className="dateTime__value">12.01.2021 14:43:19</div>
								</div>
								<div className="item-col amount">
									<div className="amount__value">666.66 $</div>
								</div>
								<div className="item-col status">
									<div className="status__value status__label label__done">Выплачено</div>
								</div>
							</div>
							<div className="history__table-item">
								<div className="item-col order">
									<div className="order__value">a59a66dc-54e4-11eb-a312-901b0ea4a9b0</div>
								</div>
								<div className="item-col dateTime">
									<div className="dateTime__value">12.01.2021 14:43:19</div>
								</div>
								<div className="item-col amount">
									<div className="amount__value">666.66 $</div>
								</div>
								<div className="item-col status">
									<div className="status__value status__label label__progress">В
										обработке
									</div>
								</div>
							</div>
							<div className="history__table-item">
								<div className="item-col order">
									<div className="order__value">a59a66dc-54e4-11eb-a312-901b0ea4a9b0</div>
								</div>
								<div className="item-col dateTime">
									<div className="dateTime__value">12.01.2021 14:43:19</div>
								</div>
								<div className="item-col amount">
									<div className="amount__value">666.66 $</div>
								</div>
								<div className="item-col status">
									<div className="status__value status__label label__refused">Отказано
									</div>
								</div>
							</div>
							<div className="history__table-item">
								<div className="item-col order">
									<div className="order__value">a59a66dc-54e4-11eb-a312-901b0ea4a9b0</div>
								</div>
								<div className="item-col dateTime">
									<div className="dateTime__value">12.01.2021 14:43:19</div>
								</div>
								<div className="item-col amount">
									<div className="amount__value">666.66 $</div>
								</div>
								<div className="item-col status">
									<div className="status__value status__label label__progress">В
										обработке
									</div>
								</div>
							</div>
							<div className="history__table-item">
								<div className="item-col order">
									<div className="order__value">a59a66dc-54e4-11eb-a312-901b0ea4a9b0</div>
								</div>
								<div className="item-col dateTime">
									<div className="dateTime__value">12.01.2021 14:43:19</div>
								</div>
								<div className="item-col amount">
									<div className="amount__value">666.66 $</div>
								</div>
								<div className="item-col status">
									<div className="status__value status__label label__done">Выплачено</div>
								</div>
							</div>
							<div className="history__table-item">
								<div className="item-col order">
									<div className="order__value">a59a66dc-54e4-11eb-a312-901b0ea4a9b0</div>
								</div>
								<div className="item-col dateTime">
									<div className="dateTime__value">12.01.2021 14:43:19</div>
								</div>
								<div className="item-col amount">
									<div className="amount__value">666.66 $</div>
								</div>
								<div className="item-col status">
									<div className="status__value status__label label__progress">В
										обработке
									</div>
								</div>
							</div>
							<div className="history__table-item">
								<div className="item-col order">
									<div className="order__value">a59a66dc-54e4-11eb-a312-901b0ea4a9b0</div>
								</div>
								<div className="item-col dateTime">
									<div className="dateTime__value">12.01.2021 14:43:19</div>
								</div>
								<div className="item-col amount">
									<div className="amount__value">666.66 $</div>
								</div>
								<div className="item-col status">
									<div className="status__value status__label label__refused">Отказано
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>





				{/*<div className="body">
					<Tabs 
						selectedIndex={tabIndex} 
						onSelect={tabIndex => this.setState({tabIndex})}
					>
						<TabList className="menu">
							<Tab>
								<Link to={`${url}/increase`}>
									Пополнения
								</Link>
							</Tab>
							<Tab>
								<Link to={`${url}/output`}>
									Выводы
								</Link>
							</Tab>
						</TabList>
								
						<TabPanel>
							<HistoryIncreases {...this.props} />
						</TabPanel>

						<TabPanel>
							<HistoryOutputs {...this.props} />
						</TabPanel>

					</Tabs>

				</div>*/}
			</div>
		)
	}

}

export default PaymentHistory;