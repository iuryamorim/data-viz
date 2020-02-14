import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Stock from '../stock/stock'

const Routes = () => (
    <Router history={hashHistory}>
        <Route path='/stock' component={Stock} />
        <Redirect from='*' to='/stock' />
    </Router>
)

export default Routes
