import React from 'react'
import { Link } from 'react-router-dom'
import { history } from '../../../store'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import FAQ from './index'
import Education from './index'

class Guide extends React.Component {

	constructor(props) {
		super(props);

		
		this.state = {
			url: '/cabinet/guide',
			tabIndex: 0,
			tabName: null,
		};
	}

	switchPage(tabName) {
		switch(tabName) {
			case 'faq': 
				this.setState({
					tabIndex: 0,
					tabName: tabName
				}); 
				break;
			case 'education': 
				this.setState({
					tabIndex: 1,
					tabName: tabName
				}); 
				break;
			default: 
				let newTabName = 'faq';

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
			<div className="payment-history">
				<div className="body">
					<Tabs 
						selectedIndex={tabIndex} 
						onSelect={tabIndex => this.setState({tabIndex})}
					>
						<TabList className="menu">
							<Tab>
								<Link to={`${url}/faq`}>
									FAQ
								</Link>
							</Tab>
							<Tab>
								<Link to={`${url}/education`}>
									Обучение
								</Link>
							</Tab>
						</TabList>
								
						<TabPanel>
							<FAQ {...this.props} includeToCabinet={true}/>
						</TabPanel>

						<TabPanel>
							<Education {...this.props} includeToCabinet={true}/>
						</TabPanel>

					</Tabs>

				</div>
			</div>
		)
	}

}

export default Guide;