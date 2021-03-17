import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { getList } from '../../../../actions/deals'

import Timer from './timer'
import CurrentChartInfo from '../../terminalHeader/currentChartInfo'

import DivLink from '../../../elements/divLink'

import './index.scss'
import 'moment-timezone'
import 'moment/locale/ru'

class SlideDeals extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			tabIndex: 0,
			selectedDeal: null
		};
	}

	selectDeal(key) {
		if(this.state.selectedDeal !== key) {
			this.setState({selectedDeal: key})
		} else {
			this.setState({selectedDeal: null})
		}
	}

	showOpenedDealsList() {
		const { active_deals } = this.props.terminal;

		const readyList = active_deals.map((item, key) => {
			return (
				<div
					key={key}
					className={`btn deal opened`}
				>

					<div className="layer head">
						<div className="row one">
							<div className="row">
								<CurrentChartInfo data={item}/>
							</div>
						</div>

						<div className="row three status">
							<div className="type">
								<div className={`fa fa-arrow-${item.type === 'up' ? 'up' : 'down'} arrow`}/>
								<div className="value">{item.amount.toFixed(2)} $</div>
							</div>
							<Timer closingTime={item.closing_time} />
						</div>
					</div>
				</div>
			)
		});

		return readyList;
	}

	showClosedDealsList() {
		const { closed_deals } = this.props.terminal;

		const readyList = closed_deals.map((item, key) => {
			let selected = this.state.selectedDeal === item.id;

			let income = item.income.toFixed(2);
			income = item.income > 0 ? `+${income}` : income;

			return (
				<div
					key={key}
					className={`btn deal ${selected ? 'selected' : ''}`}
					onClick={() => this.selectDeal(item.id)}
				>

					<div className="layer head">
						<div className="row one">
							<div className="row">
								<CurrentChartInfo data={item}/>
							</div>
							<div className={`fa fa-angle-${selected ? 'up' : 'down'} arrow`}/>
						</div>

						<div className="row three status">
							<div className="type">
								<div className={`fa fa-arrow-${item.type === 'up' ? 'up' : 'down'} arrow`}/>
								<div className="value">{item.amount.toFixed(2)} $</div>
							</div>
							<div className={item.status}>{income} $</div>
							<Moment locale="ru" format="HH:mm" unix local ago>{item.opening_time}</Moment>
						</div>
					</div>

					{selected ?
						<div className="layer body">
							<div className="row">
								<div className="column">
									<div className="name">Ставка</div>
									<div className="value">{item.amount.toFixed(2)} $</div>
								</div>
								<div className="column">
									<div className="name">Длительность</div>
									<div className="value">{item.minutes} мин.</div>
								</div>
							</div>

							<div className="row">
								<div className="column">
									<div className="name">Тип</div>
									<div className="value">{item.type === 'up' ? 'На повышение' : 'На понижение'}</div>
								</div>

								<br/>

								<div className="column">
									<div className="name">Закрыта</div>
									<div className="value">
										{item.status === 'win' ? 'С прибылью' : false}
										{item.status === 'loss' ? 'С убытком' : false}
										{item.status === 'draw' ? 'Возврат': false}
									</div>
								</div>
							</div>

							<div className="row">
								<div className="column">
									<div className="name">Открытие</div>
									<div className="value">{item.spot.toFixed(2)}</div>
								</div>
								<div className="column">
									<div className="name">Закрытие</div>
									<div className="value">{item.close_spot.toFixed(2)}</div>
								</div>
							</div>

							<div className="row">
								<div className="column">
									<div className="name">Сделка открыта</div>
									<div className="value">
										<Moment locale="ru" format="D MMMM HH:mm:ss" unix local ago>{item.opening_time}</Moment>
									</div>
								</div>
								<div className="column">
									<div className="name">Сделка закрыта</div>
									<div className="value">
										<Moment locale="ru" format="D MMMM HH:mm:ss" unix local ago>{item.closing_time}</Moment>
									</div>
								</div>
							</div>

						</div>
					: false}

				</div>
			)
		});

		return (
			<div>
				{readyList}
				<DivLink to="/cabinet/history-deals" className="btn btn-blue all-deals">
					Все сделки
					<div className="fa fa-long-arrow-right"/>
				</DivLink>
			</div>
		);
	}

	render() {
		if(this.props.deals.loading) return false;

		const {
			tabIndex
		} = this.state;

		return (
			<div className="slide-deals">
				<div className="fa fa-times close-mobile-deals" onClick={() => this.closeDealsOnMobile()}/>
				<Tabs
					selectedIndex={tabIndex}
					onSelect={newTabIndex => this.setState({tabIndex: newTabIndex})}
				>
					<TabList>
						<Tab>
							<div className="title">Открыто</div>
						</Tab>

						<Tab>
							<div className="title">Закрыто</div>
						</Tab>

					</TabList>

					<TabPanel>
						{!this.props.terminal.active_deals.length ? this.emptyOpenDeals() : this.showOpenedDealsList()}
					</TabPanel>
					<TabPanel>
						{!this.props.terminal.closed_deals.length ? this.emptyClosedDeals() : this.showClosedDealsList()}
					</TabPanel>
				</Tabs>
			</div>
		)
	}

	closeDealsOnMobile() {
		document.querySelector('.slide-deals').style = 'display: none';
	}

	emptyOpenDeals() {
		return (
			<div className="empty-slide">
				<div className="desc">Нет размещенных сделок</div>
			</div>
		)
	}

	emptyClosedDeals() {
		return (
			<div className="empty-slide">
				<div className="desc">Вы еще не совершали сделок</div>
			</div>
		)
	}

}

SlideDeals.propTypes = {
	deals: PropTypes.object.isRequired,
	getList: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	deals: state.deals,
	terminal: state.terminal
})

const mapDispatchToProps = (dispatch) => ({
	getList: (data) => dispatch(getList(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SlideDeals);