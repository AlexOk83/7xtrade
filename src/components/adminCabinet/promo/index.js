import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CabinetTable from '../../elements/cabinetTable'

import { 
	getInfo,
	createLink
} from '../../../actions/affiliateInvitation'

import './index.scss'

class Promo extends React.Component {

	constructor(props) {
		super(props);

	    this.state = {
	    	offerId: 1,
	    };
	}

	render() {
		const { 
			offerId
		} = this.state;

		const { 
			list,
			count,
			offers,
			isLoaded
		} = this.props.affiliateInvitation;

		return (
			<div className="promo">

				<div className="row">
					<div className="panel createLink">
						<div className="head">Создать ссылку</div>
						<div className="body">
							<div className="name">
								<span>Тип предложения</span>
							</div>
							<select value={offerId} onChange={e => this.setState({offerId: e.target.value})}>
								{offers.map((item, key) => <option key={key} value={item.id}>{item.name}</option>)}
							</select>
							<div className="alert-info">
								{offers.map((item, key) => item.id === +offerId ? item.about : '')}
							</div>
							<button 
								className="btn-action ok" 
								onClick={() => this.createLink()}>
								<div className="text">Создать</div>
							</button>
						</div>
					</div>

					<div className="panel full">
						<div className="head">Действующие ссылки</div>
						<div className="body">
							<CabinetTable 
								{...this.props}
								isLoaded={isLoaded}
								filter={false}
								emptyTableBodyText="У Вас еще нет ссылок"
								thead={
									<tr>
										<th>Ссылка</th>
										<th>Тип предложения</th>
										<th>Дата</th>
									</tr>
								}
								countItems={count}
								tbody={this.tableBody(list, offers)}
								requestToServer={params => this.props.getInfo(params)}
							/>
						</div>
					</div>
				</div>

			</div>
		)
	}

	collectUrl(code) {
		return window.location.origin + '?invitation_code=' + code;
	}

	tableBody(list, offers) {
		if(!list.length) return false;

		let readyList = list.map((item, key) => {
			let url = this.collectUrl(item.code);

			return (
				<tr key={key}>
					<td>
						<div className="table-url">
							<input 
								type="text" 
								readOnly={true} 
								value={url}
							/>
							<button onClick={() => this.copyUrl(url)}>
								<div className="fa fa-clipboard"/>
							</button>
						</div>
					</td>
					<td>{offers.map((offer, key) => offer.id === item.offer_id ? offer.name : '')}</td>
					<td>
						<Moment locale="ru" format="YYYY-MM-DD HH:mm:ss" unix local ago>{item.date}</Moment>
					</td>
				</tr>
			)
		});

		return readyList;
	}

	createLink() {
		const { offerId } = this.state;

		this.props.createLink({
			offer_id: offerId
		})
	}

	copyUrl(data) {
		var textField = document.createElement('textarea')
    	textField.innerText = data;
		document.body.appendChild(textField)
	    textField.select()
	    document.execCommand('copy')
	    textField.remove()
	}

}

Promo.propTypes = {
	getInfo: PropTypes.func.isRequired,
	createLink: PropTypes.func.isRequired,
	affiliateInvitation: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	affiliateInvitation: state.affiliateInvitation,
})

const mapDispatchToProps = (dispatch) => ({
	getInfo: (data) => dispatch(getInfo(data)),
	createLink: (data) => dispatch(createLink(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Promo);