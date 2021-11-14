import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'

const Routes = () => {
    return (
        <Switch>
            <Route path='/admin-dashboard-demo/' exact component={Dashboard}/>
            <Route path='/admin-dashboard-demo/customers' component={Customers}/>
        </Switch>
    )
}

export default Routes
