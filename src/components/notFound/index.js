import React from 'react'

import './index.scss'

class NotFound extends React.Component {

	render() {
	    return (
			<div className="notFound">
				<img src="/img/404.png" alt=""/>
				<button className="btn btn-blue" onClick={() => this.props.history.push('/')}>
					<span className="fa fa-reply"/>
					<span className="error_btn_text">Вернуться на главную</span>
				</button>
			</div>
	    )
	}
}

export default NotFound;