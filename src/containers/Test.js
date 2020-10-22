import React, { Component } from 'react'
import * as ACTION from '../actions/actions'
import { connect } from 'react-redux'
import Auth from '../utils/Auth'

const auth = new Auth();

class Test extends Component {
    render() {
        const user_text = 'Surendra Rathaur'
        return (
            <div>
                <h1>Test</h1>
                <button onClick={() => auth.login()}>Login</button>
                <button onClick={() => this.props.action1()}>Dispatch Action 1</button>
                <button onClick={() => this.props.action2()}>Dispatch Action 2</button>
                <button onClick={() => this.props.action_create1()}>Dispatch Action Create 1</button>
                <button onClick={() => this.props.action_create2()}>Dispatch Action Create 2</button>
                <button onClick={() => this.props.action_user_input(user_text)}>Dispatch Action Create User</button>
                {this.props.text ? <h1>{this.props.text}</h1> : null}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isloader: state.reducer1.isloader,
        text: state.user_reducer.user_text
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action1: () => dispatch(ACTION.SUCCESS),
        action2: () => dispatch(ACTION.FAILURE),
        action_create1: () => dispatch(ACTION.success()),
        action_create2: () => dispatch(ACTION.failure()),
        action_user_input: (text) => dispatch(ACTION.user_input(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
