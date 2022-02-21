import React from 'react'
import Step1 from './Step1';
import Step2 from './Step2';

class MasterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            language: '',
        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        this.setState({ currentStep: currentStep })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        onClick={this._next}
                        language={this.state.language}
                    />
                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        language={this.state.language}
                    />
                </form>
            </>
        );
    }
}

export default MasterForm