import React from 'react'
import Step1Form from './Step1Form'

class Step1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: this.props.current
        }

    }
    render() {
        console.log('props', this.props)

        return (
            <div>
                <Step1Form current={this.state.current} next={this.props.next} />
            </div>
        )
    }
}

export default Step1