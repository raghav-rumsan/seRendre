import React from 'react'
import { Calendar, Badge, Spin } from 'antd';
import axios from '../../api'
import moment from 'moment'

let appointments = []

class AppointmentCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            apptDate: []
        }
    }
    async componentDidMount() {
        await axios
            .get('/appointments')
            .then(res => {
                console.log('data', res)
                res.data.map(data => appointments.push(data)
                )
                this.setState({ loading: false })
            })
    }

    render() {

        const getListData = (value) => {
            let listData = [];
            let year = moment(value).format('YYYY')
            let month = moment(value).format('MM')
            let day = moment(value).format('D')
            //  console.log(appointments)
            appointments.map(({ apptDate, title }) => {
                let yearA = moment(apptDate).format('YYYY')
                let monthA = moment(apptDate).format('MM')
                let dayA = moment(apptDate).format('D')

                if (yearA === year && monthA === month && dayA === day) {
                    console.log('title', day, dayA)
                    listData.push({ type: 'success', content: title })
                }

            })
            //value in appData exists
            //index

            // if (exist) {
            //     return listData = appData[index]
            // }

            //     switch (value.date()) {
            //         case 10:
            //             listData = [{ type: 'warning', content }]
            //             break;
            //         case 26:
            //             listData = [{ type: 'warning', content }]
            //             break;
            //         default:

            //     }

            // })
            return listData;
        }

        const dateCellRender = (value) => {

            const listData = getListData(value);
            return (
                <ul className="events">
                    {listData.map(item => (
                        <li key={item.content}>
                            <Badge status={item.type} text={item.content} />
                        </li>
                    ))}
                </ul>
            );
        }

        const getMonthData = (value) => {
            if (value.month() === 8) {
                return 1394;
            }
        }

        const monthCellRender = (value) => {
            console.log(value)
            const num = getMonthData(value);
            return num ? (
                <div className="notes-month">
                    <section>{num}</section>
                    <span>Backlog number</span>
                </div>
            ) : null;
        }

        return (
            <Spin spinning={this.state.loading} >
                <h1 style={{ padding: '10px', color: 'red' }}>Appointment Calendar</h1>
                <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />

            </Spin>
        )
    }
}

export default AppointmentCalendar

