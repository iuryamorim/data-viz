import PropTypes from 'prop-types'
import React from 'react'
import If from './if'

const IconButton = props => (
    <If test={!props.hide}>
        <button className={`btn btn-${props.style} ${props.classList}`} 
            onClick={props.onClick}>
            <i className={`fa fa-${props.icon}`}></i>
        </button>
    </If>
)

IconButton.propTypes = {
    hide: PropTypes.string,
    style: PropTypes.string,
    classList: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func
}

export default IconButton
