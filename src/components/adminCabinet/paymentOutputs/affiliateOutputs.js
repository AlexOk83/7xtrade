import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CabinetTable from '../../elements/cabinetTable'

import { getListAffiliate } from '../../../actions/adminPaymentOutputs'

import './index.scss'

class AffiliateOutputs extends React.Component {

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
		} = this.props.adminPaymentOutputs.affiliate_outputs;

		return (
			<div className="affiliate-outputs">
				<CabinetTable 
					{...this.props}
					filter={false}
					isLoaded={isLoaded}
					emptyTableBodyText="У Вас еще нет данных"
					thead={
						<tr>
							<th>Ордер</th>
							<th>UID пользователя</th>
							<th>Номер кошелька</th>
							<th>Вид кошелька</th>
							<th>Сумма к выводу</th>
							<th>Комментарий</th>
							<th>Статус</th>
							<th>Дата</th>
						</tr>
					}
					countItems={count}
					tbody={this.tableBody(list)}
					requestToServer={params => this.props.getListAffiliate(params)}
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
					<td>{item.affiliate_wallet_type_name}</td>
					<td>{item.amount}</td>
					<td>{item.comment}</td>
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

AffiliateOutputs.propTypes = {
	getListAffiliate: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	adminPaymentOutputs: state.adminPaymentOutputs,
})

const mapDispatchToProps = (dispatch) => ({
	getListAffiliate: (data) => dispatch(getListAffiliate(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AffiliateOutputs);