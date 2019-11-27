import React from 'react'
import axios from '../../../../api'
import { Table, Spin, Tag, Icon } from 'antd'
import moment from 'moment';

let appointment = []


class SingleAppointment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    async componentDidMount() {
        let id = this.props.match.params.id
        await axios
            .get(`/appointments/${id}`)
            .then(res => {
                console.log('data', res)
                appointment.push(res.data)
                this.setState({ loading: false })
            })
    }

    componentWillUnmount() {
        appointment = []
    }

    render() {
        const columns = [
            {
                title: 'Title',
                key: 'title',
                dataIndex: 'title'
            },
            {
                title: 'Description',
                key: 'description',
                dataIndex: 'description'
            },
            {
                title: 'Date of Appointment',
                key: 'apptDate',
                dataIndex: 'apptDate',
                render: (text, record) => <p>{moment(text).format('MMMM, YYYY')} at {moment(text).format('HH:MM')}</p>
            },
            {
                title: 'Appointment For',
                key: 'apptBy',
                dataIndex: 'apptBy'
            },
            {
                title: 'Appointment With',
                key: 'apptWith',
                dataIndex: 'apptWith'
            },
            {
                title: 'Reason ',
                key: 'reason',
                dataIndex: 'reason'
            },
            {
                title: 'Place of Appointment',
                key: 'location',
                dataIndex: 'location'
            },
            {
                title: 'Priority',
                key: 'priority',
                dataIndex: 'priority',
                render: (text, record) => text === true ? <Tag color='red'>Prioritized</Tag> : <Tag color="grey">Not Prioritized</Tag>
            },
            {
                title: 'Note',
                key: 'note',
                dataIndex: 'note',
                render: text => <div>

                    <Tag color='yellow' style={{ fontSize: '16px', padding: '10px' }}> <Icon type="highlight" theme="twoTone" />  {text}</Tag>
                </div>

            },
        ]
        return (
            <Spin spinning={this.state.loading}>
                <div style={{ margin: 'auto', width: '80%' }}>
                    <h1>Single Appointment Detail</h1>
                    <Table dataSource={appointment} columns={columns} pagination={false} />
                </div>
            </Spin>

        )
    }
}

export default SingleAppointment