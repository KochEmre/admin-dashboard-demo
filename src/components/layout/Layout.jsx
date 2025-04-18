import React, {useEffect} from 'react'

import './layout.css'

import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import Routes from '../Routes'

import { BrowserRouter, useLocation } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import ThemeAction from '../../redux/actions/ThemeAction'

const Layout = () => {

    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])

    return (
        <BrowserRouter future={{ v7_relativeSplatPath: true }}>
            <AppContent themeReducer={themeReducer} />
        </BrowserRouter>
    )
}

// Separate component to access useLocation hook
const AppContent = ({ themeReducer }) => {
    const location = useLocation();

    return (
        <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            <Sidebar location={location}/>
            <div className="layout__content">
                <TopNav/>
                <div className="layout__content-main">
                    <Routes/>
                </div>
            </div>
        </div>
    );
}

export default Layout
