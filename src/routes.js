import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Signin from './components/SignIn/Signin'
import Signup from './components/SignUp/Signup'
import Navbar from './components/Navbar/Navbar'
import Counter from './components/Counter/Counter'
import Test from './containers/Test'
import History from './utils/History'

import Hook from './hooks/Hook'
import HookForm from './hooks/HookForm'

class Routes extends Component {
    render() {
        return (
            <Router history={History}>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Signin} />
                    <Route exact path="/callback" component={Signin} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/test" component={Test} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/hook" component={Hook} />
                    <Route path="/hookform" component={HookForm} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;