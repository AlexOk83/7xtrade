import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAppInfo } from '../../../../actions/optionsApp'

class SlideHelp extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};

	}

	componentDidMount() {
		if(!this.props.app.mail) this.props.getAppInfo();
	}

	render() {
		if(!this.props.app.mail) return false;

		const { 
			app,
			closeTab,
			//clickOnChat
		} = this.props;

		return (
			<div className="slide-help">

				{/*<li onClick={() => clickOnChat()}>
					<div className="fa fa-comments-o"/>
					<div className="column">
						<div className="title">Онлайн чат</div>
						<div className="desc">Получите быстрый ответ</div>
					</div>
				</li>*/}

				<Link to="/cabinet/guide/faq" onClick={() => closeTab()}>
					<div className="fa fa-question-circle-o"/>
					<div className="column">
						<div className="title">FAQ</div>
						<div className="desc">Частые вопросы</div>
					</div>
				</Link>

				<a href={`mailto:${app.mail}`} target="_blank" rel="noopener noreferrer" onClick={() => closeTab()}>
					<div className="fa fa-envelope-o"/>
					<div className="column">
						<div className="title">Служба поддержки</div>
						<div className="desc">{app.mail}</div>
					</div>
				</a>

			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	app: state.app
})
const mapDispatchToProps = (dispatch) => ({
	getAppInfo: (data) => dispatch(getAppInfo(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SlideHelp);