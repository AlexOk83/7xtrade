import React from 'react'

class Partners extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};

	}

	render() {

		return (
			<div className="section partners">
				<div className="title">Наши партнеры</div>
				<div className="desc"></div>
				<div className="images">
					<img className="left" src="/img/site/partner-1.png" alt=""/>
					<img className="right" src="/img/site/partner-2.png" alt=""/>
				</div>
			</div>
		)
	}

}

export default Partners;