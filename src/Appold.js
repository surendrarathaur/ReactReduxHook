import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
