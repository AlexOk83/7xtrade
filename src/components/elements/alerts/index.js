import React from 'react'
import { connect } from 'react-redux'

import './index.scss';

class Alert extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			alerts: null,
			show: false,
			hiddenAlerts: [],
		}

		this.removeAlertTimeout = null;
	}

	componentDidUpdate() {
		let alerts = !this.state.alerts ? [] : this.state.alerts;

		if(this.props.pageConf.alert) {
			this.setState({alerts: [...alerts, this.props.pageConf.alert]})
			delete(this.props.pageConf.alert)
		}

		if(!this.props.terminal.alerts) return false;

		if(!this.state.alerts && this.props.terminal.alerts.length) {
			this.setState({alerts: [...alerts, ...this.props.terminal.alerts]})
		}
	}

	removeAlert(key) {
		if(!this.state.alerts) return false;

		if(this.state.alerts.length === 1) {
			this.setState({alerts: null})
		} else {
			this.state.alerts.splice(key, 1);
		}
	}

	componentWillUnmount() {
		clearTimeout(this.timerRemoveAlert);
	}

	render() {
		if(!this.state.alerts) return false;

		const readyList = this.state.alerts.map((item, key) => {
			this.timerRemoveAlert = setTimeout(() => this.removeAlert(key), 10000)

			let alertInfo = item.success || item.error;

			if(alertInfo) {
				item.icon = item.error ? 'fa-exclamation-triangle error' : (item.success ? 'fa-check-circle success' : '');
			}

			return (
				<div className={`alert fade-in`} key={key}>
					{alertInfo ?
						<div className={`icon fa ${item.icon}`}/>
					:
						""//<img src={item.icon} className="icon" alt=""/>
					}
					<div className="column">
						<div className="title">{item.title}</div>
						<div className="desc">{item.description}</div>
					</div>
					<div className="fa fa-times close" onClick={() => this.removeAlert(key)}/>
				</div>
			)
		});

		return (
			<div className="alerts">
				{readyList}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	pageConf: state.pageConf,
	terminal: state.terminal,
})

export default connect(mapStateToProps, null)(Alert);