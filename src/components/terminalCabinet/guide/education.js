import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CabinetTable from '../../elements/cabinetTable'

import { historyOutputs } from '../../../actions/payment'

class HistoryOutputs extends React.Component {

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
		} = this.props.payment.history_outputs;

		return (
			<div className="history-increases">
				<CabinetTable 
					{...this.props}
					isLoaded={isLoaded}
					thead={
						<tr>
							<th className="order">Ордер</th>
							<th>Дата</th>
							<th>Бонус</th>
							<th>Сумма</th>
							<th>Статус</th>
						</tr>
					}
					countItems={count}
					tbody={this.tableBody(list)}
					requestToServer={params => this.props.historyOutputs(params)}
				/>
			</div>
		)
	}

	tableBody(list) {
		if(!list.length) return false;

		let readyList = list.map((item, key) => {
			let status;

			switch(item.status) {
				case 'in_progress': status = 'В обработке'; break;
				case 'failed': status = 'Не выполнено'; break;
				case 'success': status = 'Успешно'; break;
				default: break;
			}
			
			let bonus = +item.payment_bonus;

			return (
				<tr key={key}>
					<td>{item.order_id}</td>
					<td>
						<Moment locale="ru" format="YYYY/MM/DD HH:mm:ss" unix local ago>{item.date}</Moment>
					</td>
					<td>{bonus.toFixed(2)}$</td>
					<td>{item.amount.toFixed(2)}$</td>
					<td>{status}</td>
				</tr>
			)
		});

		return readyList;
	}

}

HistoryOutputs.propTypes = {
	historyOutputs: PropTypes.func.isRequired,
	payment: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	payment: state.payment
})

const mapDispatchToProps = (dispatch) => ({
	historyOutputs: (data) => dispatch(historyOutputs(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HistoryOutputs);