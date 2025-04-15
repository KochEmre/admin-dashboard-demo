import React from 'react'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import StatusCard from '../components/status-card/StatusCard'

const Analytics = () => {
    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    const chartOptions = {
        series: [{
            name: 'Website Traffic',
            data: [31, 40, 28, 51, 42, 109, 100, 120, 80]
        }, {
            name: 'Social Media',
            data: [11, 32, 45, 32, 34, 52, 41, 60, 45]
        }, {
            name: 'Mobile App',
            data: [5, 15, 30, 40, 25, 45, 35, 50, 40]
        }],
        options: {
            color: ['#6ab04c', '#2980b9', '#f39c12'],
            chart: {
                background: 'transparent',
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                labels: {
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Roboto, sans-serif'
                    }
                }
            },
            yaxis: {
                title: {
                    text: 'Visitors (thousands)'
                }
            },
            legend: {
                position: 'top',
                horizontalAlign: 'center',
                fontSize: '14px',
                fontFamily: 'Roboto, sans-serif',
                itemMargin: {
                    horizontal: 10,
                    vertical: 5
                }
            },
            responsive: [{
                breakpoint: 768,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetY: 0,
                        height: 50
                    },
                    xaxis: {
                        labels: {
                            style: {
                                fontSize: '10px'
                            },
                            rotate: -45,
                            offsetY: 0
                        }
                    }
                }
            }, {
                breakpoint: 500,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: 0,
                        offsetY: 0,
                        fontSize: '12px',
                        itemMargin: {
                            horizontal: 5,
                            vertical: 0
                        }
                    },
                    xaxis: {
                        labels: {
                            style: {
                                fontSize: '8px'
                            },
                            rotate: -45,
                            offsetY: 0
                        }
                    },
                    yaxis: {
                        labels: {
                            style: {
                                fontSize: '8px'
                            },
                            offsetX: -5
                        }
                    }
                }
            }],
            grid: {
                show: false
            }
        }
    }

    const pieChartOptions = {
        series: [44, 55, 13, 43, 22],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['Desktop', 'Mobile', 'Tablet', 'Smart TV', 'Others'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }],
            colors: ['#6ab04c', '#2980b9', '#f39c12', '#e74c3c', '#8e44ad']
        }
    }

    return (
        <div>
            <h2 className="page-header">
                Analytics
            </h2>
            <div className="row">
                <div className="col-6 col-md-6 col-sm-12">
                    <StatusCard
                        icon="bx bx-user"
                        count="1,995"
                        title="Total Visitors"
                    />
                </div>
                <div className="col-6 col-md-6 col-sm-12">
                    <StatusCard
                        icon="bx bx-line-chart"
                        count="33.5%"
                        title="Conversion Rate"
                    />
                </div>
                <div className="col-6 col-md-6 col-sm-12">
                    <StatusCard
                        icon="bx bx-time"
                        count="2m 56s"
                        title="Avg. Session Duration"
                    />
                </div>
                <div className="col-6 col-md-6 col-sm-12">
                    <StatusCard
                        icon="bx bx-bar-chart-alt-2"
                        count="45.8%"
                        title="Bounce Rate"
                    />
                </div>
                <div className="col-8 col-md-12 col-sm-12">
                    <div className="card chart-card">
                        <div className="card__header">
                            <h3>Traffic Overview</h3>
                        </div>
                        <div className="card__body">
                            <Chart
                                options={themeReducer === 'theme-mode-dark' ? {
                                    ...chartOptions.options,
                                    theme: { mode: 'dark'}
                                } : {
                                    ...chartOptions.options,
                                    theme: { mode: 'light'}
                                }}
                                series={chartOptions.series}
                                type='line'
                                height='100%'
                                width='100%'
                                className="responsive-chart"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-4 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>Traffic Sources</h3>
                        </div>
                        <div className="card__body">
                            <Chart
                                options={themeReducer === 'theme-mode-dark' ? {
                                    ...pieChartOptions.options,
                                    theme: { mode: 'dark'}
                                } : {
                                    ...pieChartOptions.options,
                                    theme: { mode: 'light'}
                                }}
                                series={pieChartOptions.series}
                                type='pie'
                                height='350'
                                width='100%'
                                className="responsive-chart"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics
