import React from 'react'
import axios from '../../api'
import { Link } from 'react-router-dom'
import { Spin, Tag, Timeline, Icon } from 'antd'
import moment from 'moment'


let appointments = []
class Upcoming extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    async componentDidMount() {
        await axios
            .get('/appointments')
            .then(res => {
                console.log('data', res)
                res.data.map(data => appointments.push(data))
                this.setState({ loading: false })
            })
    }
    componentWillUnmount() {
        appointments = []
    }
    render() {
        return (
            <Spin spinning={this.state.loading} style={{ width: '80%', margin: 'auto' }}>
                {appointments.map(appointment => (
                    <Timeline
                        style={{ margin: '5% 26% 0 0' }}
                        key={appointment.id}
                        mode="alternate"
                    >
                        <Timeline.Item color="red" dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                            <div >
                                <h1>
                                    <Link to={`/singleAppt/${appointment.id}`}>{appointment.title}</Link>
                                </h1>
                                <h3>
                                    Appointment on {moment(appointment.apptDate).format('MMMM, YYYY')} at {moment(appointment.apptDate).format('HH:mm ')}
                                </h3>
                                <Tag color='green'> Appointment is in  {moment(appointment.apptDate).diff(moment(), 'days')} days</Tag>
                            </div>
                            <p>{appointment.description}</p>
                            <p>{appointment.apptBy}'s appointment with {appointment.apptWith}</p>
                            {appointment.priority === true ? <Tag color='red'>Prioritized</Tag> : null}
                        </Timeline.Item>
                    </Timeline>
                ))
                }
            </Spin>
        )
    }
}

export default Upcoming