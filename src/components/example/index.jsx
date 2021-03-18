import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

//import { example } from '../../actions/example'

//import Example from './example'

import './index.scss'

class Example extends React.Component {

	constructor(props) {
		super(props);

		this.state = {

		};
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	componentDidUpdate() {

	}

	render() {
		//if(!this.props.example) return false;

		return (
			<div className="example">

			</div>
		)
	}

}

Example.propTypes = {
	//example: PropTypes.func.isRequired,
	//example: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	//example: state.example
})

const mapDispatchToProps = (dispatch) => ({
	//example: (data) => dispatch(example(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Example);