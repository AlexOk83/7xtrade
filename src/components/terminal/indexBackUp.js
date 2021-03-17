import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Config from '../../config'

import { 
	getChartList,
	getTerminalData
} from '../../actions/terminal'

import TerminalChart from './terminalChart'
import TerminalHeader from './terminalHeader'
import TerminalControl from './terminalControl'
import TerminalSidebar from './terminalSidebar'
import PopupSelectWallet from './popupSelectWallet'

import './index.scss'

class Terminal extends React.Component {

	constructor(props) {
		super(props);

		this.state = {

		};

		this.updateCurrentTerminalData = null;
	}

	componentDidMount() {

		this.hiddenChatButton = setInterval(() => {
			this.chat = document.querySelector('#cleversite_chat');

	    	if(this.chat) {
				this.chat.style = 'visibility: hidden';
				clearInterval(this.hiddenChatButton);
			}
	    }, 10);

	    this.props.getChartList();

		this.props.getTerminalData({
			chart_id: localStorage.chartId
		});
	}

	componentWillUnmount() {
		clearInterval(this.hiddenChatButton);

		if(this.chat) {
			this.chat.style = 'visibility: visible';
		}

		clearInterval(this.updateCurrentTerminalData);
	}

	componentDidUpdate() {
		if(this.props.terminal.isLoaded) {

			//if((!localStorage.chartId || localStorage.chartId === "undefined") && this.props.terminal.current_chart) {
			if((!localStorage.chartId || localStorage.chartId === "undefined") && this.props.terminal.current_chart) {
				const { id } = this.props.terminal.current_chart;

				localStorage.removeItem('chartId');
				localStorage.setItem('chartId', id);
			}

			/*if(!localStorage.wallet || localStorage.wallet === "undefined") {
				localStorage.setItem('wallet', 'virtual_dollars');
			}*/

			if(!this.updateCurrentTerminalData) {
				this.updateCurrentTerminalData = setInterval(() => {
					this.props.getTerminalData({
						chart_id: localStorage.chartId
					});
				}, Config.updateTerminalInterval);
			}

		}
	}

	render() {
		//if(!this.props.terminal.current_chart) return false;

		const {
			user,
			current_chart
		} = this.props.terminal;

		return (
			<div className="terminal">
				<TerminalSidebar />
				<TerminalHeader />
				{!localStorage.wallet && user ? <PopupSelectWallet virtual_dollars={user.virtual_dollars} /> : false}

				{current_chart ?
					<div className="terminal-trade">
						<TerminalChart />
						<TerminalControl />
					</div>
				: false}

			</div>
		)
	}

}

Terminal.propTypes = {
	terminal: PropTypes.object.isRequired,
	getTerminalData: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	terminal: state.terminal
})

const mapDispatchToProps = (dispatch) => ({
	getChartList: (data) => dispatch(getChartList(data)),
	getTerminalData: (data) => dispatch(getTerminalData(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Terminal);