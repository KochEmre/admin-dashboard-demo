import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Settings = () => {
    const themeReducer = useSelector(state => state.ThemeReducer)
    
    const [formData, setFormData] = useState({
        siteName: 'Admin Dashboard',
        siteDescription: 'Powerful admin dashboard template',
        email: 'admin@example.com',
        notificationsEnabled: true,
        emailNotifications: true,
        pushNotifications: false,
        darkModeDefault: themeReducer.mode === 'theme-mode-dark',
        language: 'en',
        timezone: 'UTC+0',
        currency: 'USD'
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // In a real app, you would save the settings here
        alert('Settings saved successfully!')
    }

    return (
        <div>
            <h2 className="page-header">
                Settings
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>General Settings</h3>
                        </div>
                        <div className="card__body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Site Name</label>
                                    <input 
                                        type="text" 
                                        name="siteName"
                                        value={formData.siteName}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Site Description</label>
                                    <textarea 
                                        name="siteDescription"
                                        value={formData.siteDescription}
                                        onChange={handleChange}
                                        className="form-control"
                                        rows="3"
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Admin Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                
                                <div className="card__header">
                                    <h3>Notification Settings</h3>
                                </div>
                                
                                <div className="form-check">
                                    <input 
                                        type="checkbox" 
                                        name="notificationsEnabled"
                                        checked={formData.notificationsEnabled}
                                        onChange={handleChange}
                                        className="form-check-input"
                                        id="notificationsEnabled"
                                    />
                                    <label className="form-check-label" htmlFor="notificationsEnabled">
                                        Enable Notifications
                                    </label>
                                </div>
                                
                                <div className="form-check">
                                    <input 
                                        type="checkbox" 
                                        name="emailNotifications"
                                        checked={formData.emailNotifications}
                                        onChange={handleChange}
                                        className="form-check-input"
                                        id="emailNotifications"
                                    />
                                    <label className="form-check-label" htmlFor="emailNotifications">
                                        Email Notifications
                                    </label>
                                </div>
                                
                                <div className="form-check">
                                    <input 
                                        type="checkbox" 
                                        name="pushNotifications"
                                        checked={formData.pushNotifications}
                                        onChange={handleChange}
                                        className="form-check-input"
                                        id="pushNotifications"
                                    />
                                    <label className="form-check-label" htmlFor="pushNotifications">
                                        Push Notifications
                                    </label>
                                </div>
                                
                                <div className="card__header">
                                    <h3>Appearance Settings</h3>
                                </div>
                                
                                <div className="form-check">
                                    <input 
                                        type="checkbox" 
                                        name="darkModeDefault"
                                        checked={formData.darkModeDefault}
                                        onChange={handleChange}
                                        className="form-check-input"
                                        id="darkModeDefault"
                                    />
                                    <label className="form-check-label" htmlFor="darkModeDefault">
                                        Use Dark Mode by Default
                                    </label>
                                </div>
                                
                                <div className="form-group">
                                    <label>Language</label>
                                    <select 
                                        name="language"
                                        value={formData.language}
                                        onChange={handleChange}
                                        className="form-control"
                                    >
                                        <option value="en">English</option>
                                        <option value="fr">French</option>
                                        <option value="de">German</option>
                                        <option value="es">Spanish</option>
                                        <option value="tr">Turkish</option>
                                    </select>
                                </div>
                                
                                <div className="form-group">
                                    <label>Timezone</label>
                                    <select 
                                        name="timezone"
                                        value={formData.timezone}
                                        onChange={handleChange}
                                        className="form-control"
                                    >
                                        <option value="UTC-12">UTC-12</option>
                                        <option value="UTC-11">UTC-11</option>
                                        <option value="UTC-10">UTC-10</option>
                                        <option value="UTC-9">UTC-9</option>
                                        <option value="UTC-8">UTC-8</option>
                                        <option value="UTC-7">UTC-7</option>
                                        <option value="UTC-6">UTC-6</option>
                                        <option value="UTC-5">UTC-5</option>
                                        <option value="UTC-4">UTC-4</option>
                                        <option value="UTC-3">UTC-3</option>
                                        <option value="UTC-2">UTC-2</option>
                                        <option value="UTC-1">UTC-1</option>
                                        <option value="UTC+0">UTC+0</option>
                                        <option value="UTC+1">UTC+1</option>
                                        <option value="UTC+2">UTC+2</option>
                                        <option value="UTC+3">UTC+3</option>
                                        <option value="UTC+4">UTC+4</option>
                                        <option value="UTC+5">UTC+5</option>
                                        <option value="UTC+6">UTC+6</option>
                                        <option value="UTC+7">UTC+7</option>
                                        <option value="UTC+8">UTC+8</option>
                                        <option value="UTC+9">UTC+9</option>
                                        <option value="UTC+10">UTC+10</option>
                                        <option value="UTC+11">UTC+11</option>
                                        <option value="UTC+12">UTC+12</option>
                                    </select>
                                </div>
                                
                                <div className="form-group">
                                    <label>Currency</label>
                                    <select 
                                        name="currency"
                                        value={formData.currency}
                                        onChange={handleChange}
                                        className="form-control"
                                    >
                                        <option value="USD">USD ($)</option>
                                        <option value="EUR">EUR (€)</option>
                                        <option value="GBP">GBP (£)</option>
                                        <option value="JPY">JPY (¥)</option>
                                        <option value="TRY">TRY (₺)</option>
                                    </select>
                                </div>
                                
                                <button type="submit" className="btn-primary">
                                    Save Settings
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
