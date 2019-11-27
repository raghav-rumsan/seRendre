import React, { Component } from 'react'
import Step1Form from '../Steps/Step1/Step1Form';
import Step2Form from '../Steps/Step2/Step2Form';
import Step3Form from '../Steps/Step3/Step3Form';

export default class CreateAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phase: 1
        }
    }

    changePhase = () => {
        let phase = this.state.phase
        phase += 1
        this.setState({ phase })
    }

    render() {
        console.log('state', this.state)
        if (this.state.phase === 1) return <Step1Form changePhase={this.changePhase} />
        if (this.state.phase === 2) return <Step2Form changePhase={this.changePhase} />
        if (this.state.phase === 3) return <Step3Form changePhase={this.changePhase} />
    }
}
