import React from 'react'
import { Link } from 'react-router-dom'
import { history } from '../../../../store'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import HistoryOutputs from './historyOutputs'
import HistoryIncreases from './historyIncreases'

class PaymentHistory extends React.Component {

	constructor(props) {
		super(props);

		
		this.state = {
			url: '/cabinet/history-payments',
			tabIndex: 0,
			tabName: null,
		};
	}

	switchPage(tabName) {
		switch(tabName) {
			case 'increase': 
				this.setState({
					tabIndex: 0,
					tabName: tabName
				}); 
				break;
			case 'output': 
				this.setState({
					tabIndex: 1,
					tabName: tabName
				}); 
				break;
			default: 
				let newTabName = 'increase';

				this.setState({
					tabIndex: 0,
					tabName: newTabName
				})

				history.replace(this.state.url + '/' + newTabName);
				break;
		}
	}

	componentDidMount() {
		let { page } = this.props.match.params;

		this.switchPage(page);
	}

	componentDidUpdate(prevProps) {
		let { page } = this.props.match.params;

		if(this.state.tabName !== page && page) this.switchPage(page);
	}

	render() {
		const {
			url,
			tabIndex,
		} = this.state;

		return (
			<div className="payment-history">
				<div className="body">
					<Tabs 
						selectedIndex={tabIndex} 
						onSelect={tabIndex => this.setState({tabIndex})}
					>
						<TabList className="menu">
							<Tab>
								<Link to={`${url}/increase`}>
									Пополнения
								</Link>
							</Tab>
							<Tab>
								<Link to={`${url}/output`}>
									Выводы
								</Link>
							</Tab>
						</TabList>
								
						<TabPanel>
							<HistoryIncreases {...this.props} />
						</TabPanel>

						<TabPanel>
							<HistoryOutputs {...this.props} />
						</TabPanel>

					</Tabs>

				</div>
			</div>
		)
	}

}

export default PaymentHistory;