import React, { useState, useEffect, useRef } from 'react'

import { Link } from 'react-router-dom'

import './sidebar.css'

import logo from '../../assets/images/logo.png'
import logo_white from '../../assets/images/logo_white.png'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'

import { useSelector } from 'react-redux'

const SidebarItem = props => {

    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const Sidebar = props => {
    const themeReducer = useSelector(state => state.ThemeReducer)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const sidebarRef = useRef(null)

    const activeItem = sidebar_items.findIndex(item => item.route === props.location?.pathname)

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
        document.querySelector('.layout').classList.toggle('mobile-sidebar-open')
    }

    const closeSidebar = () => {
        setSidebarOpen(false)
        document.querySelector('.layout').classList.remove('mobile-sidebar-open')
    }

    // Close sidebar when clicking on a menu item on mobile
    const handleLinkClick = () => {
        if (window.innerWidth <= 768) {
            closeSidebar()
        }
    }

    // Close sidebar when clicking outside on mobile
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target) &&
                !event.target.classList.contains('sidebar__toggle') &&
                window.innerWidth <= 768 && sidebarOpen) {
                closeSidebar()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [sidebarOpen])

    return (
        <>
            <div className="sidebar__toggle" onClick={toggleSidebar}>
                <i className='bx bx-menu'></i>
            </div>
            <div ref={sidebarRef} className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
                <div className="sidebar__logo">
                    <img className="deneme" src={themeReducer.mode === 'theme-mode-dark' ? logo_white:logo} alt="company logo" />
                    <div className="sidebar__close" onClick={closeSidebar}>
                        <i className='bx bx-x'></i>
                    </div>
                </div>
                {
                    sidebar_items.map((item, index) => (
                        <Link to={item.route} key={index} onClick={handleLinkClick}>
                            <SidebarItem
                                title={item.display_name}
                                icon={item.icon}
                                active={index === activeItem}
                            />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default Sidebar
