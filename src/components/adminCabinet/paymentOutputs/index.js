import React from 'react'
import { Link } from 'react-router-dom'
import { history } from '../../../store'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import CabinetOutputs from './cabinetOutputs'
import AffiliateOutputs from './affiliateOutputs'

class PaymentOutputs extends React.Component {

	constructor(props) {
		super(props);

		
		this.state = {
			url: '/admin/payment-outputs',
			tabIndex: 0,
			tabName: null,
		};
	}

	switchPage(tabName) {
		switch(tabName) {
			case 'cabinet': 
				this.setState({
					tabIndex: 0,
					tabName: tabName
				}); 
				break;
			case 'affiliate': 
				this.setState({
					tabIndex: 1,
					tabName: tabName
				}); 
				break;
			default: 
				let newTabName = 'cabinet';

				this.setState({
					tabIndex: 0,
					tabName: newTabName
				})

				history.replace(this.state.url + '/' + newTabName);
				break;
		}
	}

	componentDidMount() {
		let { part } = this.props.match.params;

		this.switchPage(part);
	}

	componentDidUpdate(prevProps) {
		let { part } = this.props.match.params;

		if(this.state.tabName !== part && part) this.switchPage(part);
	}

	render() {
		const {
			url,
			tabIndex,
		} = this.state;

		return (
			<div className="payment-outputs">
				<Tabs 
					selectedIndex={tabIndex} 
					onSelect={tabIndex => this.setState({tabIndex})}
				>
					<TabList>
						<Tab>
							<Link to={`${url}/cabinet`}>
								Заявки из кабинета игрока
							</Link>
						</Tab>
						<Tab>
							<Link to={`${url}/affiliate`}>
								Заявки из кабинета партнера
							</Link>
						</Tab>
					</TabList>
							
					<TabPanel>
						<CabinetOutputs {...this.props} />
					</TabPanel>

					<TabPanel>
						<AffiliateOutputs {...this.props} />
					</TabPanel>

				</Tabs>
			</div>
		)
	}

}

export default PaymentOutputs;