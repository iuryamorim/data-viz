import React, { Component } from 'react'
import axios from 'axios'
import querystring from 'querystring'

import { URL } from '../config'
import PageHeader from '../template/pageHeader'
import StockForm from './stockForm'
import StockList from './stockList'


const INITIAl_STATE = {
    ticker: '',
    start: '',
    end: '',
    getFunction: '',
}

export const extractPrice = price =>
    price.toString().replace('€', '').replace('.', '').split(',')[0]

export const extractArea = area => area.toString().replace('m', '')

export default class Stock extends Component {
    constructor(props) {
        super(props)
        this.state = INITIAl_STATE

        this.handleTickerChange = this.handleTickerChange.bind(this)
        this.handleStartDateChange = this.handleStartDateChange.bind(this)
        this.handleEndDateChange = this.handleEndDateChange.bind(this)
        this.handleGetFunctionChange = this.handleGetFunctionChange.bind(this)

        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    refresh(params = {}) {
        delete params.data
        const search = querystring.stringify(params)

        if (params.getFunction) {
            axios.get(`${URL}/${params.getFunction}/?${search}`)
                .then(resp => this.setState({...this.state, data: resp.data.result}))
        }
        else {
            this.setState({...this.state, data: {}})
        }
            
    }

    handleSearch() {
        this.refresh(this.state)
    }

    handleTickerChange(e) {
        this.setState({...this.state, ticker: e.target.value })
    }

    handleStartDateChange(e) {
        this.setState({...this.state, start: e.target.value })
    }

    handleEndDateChange(e) {
        this.setState({...this.state, end: e.target.value })
    }

    handleGetFunctionChange(e) {
        this.setState({...this.state, getFunction: e.target.value })
    }


    handleClear() {
        this.setState(INITIAl_STATE)
        this.refresh()
    }

    inputProps() {
        return {
            ticker: this.state.ticker,
            start: this.state.start,
            end: this.state.end,
            getFunction: this.state.getFunction,
        }
    }

    handleProps() {
        return {
            handleTickerChange: this.handleTickerChange,
            handleStartDateChange: this.handleStartDateChange,
            handleEndDateChange: this.handleEndDateChange,
            handleGetFunctionChange: this.handleGetFunctionChange,
            handleSearch: this.handleSearch,
            handleClear: this.handleClear
        }
    }

    render() {
        return (
            <div id="stock">
                <PageHeader name='Stock'></PageHeader>
                <StockForm 
                    {...this.inputProps()}
                    {...this.handleProps()} />
                <StockList 
                    data={this.state.data}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}