import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Table from '../components/table/Table'
import Badge from '../components/badge/Badge'
import StatusCard from '../components/status-card/StatusCard'

const inventoryTableHead = [
    'sku',
    'product',
    'category',
    'in stock',
    'incoming',
    'status',
    'actions'
]

const inventoryStatus = {
    "in stock": "success",
    "low stock": "warning",
    "out of stock": "danger",
    "discontinued": "primary"
}

const renderInventoryHead = (item, index) => <th key={index}>{item}</th>

const renderInventoryBody = (item, index) => (
    <tr key={index}>
        <td>{item.sku}</td>
        <td>{item.product}</td>
        <td>{item.category}</td>
        <td>{item.inStock}</td>
        <td>{item.incoming}</td>
        <td>
            <Badge type={inventoryStatus[item.status]} content={item.status}/>
        </td>
        <td>
            <div className="action-buttons">
                <button className="btn-edit" title="Edit Item" aria-label="Edit Item">
                    <i className='bx bx-edit'></i>
                </button>
                <button className="btn-view" title="View Details" aria-label="View Details">
                    <i className='bx bx-detail'></i>
                </button>
            </div>
        </td>
    </tr>
)

const Inventory = () => {
    const [inventoryList] = useState([
        {
            sku: "SKU-001-234",
            product: "Wireless Headphones",
            category: "Electronics",
            inStock: 45,
            incoming: 20,
            status: "in stock"
        },
        {
            sku: "SKU-002-567",
            product: "Smart Watch",
            category: "Electronics",
            inStock: 32,
            incoming: 15,
            status: "in stock"
        },
        {
            sku: "SKU-003-890",
            product: "Bluetooth Speaker",
            category: "Electronics",
            inStock: 5,
            incoming: 25,
            status: "low stock"
        },
        {
            sku: "SKU-004-123",
            product: "Laptop Backpack",
            category: "Accessories",
            inStock: 0,
            incoming: 30,
            status: "out of stock"
        },
        {
            sku: "SKU-005-456",
            product: "Wireless Mouse",
            category: "Electronics",
            inStock: 15,
            incoming: 10,
            status: "in stock"
        },
        {
            sku: "SKU-006-789",
            product: "USB-C Hub",
            category: "Electronics",
            inStock: 3,
            incoming: 0,
            status: "low stock"
        },
        {
            sku: "SKU-007-012",
            product: "Smartphone Case",
            category: "Accessories",
            inStock: 28,
            incoming: 0,
            status: "in stock"
        },
        {
            sku: "SKU-008-345",
            product: "Vintage Keyboard",
            category: "Electronics",
            inStock: 0,
            incoming: 0,
            status: "discontinued"
        }
    ])

    return (
        <div>
            <h2 className="page-header">
                Inventory Management
            </h2>
            <div className="row">
                <div className="col-6 col-md-6 col-sm-12">
                    <StatusCard
                        icon="bx bx-package"
                        count="128"
                        title="Total Products"
                    />
                </div>
                <div className="col-6 col-md-6 col-sm-12">
                    <StatusCard
                        icon="bx bx-error-circle"
                        count="8"
                        title="Low Stock Items"
                    />
                </div>
                <div className="col-6 col-md-6 col-sm-12">
                    <StatusCard
                        icon="bx bx-cart"
                        count="90"
                        title="Incoming Items"
                    />
                </div>
                <div className="col-6 col-md-6 col-sm-12">
                    <StatusCard
                        icon="bx bx-x-circle"
                        count="3"
                        title="Out of Stock"
                    />
                </div>
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>Inventory Status</h3>
                            <div>
                                <button className="btn-add" title="Add Product" aria-label="Add Product">
                                    <i className='bx bx-plus'></i> Add Product
                                </button>
                                <button className="btn-add" style={{marginLeft: '10px', backgroundColor: 'var(--main-color-green)'}} title="Import Products" aria-label="Import Products">
                                    <i className='bx bx-import'></i> Import
                                </button>
                                <button className="btn-add" style={{marginLeft: '10px', backgroundColor: 'var(--main-color-blue)'}} title="Export Products" aria-label="Export Products">
                                    <i className='bx bx-export'></i> Export
                                </button>
                            </div>
                        </div>
                        <div className="card__body">
                            <div className="inventory-filters" style={{marginBottom: '20px'}}>
                                <div className="row">
                                    <div className="col-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label>Search Products</label>
                                            <input type="text" className="form-control" placeholder="Search by name or SKU..." />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label>Category</label>
                                            <select className="form-control">
                                                <option value="">All Categories</option>
                                                <option value="electronics">Electronics</option>
                                                <option value="accessories">Accessories</option>
                                                <option value="clothing">Clothing</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label>Status</label>
                                            <select className="form-control">
                                                <option value="">All Status</option>
                                                <option value="in stock">In Stock</option>
                                                <option value="low stock">Low Stock</option>
                                                <option value="out of stock">Out of Stock</option>
                                                <option value="discontinued">Discontinued</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Table
                                limit='10'
                                headData={inventoryTableHead}
                                renderHead={(item, index) => renderInventoryHead(item, index)}
                                bodyData={inventoryList}
                                renderBody={(item, index) => renderInventoryBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/admin-dashboard-demo/'>View All</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inventory
