import React from 'react'
import { NavLink } from 'react-router-dom'

class Toggle extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			open: props.open
		};

	}

	render() {
		const { open } = this.state;
		const { data, category, part } = this.props;

		const pageTitles = data.pages.map((item, key) => 
			<NavLink to={`/faq/${category}/${part}/${key}`} key={key}>
				<div className="fa fa-align-left"/>
				<div>{item.name}</div>
			</NavLink>
		);

		let themeText = 'Тем';
		let pageLength = data.pages.length;

		if(pageLength === 1) themeText = themeText + 'а';
		if(pageLength > 1 && pageLength < 5) themeText = themeText + 'ы';

		return (
			<div className="toggle">
				<button onClick={() => this.setState({open: !open})}>
					<div className="title">{data.name}</div>
					<div className="count">{pageLength} {themeText}</div>
					<div className={`fa fa-angle-${open ? 'up' : 'down'}`}/>
				</button>
				{open ? 
					<div className="links">
						{pageTitles}
					</div>
				: false}
			</div>
		)
	}

}

export default Toggle;