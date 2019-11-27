import React from 'react'
import { Form, Icon, Input, Switch, Button, Col, notification } from 'antd';
import axios from '../../../../api'
import moment from 'moment'
import history from '../../../../history'

class Form3 extends React.Component {

    buttonClick = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                localStorage.setItem('location', values.location)
                localStorage.setItem('priority', values.priority)
                localStorage.setItem('note', values.note)
                let title = localStorage.getItem('title')
                let description = localStorage.getItem('description')
                let apptDate = localStorage.getItem('apptDate')
                let apptWith = localStorage.getItem('apptWith')
                let apptBy = localStorage.getItem('apptBy')
                let reason = localStorage.getItem('reason')
                let location = localStorage.getItem('location')
                let priority = localStorage.getItem('priority')
                let note = localStorage.getItem('note')

                axios({
                    method: 'post',
                    url: '/appointments',
                    data: {
                        'title': title,
                        'description': description,
                        'apptDate': apptDate,
                        'apptWith': apptWith,
                        'apptBy': apptBy,
                        'reason': reason,
                        'location': location,
                        'priority': priority,
                        'note': note
                    }
                })
                    .then(res => {
                        console.log('res', res)
                        if (res.status === 200) {
                            notification.success({
                                message: `Appointment Created Successfully`,
                                description: `Appointment Successfullly created for ${moment(apptDate).format('YYYY-MM-DD')}`

                            });

                            // this.props.form.resetFields()
                            localStorage.clear()
                            this.props.form.resetFields()
                            this.setState({ phase: 1 })
                            history.push('/')

                        }
                    })
                    .catch(e => console.log('error', e))



                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form style={{ textAlign: 'center', width: '75%', margin: '1% 0 0 30%' }} >
                <Col style={{ textAlign: 'center' }} span={12}>
                    <Form.Item>
                        {getFieldDecorator('location', {
                            rules: [{ required: true, message: 'Please type the place for the meeting!' }],
                        })(
                            <Input
                                style={{ padding: '18px', fontSize: '30px', width: '500px' }}
                                prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Where do you want to meet?"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('note', {
                            rules: [{ message: 'Please type the place for the meeting!' }],
                        })(
                            <Input.TextArea
                                style={{ padding: '18px', fontSize: '30px', width: '500px' }}
                                prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Any Note?"
                            />,
                        )}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('priority', {
                            rules: [{ required: false, message: 'Please type reason of the appointment!' }],
                        })(
                            <Switch

                                checkedChildren="Prioritized"
                                uncheckedChildren="Not Prioritized"
                                placeholder="Reason"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType='submit'
                            onClick={this.buttonClick}
                        >
                            Create appointment
                 </Button>
                    </Form.Item>
                </Col>
            </Form>
        )
    }
}
const Step3Form = Form.create({ name: 'normal_login' })(Form3);

export default Step3Form