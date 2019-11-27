import React from 'react'
import Step3Form from './Step3Form'

class Step3 extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        console.log('props', this.props)

        return (
            <div>
                <Step3Form handleSubmit={this.props.next} />
            </div>
        )
    }
}

export default Step3