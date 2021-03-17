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
					<img src="/images/t_menu_chat.png" alt="Онлайн чат"/>
					<div className="column">
						<div className="title_sh">Онлайн чат</div>
						<div className="desc">Получите быстрый ответ</div>
					</div>
				</Link>

				<Link to="/cabinet/guide/faq" onClick={() => closeTab()}>
					<img src="/images/t_menu_faq.png" alt="Частые вопросы"/>
					<div className="column">
						<div className="title_sh">Частые вопросы</div>
						<div className="desc">Документация</div>
					</div>
				</Link>

				<a href={`mailto:${app.mail}`} target="_blank" rel="noopener noreferrer" onClick={() => closeTab()}>
					<img src="/images/t_menu_mail.png" alt="Запрос на почту"/>
					<div className="column">
						<div className="title_sh">Запрос на почту</div>
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