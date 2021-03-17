import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CabinetTable from '../../elements/cabinetTable'

import { history } from '../../../actions/affiliateInvitation'

import './index.scss'

class Stats extends React.Component {

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
		} = this.props.affiliateInvitation.history;

		return (
			<div className="stats">
				<CabinetTable 
					{...this.props}
					isLoaded={isLoaded}
					emptyTableBodyText="У Вас еще нет данных"
					thead={
						<tr>
							<th>UID</th>
							<th>Ссылка</th>
							<th>Программа</th>
							<th>Дата регистрации</th>
							<th>Сумма сделок</th>
							<th>Депозиты трейдера</th>
							<th>Выплаты трейдеру</th>
							<th>Заработано с трейдера</th>
						</tr>
					}
					countItems={count}
					tbody={this.tableBody(list)}
					requestToServer={params => this.props.history(params)}
				/>
			</div>
		)
	}

	collectUrl(code) {
		return window.location.origin + '?invitation_code=' + code;
	}

	tableBody(list) {
		if(!list.length) return false;

		let readyList = list.map((item, key) => {
			let url = this.collectUrl(item.code);

			return (
				<tr key={key}>
					<td>{item.uid}</td>
					<td>{url}</td>
					<td>{item.affiliate_offer_name}</td>
					<td>
						<Moment locale="ru" format="YYYY-MM-DD HH:mm:ss" unix local ago>{item.date}</Moment>
					</td>
					<td>{+item.sum_deals} $</td>
					<td>{+item.sum_payment_increases} $</td>
					<td>{+item.sum_payment_outputs} $</td>
					<td>{+item.sum_income} $</td>
				</tr>
			)
		});

		return readyList;
	}

}

Stats.propTypes = {
	history: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	affiliateInvitation: state.affiliateInvitation,
})

const mapDispatchToProps = (dispatch) => ({
	history: (data) => dispatch(history(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Stats);