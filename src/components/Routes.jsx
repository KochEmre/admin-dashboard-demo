import React from 'react'

import { Route, Routes as RouterRoutes } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Products from '../pages/Products'
import Orders from '../pages/Orders'
import Analytics from '../pages/Analytics'
import Categories from '../pages/Categories'
import Discount from '../pages/Discount'
import Settings from '../pages/Settings'
import Inventory from '../pages/Inventory'

const Routes = () => {
    return (
        <RouterRoutes>
            <Route path='/admin-dashboard-demo/' element={<Dashboard />} />
            <Route path='/admin-dashboard-demo/customers' element={<Customers />} />
            <Route path='/admin-dashboard-demo/products' element={<Products />} />
            <Route path='/admin-dashboard-demo/orders' element={<Orders />} />
            <Route path='/admin-dashboard-demo/analytics' element={<Analytics />} />
            <Route path='/admin-dashboard-demo/categories' element={<Categories />} />
            <Route path='/admin-dashboard-demo/discount' element={<Discount />} />
            <Route path='/admin-dashboard-demo/settings' element={<Settings />} />
            <Route path='/admin-dashboard-demo/inventory' element={<Inventory />} />
        </RouterRoutes>
    )
}

export default Routes
