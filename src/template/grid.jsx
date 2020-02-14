import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Grid extends Component {
    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        if(cols[2]) classes += ` col-md-${cols[2]}`
        if(cols[3]) classes += ` col-lg-${cols[3]}`

        return classes
    }

    render() {
        const {
            cols=12,
            children
        } = this.props
        const gridClasses = this.toCssClasses(cols)
        return (
            <div className={gridClasses}>
                {children}
            </div>
        )
    }
}

Grid.propTypes = {
    children: PropTypes.node,
    cols: PropTypes.string
}

export default Grid
