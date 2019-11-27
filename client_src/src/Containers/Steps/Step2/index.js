import React from 'react'
import Step2Form from './Step2Form'

class Step1 extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        console.log('props', this.props)

        return (
            <div>
                <Step2Form handleSubmit={this.props.next} />
            </div>
        )
    }
}

export default Step1