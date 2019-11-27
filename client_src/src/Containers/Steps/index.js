import React from 'react'
import { Steps, Button, message } from 'antd';
import './steps.css'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step1Form from './Step1/Step1Form';
import Step2Form from './Step2/Step2Form';
import Step3Form from './Step3/Step3Form';

const { Step } = Steps;



class StepsMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        };
    }

    changePhase() {
        let current = this.state.current
        current += 1
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;

        const steps = [
            {
                title: 'First',
                content: <Step1Form changePhase={this.changePhase} />,
            },
            {
                title: 'Second',
                content: <Step2Form changePhase={this.changePhase} />,
            },
            {
                title: 'Last',
                content: <Step3Form changePhase={this.changePhase} />,
            },
        ];

        console.log('stepprops', this.props)

        return (
            <div style={{ margin: '20px' }}>
                <Steps size="large" current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {/* {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                            Next
            </Button> */}
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Appointment Created!')}>
                            Done
            </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                            Previous
            </Button>
                    )}
                </div>
            </div>
        );
    }
}

export default StepsMain