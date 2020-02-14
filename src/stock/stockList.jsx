import PropTypes from 'prop-types'
import React from 'react'

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'

const StockList = (props) => {
    let data = props.data || {}

    data = Object.keys(data).map(key =>
        (
            {   
                uv: isNaN(data[key]) ? data[key].to_grade : data[key],
                pv: new Date(key).getTime() ,
                name: key
            }
        )
    )

    return data.length
        ?
            (
                <LineChart width={1100} height={600} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            )
        :
        (<div />)
}

StockList.propTypes = {
    data: PropTypes.object,
}

export default StockList
