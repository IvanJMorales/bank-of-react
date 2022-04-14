import React, {Component} from 'react';

class Credits extends Component {
    constructor() {
        super()
        this.state = {
            credit: {
                creditName: "",
                creditAmount: ""
            }
        }
    }
    
    // When the credit name input is changed, capture the input and update the state (credit.creditName)
    handleChange = (e) => {
        const updatedCredit = {...this.state.credit}
        const inputField = e.target.name
        const inputValue = e.target.value
        updatedCredit[inputField] = inputValue

        this.setState({credit: updatedCredit})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.mockAddCredit(this.state.credit)

    }
    render() {
        return (
            <div>
                <h1>Credits</h1>
                <div>
                    <button>Add Credit</button>
                </div>
                <h2>Credit Info: {this.props.creditInfo}</h2>
                <h2>Credit Amount: {this.props.creditAmount}</h2>
                <div>
                    <form onSubmit={this.handleSubmit}></form>
                </div>
            </div>
        )
    }
}

export default Credits