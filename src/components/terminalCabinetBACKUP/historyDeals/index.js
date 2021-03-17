import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CabinetTable from '../../elements/cabinetTable'
import CurrentChartInfo from '../../terminal/terminalHeader/currentChartInfo'

import { getList } from '../../../actions/deals'

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