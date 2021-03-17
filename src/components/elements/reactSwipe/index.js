import React from 'react'
import { connect } from 'react-redux'
import ReactSwipeEvents from 'react-swipe-events'
import { YMInitializer } from 'react-yandex-metrika'

import Alerts from '../alerts'

//import { getAppInfo } from '../../../actions/optionsApp'

import './index.scss'

class ReactSwipe extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			swiping: false,
			maxGoBackDeltaX: 220,
		}

	}

	componentDidMount() {
		//this.props.getAppInfo()
	}

	render() {
		const {
			swiping,
			maxGoBackDeltaX,
		} = this.state;

		const {
			urlGoBack,
			showGoBack
		} = this.props.pageConf;

		return ( 
			<ReactSwipeEvents
				id="swipe"
				className={`${swiping ? 'swiping' : ''}`}
				onSwiping={(e, originalX, originalY, currentX, currentY, deltaX, deltaY) => {
					if(deltaX >= 0  && showGoBack) {

						let minDelta = deltaX >= 50 ? deltaX : deltaX < 0 ? deltaX : 0;

						document.querySelector('#swipe').style.left = minDelta+'px';
						document.querySelector('#swipe').style.opacity = 1 - minDelta/300;

						if(deltaX >= 50) {
							this.setState({swiping: true})
						}
					}
				}}
				onSwiped={(e, originalX, originalY, endX, endY, deltaX, deltaY) => {
					this.setState({swiping: false})

					document.querySelector('#swipe').style.left = 0;
					document.querySelector('#swipe').style.opacity = 1;

					if(deltaX >= maxGoBackDeltaX && showGoBack) {
						if(urlGoBack) {
							this.props.history.push(urlGoBack);
							return false;
						}

						this.props.history.goBack();
					}
				}}
				style={{position: 'absolute'}}
			>

				<div style={{position: 'absolute', width: '100%'}}>
					<div className={`app-content ${!this.props.pageConf.bottomNav ? 'bottomNavHidden' : ''}`}>
						{this.props.children}
					</div>

	 				{process.env.NODE_ENV === 'production' && 'this_block_is_disabled' === 0 ?
	 					<YMInitializer 
		 					accounts={[65429164]} 
		 					options={{
			 					clickmap:true,
						        trackLinks:true,
						        accurateTrackBounce:true,
						        webvisor:true,
						        trackHash:true
						    }} 
						    version="2" 
					    />
					: false}

					<Alerts />
				</div>
			</ReactSwipeEvents>
		);
	}
}

const mapStateToProps = (state) => ({
	pageConf: state.pageConf,
})

const mapDispatchToProps = (dispatch) => ({
	//getAppInfo: (data) => dispatch(getAppInfo(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReactSwipe);