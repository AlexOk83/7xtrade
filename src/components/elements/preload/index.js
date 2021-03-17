import React from 'react';

import './index.scss';

export default class Preload extends React.Component {

	render() {
		return ( 
			<div className="preload_back">
				<div className="fa fa-circle-o-notch preload_spin" style={this.props.color ? {color: this.props.color} : null}/>
			</div>
		);
	}
}