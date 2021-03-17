import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CabinetTable from '../../elements/cabinetTable'

import { 
	getList,
	addAsset,
	deleteAsset,
	updateAsset,
	addCategory,
	getCategories,
	deleteCategory,
	updateCategory
} from '../../../actions/adminAssets'

import './index.scss'

class Assets extends React.Component {

	constructor(props) {
		super(props);

	    this.state = {
	    	itemEditId: null,
	    	categoryEditId: null
	    };
	}

	changeField(e) {
		let { name, value } = e.target;

		this.setState({[name]: value});
	}

	render() {
		const {
			assets,
			categories
		} = this.props.adminAssets;

		return (
			<div className="assets">

				<CabinetTable 
					{...this.props}
					filter={false}
					isLoaded={categories.isLoaded}
					title="Категории"
					emptyTableBodyText="У Вас еще нет данных"
					thead={
						<tr>
							<th>Название</th>
							<th>Приоритет</th>
							<th>Доступен</th>
							<th>{/*icon edit*/}</th>
						</tr>
					}
					countItems={categories.count}
					tbody={this.tableBodyCategories(categories.list)}
					requestToServer={params => this.props.getCategories({})}
				>
					<button className="btn-action" onClick={() => this.props.addCategory()}>Добавить категорию</button>
				</CabinetTable>

				<CabinetTable 
					{...this.props}
					filter={false}
					isLoaded={assets.isLoaded}
					title="Активы"
					emptyTableBodyText="У Вас еще нет данных"
					thead={
						<tr>
							<th>Название</th>
							<th>Биржа</th>
							<th>Название на бирже</th>
							<th>Доходность</th>
							<th>Категория</th>
							<th>Приоритет</th>
							<th>Доступен</th>
							<th>{/*icon edit*/}</th>
						</tr>
					}
					countItems={assets.count}
					tbody={this.tableBody(assets.list)}
					requestToServer={params => this.props.getList(params)}
				>
					<button className="btn-action" onClick={() => this.props.addAsset()}>Добавить актив</button>
				</CabinetTable>
			</div>
		)
	}

	tableBodyCategories(list) {
		if(!list.length) return false;

		let { 
			categoryEditId
		} = this.state;

		let readyList = list.map((item, key) => {
			let itemEdit = categoryEditId === item.id;

			return (
				<tr key={key}>
					<td className={itemEdit ? 'edit' : ''}>
						{itemEdit ? <input name="categoryName" defaultValue={item.name} onChange={e => this.changeField(e)}/> : item.name}
					</td>
					<td className={itemEdit ? 'edit' : ''}>
						{itemEdit ? <input name="categoryPriority" defaultValue={item.priority} onChange={e => this.changeField(e)}/> : item.priority}
					</td>
					<td className={itemEdit ? 'edit' : ''}>
						{itemEdit ? <input type="checkbox" checked={this.state.categoryHidden ? 'checked' : ''} onChange={e => this.setState({categoryHidden: !this.state.categoryHidden})}/> : <div className={`fa ${!item.hidden ? 'fa-check' : 'fa-times'}`}/>}
					</td>
					<td className="icons">
						{!itemEdit ? <div className="fa fa-pencil" onClick={() => this.startCategoryItemEdit(item)}/> : false}
						{itemEdit ? <div className="fa fa-check ok" onClick={() => this.sendDataCategory()}/> : false}
						{itemEdit ? <div className="fa fa-times cancel" onClick={() => this.cancelCategoryItemEdit()}/> : false}
						{itemEdit ? <div className="fa fa-trash" onClick={() => this.props.deleteCategory({id: item.id})}/> : false}
					</td>
				</tr>
			)
		});

		return readyList;
	}

