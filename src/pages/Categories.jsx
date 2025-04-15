import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Table from '../components/table/Table'

const categoryTableHead = [
    'id',
    'name',
    'description',
    'products',
    'status',
    'actions'
]

const renderCategoryHead = (item, index) => <th key={index}>{item}</th>

const renderCategoryBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.products}</td>
        <td>
            <span className={`status-circle ${item.status ? 'active' : 'inactive'}`}></span>
            {item.status ? 'Active' : 'Inactive'}
        </td>
        <td>
            <div className="action-buttons">
                <button className="btn-edit">
                    <i className='bx bx-edit'></i>
                </button>
                <button className="btn-delete">
                    <i className='bx bx-trash'></i>
                </button>
            </div>
        </td>
    </tr>
)

const Categories = () => {
    const [categoryList] = useState([
        {
            id: "CAT001",
            name: "Electronics",
            description: "Electronic devices and accessories",
            products: 145,
            status: true
        },
        {
            id: "CAT002",
            name: "Clothing",
            description: "Apparel and fashion items",
            products: 89,
            status: true
        },
        {
            id: "CAT003",
            name: "Home & Kitchen",
            description: "Home appliances and kitchenware",
            products: 76,
            status: true
        },
        {
            id: "CAT004",
            name: "Books",
            description: "Books, e-books and publications",
            products: 210,
            status: true
        },
        {
            id: "CAT005",
            name: "Sports",
            description: "Sports equipment and accessories",
            products: 65,
            status: true
        },
        {
            id: "CAT006",
            name: "Beauty",
            description: "Beauty and personal care products",
            products: 53,
            status: false
        },
        {
            id: "CAT007",
            name: "Toys",
            description: "Toys and games for all ages",
            products: 42,
            status: true
        }
    ])

    return (
        <div>
            <h2 className="page-header">
                Categories
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>Category Management</h3>
                            <button className="btn-add">
                                <i className='bx bx-plus'></i> Add Category
                            </button>
                        </div>
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={categoryTableHead}
                                renderHead={(item, index) => renderCategoryHead(item, index)}
                                bodyData={categoryList}
                                renderBody={(item, index) => renderCategoryBody(item, index)}
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

export default Categories
