import React from 'react'
import { Form, Icon, Input, DatePicker, Button, Col } from 'antd';

class Form2 extends React.Component {

    buttonClick = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                localStorage.setItem('apptDate', values.apptDate)
                localStorage.setItem('apptBy', values.apptBy)
                localStorage.setItem('apptWith', values.apptWith)
                localStorage.setItem('reason', values.reason)

                this.props.changePhase()
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        console.log('state', this.state)

        const { getFieldDecorator } = this.props.form;

        return (
            <Form style={{ textAlign: 'center', width: '75%', margin: '1% 0 0 30%' }} >
                <Col style={{ textAlign: 'center' }} span={12}>
                    <Form.Item>
                        {getFieldDecorator('apptDate', {
                            rules: [{ required: true, message: 'Please select a the date for the appointment!' }],
                        })(
                            <DatePicker
                                onChange={(value) => console.log('dateString', value)}
                                style={{ padding: '18px', fontSize: '30px', width: '500px' }}
                                showTime
                                placeholder="Select Date and Time for the appointment" />,
                        )}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('apptBy', {
                            rules: [{ required: true, message: 'Please type your name!' }],
                        })(
                            <Input
                                style={{ padding: '18px', fontSize: '30px', width: '500px' }}
                                prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Appointment By"
                            />,
                        )}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('apptWith', {
                            rules: [{ required: true, message: 'Please type the name  of the person you are having appointment with!' }],
                        })(
                            <Input
                                style={{ padding: '18px', fontSize: '30px', width: '500px' }}
                                prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Appointment With"
                            />,
                        )}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('reason', {
                            rules: [{ required: true, message: 'Please type reason of the appointment!' }],
                        })(
                            <Input.TextArea
                                style={{ padding: '18px', fontSize: '30px', width: '500px' }}
                                prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} />}
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
                            Next
                 </Button>
                    </Form.Item>
                </Col>
            </Form>
        )
    }
}
const Step2Form = Form.create({ name: 'normal_login' })(Form2);

export default Step2Form