import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Table from '../components/table/Table'
import Badge from '../components/badge/Badge'

const discountTableHead = [
    'id',
    'code',
    'description',
    'discount',
    'start date',
    'end date',
    'status',
    'actions'
]

const discountStatus = {
    "active": "success",
    "expired": "danger",
    "scheduled": "warning"
}

const renderDiscountHead = (item, index) => <th key={index}>{item}</th>

const renderDiscountBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td><strong>{item.code}</strong></td>
        <td>{item.description}</td>
        <td>{item.discount}</td>
        <td>{item.startDate}</td>
        <td>{item.endDate}</td>
        <td>
            <Badge type={discountStatus[item.status]} content={item.status}/>
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

const Discount = () => {
    const [discountList] = useState([
        {
            id: "DIS001",
            code: "SUMMER25",
            description: "Summer sale discount",
            discount: "25% OFF",
            startDate: "01/06/2023",
            endDate: "31/08/2023",
            status: "active"
        },
        {
            id: "DIS002",
            code: "WELCOME10",
            description: "New customer discount",
            discount: "10% OFF",
            startDate: "01/01/2023",
            endDate: "31/12/2023",
            status: "active"
        },
        {
            id: "DIS003",
            code: "FLASH50",
            description: "Flash sale discount",
            discount: "50% OFF",
            startDate: "15/07/2023",
            endDate: "17/07/2023",
            status: "expired"
        },
        {
            id: "DIS004",
            code: "HOLIDAY20",
            description: "Holiday season discount",
            discount: "20% OFF",
            startDate: "01/12/2023",
            endDate: "31/12/2023",
            status: "scheduled"
        },
        {
            id: "DIS005",
            code: "FREESHIP",
            description: "Free shipping on orders over $50",
            discount: "FREE SHIPPING",
            startDate: "01/06/2023",
            endDate: "31/07/2023",
            status: "active"
        },
        {
            id: "DIS006",
            code: "BUNDLE15",
            description: "Bundle products discount",
            discount: "15% OFF",
            startDate: "01/05/2023",
            endDate: "30/06/2023",
            status: "expired"
        }
    ])

    return (
        <div>
            <h2 className="page-header">
                Discount Codes
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>Discount Management</h3>
                            <button className="btn-add">
                                <i className='bx bx-plus'></i> Add Discount
                            </button>
                        </div>
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={discountTableHead}
                                renderHead={(item, index) => renderDiscountHead(item, index)}
                                bodyData={discountList}
                                renderBody={(item, index) => renderDiscountBody(item, index)}
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

export default Discount
