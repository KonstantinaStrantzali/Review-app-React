import PropTypes from 'prop-types'
import React from 'react'

function Button({children, type, version, isDisable}) {
  return (
    <button type={type} disabled={isDisable} className= {`btn btn-${version}`}>
        {children}
    </button>
  )
}
Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
  }
  
  Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
  }
  
export default Button