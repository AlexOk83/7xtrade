import React from 'react'
import Moment from 'react-moment'
import Config from '../../../../config'

class Timer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			time: this.beforeEnd()
		};
	}

	componentDidMount() {
		this.timerClosingDeal = setInterval(() => {
			let beforeEnd = this.beforeEnd();

			this.setState({time: beforeEnd <= 0 ? 0 : beforeEnd});
		}, 300);
	}

	componentWillUnmount() {
		clearInterval(this.timerClosingDeal);
	}

	timeNow() {
		return new Date().getTime() / 1000;
	}

	beforeEnd() {
		return (this.props.closingTime + (Config.updateTerminalInterval / 1000)) - this.timeNow();
	}

	render() {
		const { time } = this.state;

		return (
			<Moment locale="ru" format="mm:ss" unix>{time}</Moment>
		)
	}

}

export default Timer;