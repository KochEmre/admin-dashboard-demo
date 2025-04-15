import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Table from '../components/table/Table'
import Badge from '../components/badge/Badge'

const productTableHead = [
    'id',
    'name',
    'category',
    'price',
    'stock',
    'status'
]

const productStatus = {
    "in stock": "success",
    "low stock": "warning",
    "out of stock": "danger"
}

const renderProductHead = (item, index) => <th key={index}>{item}</th>

const renderProductBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.category}</td>
        <td>${item.price}</td>
        <td>{item.stock}</td>
        <td>
            <Badge type={productStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const Products = () => {
    const [productList] = useState([
        {
            id: "PRD001",
            name: "Wireless Headphones",
            category: "Electronics",
            price: "129.99",
            stock: 45,
            status: "in stock"
        },
        {
            id: "PRD002",
            name: "Smart Watch",
            category: "Electronics",
            price: "199.99",
            stock: 32,
            status: "in stock"
        },
        {
            id: "PRD003",
            name: "Bluetooth Speaker",
            category: "Electronics",
            price: "89.99",
            stock: 5,
            status: "low stock"
        },
        {
            id: "PRD004",
            name: "Laptop Backpack",
            category: "Accessories",
            price: "49.99",
            stock: 0,
            status: "out of stock"
        },
        {
            id: "PRD005",
            name: "Wireless Mouse",
            category: "Electronics",
            price: "29.99",
            stock: 15,
            status: "in stock"
        },
        {
            id: "PRD006",
            name: "USB-C Hub",
            category: "Electronics",
            price: "39.99",
            stock: 3,
            status: "low stock"
        },
        {
            id: "PRD007",
            name: "Smartphone Case",
            category: "Accessories",
            price: "19.99",
            stock: 28,
            status: "in stock"
        }
    ])

    return (
        <div>
            <h2 className="page-header">
                Products
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>Product List</h3>
                            <button className="btn-add">
                                <i className='bx bx-plus'></i> Add Product
                            </button>
                        </div>
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={productTableHead}
                                renderHead={(item, index) => renderProductHead(item, index)}
                                bodyData={productList}
                                renderBody={(item, index) => renderProductBody(item, index)}
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

export default Products
