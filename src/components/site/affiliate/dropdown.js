import React from 'react'

import './index.scss'

class Dropdown extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			open: props.open
		};
	}

	render() {

		const {
			desc,
			title
		} = this.props;

		const { open } = this.state;

		return (
			<div className="dropdown">
				<div className="title" onClick={() => this.setState({open: !open})} dangerouslySetInnerHTML={{__html: title}}/>
				{open ? <div className="desc" dangerouslySetInnerHTML={{__html: desc}}/> : false}
			</div>
		)
	}

}

export default Dropdown;