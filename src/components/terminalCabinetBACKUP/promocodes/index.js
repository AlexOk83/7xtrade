import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CabinetTable from '../../elements/cabinetTable'

import { history } from '../../../actions/promocodes'

import './index.scss'

class Promocodes extends React.Component {

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
		} = this.props.promocodes;

		return (
			<div className="promocodes">
				<CabinetTable 
					{...this.props}
					isLoaded={isLoaded}
					thead={
						<tr>
							<th>Промо-код</th>
							<th>Бонус</th>
							<th>Дата</th>
						</tr>
					}
					countItems={count}
					tbody={this.tableBody(list)}
					requestToServer={params => this.props.history(params)}
				/>
			</div>
		)
	}

	tableBody(list) {
		if(!list.length) return false;

		let readyList = list.map((item, key) => {
			return (
				<tr key={key}>
					<td>{item.name}</td>
					<td>{item.payment_bonus.toFixed(2)}</td>
					<td>
						<Moment locale="ru" format="YYYY-MM-DD HH:mm:ss" unix local ago>{item.date}</Moment>
					</td>
				</tr>
			)
		});

		return readyList;
	}

}

Promocodes.propTypes = {
	history: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	promocodes: state.promocodes,
})

const mapDispatchToProps = (dispatch) => ({
	history: (data) => dispatch(history(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Promocodes);