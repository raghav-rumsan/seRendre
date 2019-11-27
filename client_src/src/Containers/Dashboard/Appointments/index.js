import React from 'react'
import axios from '../../../api'
import { Link } from 'react-router-dom'
import { Spin, Card, Col, Tag } from 'antd'
import moment from 'moment'

let appointments = []

class Appointments extends React.Component {
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
        console.log('app', appointments)
        return (
            <Spin spinning={this.state.loading}>
                <div>
                    <h1 style={{ margin: '15px' }}>You have {appointments.length > 0 ? appointments.length : 'no any'} appointments coming.</h1>

                    {appointments.length > 0
                        ?
                        <Card title='Appointments'>
                            {appointments.map(appointment => (
                                <Col key={appointment.id} span={12}>
                                    <Card
                                        key={appointment.id}
                                        style={{ padding: '10px', margin: '10px' }}
                                        title={appointment.title}
                                        description={appointment.priority === true ? <Tag>Prioritized</Tag> : null}
                                        extra={<Link to={`/singleAppt/${appointment.id}`}>Detail</Link>}>

                                        <p>{appointment.description}</p>
                                        <h4>With {appointment.apptWith}</h4>

                                        <h2
                                            style={appointment.priority === true ? { color: 'red' } : { color: 'grey' }}>
                                            Appointment on {moment(appointment.apptDate).format('MMMM, YYYY')} at {moment(appointment.apptDate).format('HH:mm a ')}
                                        </h2>
                                    </Card>
                                </Col>


                            )
                            )}

                        </Card>
                        : <h2 style={{ margin: '15px' }}>You can create your own appointments. <Link to='/createAppointment'>Create an appointment</Link> </h2>
                    }

                </div>

            </Spin >

        )
    }
}

export default Appointments