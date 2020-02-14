import PropTypes from 'prop-types'
import React from 'react'

const PageHeader = props => (
    <header className='page-header'>
        <h2>{props.name} <small>{props.small}</small></h2>
    </header>
)

PageHeader.propTypes = {
    name: PropTypes.string,
    small: PropTypes.string
}

export default PageHeader
