import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CabinetTable from '../../elements/cabinetTable'

import { getList } from '../../../actions/adminDeals'

import './index.scss'

class Deals extends React.Component {

	constructor(props) {
		super(props);

	    this.state = {

	    };
	}

	render() {
		const { 
			list,
			count,
			isLoaded
		} = this.props.adminDeals;

		return (
			<div className="deals">
				<CabinetTable 
					{...this.props}
					filter={false}
					isLoaded={isLoaded}
					emptyTableBodyText="У Вас еще нет данных"
					thead={
						<tr>
							<th>Ордер</th>
							<th>UID игрока</th>
							<th>График</th>
							<th>Тип</th>
							<th>Ставка</th>
							<th>Время</th>
							<th>Доход</th>
							<th>Доходность</th>
							<th>Статус</th>
							<th>Дата</th>
						</tr>
					}
					countItems={count}
					tbody={this.tableBody(list)}
					requestToServer={params => this.props.getList(params)}
				/>
			</div>
		)
	}

	tableBody(list) {
		if(!list.length) return false;

		let readyList = list.map((item, key) => {
			return (
				<tr key={key}>
					<td>{item.order_id}</td>
					<td>{item.uid}</td>
					<td>{item.chart_name}</td>
					<td>
						<div className={`fa fa-arrow-${item.type === 'up' ? 'up' : 'down'} arrow`}/>
					</td>
					<td>{item.amount}$</td>
					<td>{item.minutes} мин</td>
					<td>{item.income}$</td>
					<td>{item.yield}%</td>
					<td>
						{item.status === 'win' ? 'С прибылью' : false}
						{item.status === 'loss' ? 'С убытком' : false}
						{item.status === 'draw' ? 'Возврат': false}
					</td>
					<td>
						<Moment locale="ru" format="YYYY-MM-DD HH:mm:ss" unix local ago>{item.date}</Moment>
					</td>
				</tr>
			)
		});

		return readyList;
	}

}

Deals.propTypes = {
	getList: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	adminDeals: state.adminDeals,
})

const mapDispatchToProps = (dispatch) => ({
	getList: (data) => dispatch(getList(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Deals);