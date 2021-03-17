import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CabinetTable from '../../elements/cabinetTable'

import { getListCabinet } from '../../../actions/adminPaymentOutputs'

import './index.scss'

class CabinetOutputs extends React.Component {

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
		} = this.props.adminPaymentOutputs.cabinet_outputs;

		return (
			<div className="cabinet-outputs">
				<CabinetTable 
					{...this.props}
					filter={false}
					isLoaded={isLoaded}
					emptyTableBodyText="У Вас еще нет данных"
					thead={
						<tr>
							<th>Ордер</th>
							<th>UID пользователя</th>
							<th>Номер карты</th>
							<th>Владелец карты</th>
							<th>Сумма к выводу</th>
							<th>Статус</th>
							<th>Дата</th>
						</tr>
					}
					countItems={count}
					tbody={this.tableBody(list)}
					requestToServer={params => this.props.getListCabinet(params)}
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
			
			return (
				<tr key={key}>
					<td>{item.order_id}</td>
					<td>{item.uid}</td>
					<td>{item.card_number}</td>
					<td>{item.card_holder}</td>
					<td>{item.amount}</td>
					<td>{status}</td>
					<td>
						<Moment locale="ru" format="YYYY-MM-DD HH:mm:ss" unix local ago>{item.date}</Moment>
					</td>
				</tr>
			)
		});

		return readyList;
	}

}

CabinetOutputs.propTypes = {
	getListCabinet: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	adminPaymentOutputs: state.adminPaymentOutputs,
})

const mapDispatchToProps = (dispatch) => ({
	getListCabinet: (data) => dispatch(getListCabinet(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CabinetOutputs);