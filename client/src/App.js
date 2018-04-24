import React, { Component } from 'react';
import GamePage from './components/gamePage'
import NewGame from './components/newGame'
import SignupPage from './components/signup/SignupPage'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


class App extends Component {
  render() {
    return (

      <Router>

        <div>
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/games" component={NewGame} />
          <Route exact path="/" render={() => <Redirect to="/games" />} />
          <Route exact path="/games/:id" component={GamePage} />
         </div>
         
      </Router>

    );
  }
}

export default App;
