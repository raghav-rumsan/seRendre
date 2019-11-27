import React from 'react'
import { Form, Input, Button, Col } from 'antd';

class Form1 extends React.Component {

    buttonClick = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('props', this.props)
                localStorage.setItem('title', values.title)
                localStorage.setItem('description', values.description)
                this.props.changePhase()
                console.log('Received values of form: ', values);

            }
        });
    };

    render() {
        console.log('item', localStorage.getItem('title'))
        const { getFieldDecorator } = this.props.form
        console.log('state', this.state)

        return (
            <Form style={{ textAlign: 'center', width: '75%', margin: '1% 0 0 30%' }} >
                <Col style={{ textAlign: 'center' }} span={12}>
                    <Form.Item>
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: 'Please input the title of the appointment!' }],
                        })(
                            <Input
                                placeholder="Title"
                            />,
                        )}
                    </Form.Item>

                    <Form.Item >
                        {getFieldDecorator('description', {
                            rules: [{ required: true, message: 'Please input the description of the appointment!' }],
                        })(
                            <Input.TextArea
                                placeholder="Description"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item style={{ margin: '0 0 0 -18%' }}>
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
const Step1Form = Form.create()(Form1);

export default Step1Form