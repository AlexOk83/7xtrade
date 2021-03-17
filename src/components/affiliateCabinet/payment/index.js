import React from 'react'
import { Link } from 'react-router-dom'
import { history } from '../../../store'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import Output from './output'
import History from './history'

import './index.scss'

class Payment extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			url: '/affiliate/cabinet/payment',
			tabIndex: 0,
			tabName: null,
		};
	}

	switchPage(tabName) {
		switch(tabName) {
			case 'output': 
				this.setState({
					tabIndex: 0,
					tabName: tabName
				}); 
				break;
			case 'history': 
				this.setState({
					tabIndex: 1,
					tabName: tabName
				}); 
				break;
			default: 
				let newTabName = 'output';

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
			tabIndex
		} = this.state;

		return (
			<div className="payment">

				<Tabs 
					selectedIndex={tabIndex} 
					onSelect={tabIndex => this.setState({tabIndex})}
				>
					<TabList>
						<Tab>
							<Link to={`${url}/output`}>
								Запросить вывод
							</Link>
						</Tab>
						<Tab>
							<Link to={`${url}/history`}>
								История выплат
							</Link>
						</Tab>
					</TabList>

					<TabPanel>
						<Output {...this.props}/>
					</TabPanel>

					<TabPanel>
						<History {...this.props}/>
					</TabPanel>
				</Tabs>

			</div>
		)
	}

}

export default Payment;