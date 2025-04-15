import React from 'react'

import { Route, Routes as RouterRoutes } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'

const Routes = () => {
    return (
        <RouterRoutes>
            <Route path='/admin-dashboard-demo/' element={<Dashboard />} />
            <Route path='/admin-dashboard-demo/customers' element={<Customers />} />
        </RouterRoutes>
    )
}

export default Routes
