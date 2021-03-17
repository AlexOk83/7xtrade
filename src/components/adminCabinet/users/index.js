import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CabinetTable from '../../elements/cabinetTable'

import { 
	getList,
	updateUser
} from '../../../actions/adminUsers'

import './index.scss'

class Users extends React.Component {

	constructor(props) {
		super(props);

	    this.state = {
	    	name: null,
			email: null,
			surname: null,
			country: null,
			dollars: null,
			itemEditId: null
	    };
	}

	render() {
		const { 
			list,
			count,
			isLoaded
		} = this.props.adminUsers;

		return (
			<div className="users">
				<CabinetTable 
					{...this.props}
					filter={false}
					isLoaded={isLoaded}
					emptyTableBodyText="У Вас еще нет данных"
					thead={
						<tr>
							<th>UID</th>
							<th>Email</th>
							<th>Имя</th>
							<th>Фамилия</th>
							<th>Страна</th>
							<th>Счет</th>
							<th>Сделок</th>
							<th>Побед</th>
							<th>Поражений</th>
							<th>Возвратов</th>
							<th>Дата регистрации</th>
							<th>{/*icon edit*/}</th>
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

		let { itemEditId } = this.state;

		let readyList = list.map((item, key) => {
			let itemEdit = itemEditId === item.id;

			return (
				<tr key={key}>
					<td>{item.uid}</td>
					<td className={itemEdit ? 'edit' : ''}>{itemEdit ? <input name="email" defaultValue={item.email} onChange={e => this.changeField(e)}/> : item.email}</td>
					<td className={itemEdit ? 'edit' : ''}>{itemEdit ? <input name="name" defaultValue={item.name} onChange={e => this.changeField(e)}/> : item.name}</td>
					<td className={itemEdit ? 'edit' : ''}>{itemEdit ? <input name="surname" defaultValue={item.surname} onChange={e => this.changeField(e)}/> : item.surname}</td>
					<td className={itemEdit ? 'edit' : ''}>{itemEdit ? <input name="country" defaultValue={item.country} onChange={e => this.changeField(e)}/> : item.country}</td>
					<td className={itemEdit ? 'edit' : ''}>{itemEdit ? <input name="dollars" defaultValue={item.dollars} onChange={e => this.changeField(e)}/> : item.dollars}$</td>
					<td>{item.count_deals}</td>
					<td>{item.count_deals_win}</td>
					<td>{item.count_deals_loss}</td>
					<td>{item.count_deals_draw}</td>
					<td>
						<Moment locale="ru" format="YYYY-MM-DD HH:mm:ss" unix local ago>{item.create_date}</Moment>
					</td>
					<td className="icons">
						{!itemEdit ? <div className="fa fa-pencil" onClick={() => this.startItemEdit(item)}/> : false}
						{itemEdit ? <div className="fa fa-check ok" onClick={() => this.sendData()}/> : false}
						{itemEdit ? <div className="fa fa-times cancel" onClick={() => this.cancelItemEdit()}/> : false}
					</td>
				</tr>
			)
		});

		return readyList;
	}

	startItemEdit(item) {
		this.setState({
			name: item.name,
			email: item.email,
			surname: item.surname,
			country: item.country,
			dollars: item.dollars,
			itemEditId: item.id
		})
	}

	cancelItemEdit() {
		this.setState({
			name: null,
			email: null,
			surname: null,
			country: null,
			dollars: null,
			itemEditId: null
		})
	}

	changeField(e) {
		let { name, value } = e.target;

		this.setState({[name]: value});
	}

	sendData() {
		let {
			name,
			email,
			surname,
			country,
			dollars,
			itemEditId,
		} = this.state;

		this.props.updateUser({
			id: itemEditId,
			name: name,
			email: email,
			surname: surname,
			country: country,
			dollars: dollars
		});

		this.cancelItemEdit();
	}
}

Users.propTypes = {
	getList: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	adminUsers: state.adminUsers,
})

const mapDispatchToProps = (dispatch) => ({
	getList: (data) => dispatch(getList(data)),
	updateUser: (data) => dispatch(updateUser(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);