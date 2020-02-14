import PropTypes from 'prop-types'
import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

const StockForm = props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            props.handleSearch()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='StockForm'>
            <div>
                <Grid cols='12 12 12 12'>
                    <div className='boxInline'>
                        <input
                            id='ticker'
                            className='form-control'
                            placeholder='Ticker'
                            onChange={props.handleTickerChange}
                            onKeyUp={keyHandler}
                            value={props.ticker}
                            />

                        <input
                            id='start'
                            type="date"
                            className='form-control'
                            placeholder='Start Date'
                            onChange={props.handleStartDateChange}
                            onKeyUp={keyHandler}
                            value={props.start}
                            />

                        <input
                            id='end'
                            type="date"
                            className='form-control'
                            placeholder='End Date'
                            onChange={props.handleEndDateChange}
                            onKeyUp={keyHandler}
                            value={props.end} />
                        
                        <select
                            id="getFunction" 
                            name="getFunction"
                            onChange={props.handleGetFunctionChange}>
                            <option value=""> --- Algorithms ---</option>
                            <option value="dividends">Dividends</option>
                            <option value="close">Close Price</option>
                            <option value="recommendations">Recommendations</option>
                        </select>

                        <IconButton style='info' icon='search' classList="searchButton"
                            onClick={props.handleSearch}></IconButton>

                        <IconButton style='default' icon='close'
                            onClick={props.handleClear}></IconButton>
                    </div>
                </Grid>
            </div>
        </div>
    )
}

StockForm.propTypes = {
    handleSearch: PropTypes.func,
    handleClear: PropTypes.func,
    handleTickerChange: PropTypes.func,
    handleStartDateChange: PropTypes.func,
    handleEndDateChange: PropTypes.func,
    handleGetFunctionChange: PropTypes.func,
    ticker: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    getFunction: PropTypes.string,
}

export default StockForm
