import React from 'react'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import HistoryOutputs from './historyOutputs'

class PaymentHistory extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			tabIndex: 0
		};
	}

	render() {
		const {
			url,
			tabIndex,
		} = this.state;

		return (
			<div className="payment-history">

				<div className="panel full">
					<div className="body">

						<Tabs 
							selectedIndex={tabIndex} 
							onSelect={tabIndex => this.setState({tabIndex})}
						>
							<TabList style={{display: 'none'}}>
								<Tab>
									<Link to={`${url}/output`}>
										Выводы
									</Link>
								</Tab>
							</TabList>

							<TabPanel>
								<HistoryOutputs {...this.props} />
							</TabPanel>

						</Tabs>

					</div>
				</div>
			</div>
		)
	}

}

export default PaymentHistory;