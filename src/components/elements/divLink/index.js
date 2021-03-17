import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

const LinkButton = (props) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    disabled,
    ...rest
  } = props
  return (
    <div
      {...rest}
      onClick={event => {
        if(disabled === 'disabled') {
          event.preventDefault();
          return false;
        }
        onClick && onClick(event);
        history.push(to);
      }}
    />
  )
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  //children: PropTypes.node.isRequired
}

export default withRouter(LinkButton)