	tableBody(list) {
		if(!list.length && !this.props.adminAssets.categories.list) return false;

		let { 
			itemEditId
		} = this.state;

		let readyList = list.map((item, key) => {
			let itemEdit = itemEditId === item.id;

			return (
				<tr key={key}>
					<td className={itemEdit ? 'edit' : ''}>
						{itemEdit ? <input name="itemName" defaultValue={item.name} onChange={e => this.changeField(e)}/> : item.name}
					</td>
					<td className={itemEdit ? 'edit' : ''}>
						{itemEdit ? <input name="itemExchange" defaultValue={item.exchange} onChange={e => this.changeField(e)}/> : item.exchange}
					</td>
					<td className={itemEdit ? 'edit' : ''}>
						{itemEdit ? <input name="itemSymbol" defaultValue={item.symbol} onChange={e => this.changeField(e)}/> : item.symbol}
					</td>
					<td className={itemEdit ? 'edit' : ''}>
						{itemEdit ? <input name="itemYield" defaultValue={item.yield} onChange={e => this.changeField(e)}/> : item.yield}
					</td>
					<td>
						{itemEdit ?
							<select className="input" defaultValue={0} onChange={e => this.setState({itemCategory: e.target.value})}>
								<option value={0} disabled="disabled">Выберите категорию</option>
								{this.props.adminAssets.categories.list.map((category, key) => (
									<option key={key} value={category.id}>
										{category.name}
									</option>
								))}
							</select>
						: item.category_name}
					</td>
					<td className={itemEdit ? 'edit' : ''}>
						{itemEdit ? <input name="itemPriority" defaultValue={item.priority} onChange={e => this.changeField(e)}/> : item.priority}
					</td>
					<td className={itemEdit ? 'edit' : ''}>
						{itemEdit ? <input type="checkbox" checked={this.state.itemHidden ? 'checked' : ''} onChange={e => this.setState({itemHidden: !this.state.itemHidden})}/> : <div className={`fa ${!item.hidden ? 'fa-check' : 'fa-times'}`}/>}
					</td>
					<td className="icons">
						{!itemEdit ? <div className="fa fa-pencil" onClick={() => this.startItemEdit(item)}/> : false}
						{itemEdit ? <div className="fa fa-check ok" onClick={() => this.sendData()}/> : false}
						{itemEdit ? <div className="fa fa-times cancel" onClick={() => this.cancelItemEdit()}/> : false}
						{itemEdit ? <div className="fa fa-trash" onClick={() => this.props.deleteAsset({id: item.id})}/> : false}
					</td>
				</tr>
			)
		});

		return readyList;
	}

	startCategoryItemEdit(item) {
		this.cancelItemEdit();

		this.setState({
			categoryName: item.name,
			categoryHidden: !item.hidden,
			categoryPriority: item.priority,
			categoryEditId: item.id
		})
	}

	cancelCategoryItemEdit() {
		this.setState({
			categoryName: null,
			categoryHidden: null,
			categoryPriority: null,
			categoryEditId: null
		})
	}

	sendDataCategory() {
		let {
			categoryName,
			categoryHidden,
			categoryPriority,
			categoryEditId,
		} = this.state;

		this.props.updateCategory({
			id: categoryEditId,
			name: categoryName,
			hidden: !categoryHidden,
			priority: categoryPriority,
		});

		this.cancelCategoryItemEdit();
	}


	startItemEdit(item) {
		this.cancelCategoryItemEdit();

		this.setState({
			itemName: item.name,
			itemExchange: item.exchange,
			itemSymbol: item.symbol,
			itemYield: item.yield,
			itemCategory: item.category_id,
			itemHidden: !item.hidden,
			itemPriority: item.priority,
			itemEditId: item.id
		})
	}

	cancelItemEdit() {
		this.setState({
			itemName: null,
			itemExchange: null,
			itemSymbol: null,
			itemYield: null,
			itemCategory: null,
			itemHidden: null,
			itemPriority: null,
			itemEditId: null,
		})
	}

	sendData() {
		let {
			itemName,
			itemYield,
			itemSymbol,
			itemHidden,
			itemEditId,
			itemExchange,
			itemCategory,
			itemPriority,
		} = this.state;

		this.props.updateAsset({
			id: itemEditId,
			name: itemName,
			yield: itemYield,
			symbol: itemSymbol,
			hidden: !itemHidden,
			exchange: itemExchange,
			priority: itemPriority,
			category_id: itemCategory
		});

		this.cancelItemEdit();
	}

}

Assets.propTypes = {
	getList: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	adminAssets: state.adminAssets,
})

const mapDispatchToProps = (dispatch) => ({
	getList: (data) => dispatch(getList(data)),
	addAsset: (data) => dispatch(addAsset(data)),
	updateAsset: (data) => dispatch(updateAsset(data)),
	deleteAsset: (data) => dispatch(deleteAsset(data)),
	addCategory: (data) => dispatch(addCategory(data)),
	getCategories: (data) => dispatch(getCategories(data)),
	deleteCategory: (data) => dispatch(deleteCategory(data)),
	updateCategory: (data) => dispatch(updateCategory(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Assets);