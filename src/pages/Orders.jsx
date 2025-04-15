import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Table from '../components/table/Table'
import Badge from '../components/badge/Badge'
import StatusCard from '../components/status-card/StatusCard'

const orderTableHead = [
    'order id',
    'customer',
    'date',
    'total',
    'status',
    'action'
]

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const renderOrderHead = (item, index) => <th key={index}>{item}</th>

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.customer}</td>
        <td>{item.date}</td>
        <td>${item.total}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
        <td>
            <button className="btn-view" title="View Order Details" aria-label="View Order Details">
                <i className='bx bx-detail'></i>
            </button>
        </td>
    </tr>
)

const Orders = () => {
    const [orderList] = useState([
        {
            id: "#OD1711",
            customer: "John Doe",
            date: "17 Jun 2023",
            total: "900.00",
            status: "shipping"
        },
        {
            id: "#OD1712",
            customer: "Frank Iva",
            date: "1 Jun 2023",
            total: "400.00",
            status: "paid"
        },
        {
            id: "#OD1713",
            customer: "Anthony Baker",
            date: "27 Jun 2023",
            total: "200.00",
            status: "pending"
        },
        {
            id: "#OD1714",
            customer: "Emma Wilson",
            date: "1 Jul 2023",
            total: "400.00",
            status: "paid"
        },
        {
            id: "#OD1715",
            customer: "Michael Brown",
            date: "27 Jun 2023",
            total: "200.00",
            status: "refund"
        },
        {
            id: "#OD1716",
            customer: "Sarah Davis",
            date: "2 Jul 2023",
            total: "350.00",
            status: "shipping"
        },
        {
            id: "#OD1717",
            customer: "James Miller",
            date: "4 Jul 2023",
            total: "120.00",
            status: "pending"
        }
    ])

    return (
        <div>
            <h2 className="page-header">
                Orders
            </h2>
            <div className="row">
                <div className="col-6 col-md-6 col-sm-12">
                    <StatusCard
                        icon="bx bx-shopping-bag"
                        count="1,995"
                        title="Total Orders"
                    />
                </div>
                <div className="col-6 col-md-6 col-sm-12">
                    <StatusCard
                        icon="bx bx-dollar-circle"
                        count="$2,632"
                        title="Total Sales"
                    />
                </div>
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>Recent Orders</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={orderTableHead}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={orderList}
                                renderBody={(item, index) => renderOrderBody(item, index)}
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

export default Orders
