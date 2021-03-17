import React from 'react'

import Preload from '../../elements/preload'

import './index.scss'

class CurrentChartInfo extends React.Component {

	getIcon() {
		let { name } = this.props.data;

		name = name.toLowerCase();
		let arr = name.split('/');

		let path = '/img/terminal/chart-icons/';

		return (
			<div className={`icons ${arr[1] ? 'pair' : ''}`}>
				<img src={`${path + arr[0]}.svg`} alt=""/>
				{arr[1] ? <img src={`${path + arr[1]}.svg`} alt=""/> : false}
			</div>
		)
	}

	render() {
		if(!this.props.data.name) return false;

		const {
			data,
			allowYield = true,
			switchPreloader
		} = this.props;

		if(switchPreloader && data.id !== +localStorage.chartId) {
			return (
				<div className="current-chart-info">
					<Preload color="#fff"/>
				</div>
			)
		}

		return (
			<div className="current-chart-info">
				<div className="chart-info_left">
					{this.getIcon()}
					<div className="title">{data.name}</div>
				</div>
				{allowYield ? <div className="yield">
					<div className="yield__prop">Выплата:</div>
					<div className="yield__value">
						{data.yield}%
					</div>
				</div>
					: false}
			</div>
		)
	}

}

export default CurrentChartInfo;