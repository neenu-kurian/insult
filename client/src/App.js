import React, { Component } from 'react';
import GamePage from './components/gamePage'
import NewGame from './components/newGame'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import SignUpForm from './components/SignUpForm'

class App extends Component {
  render() {
    return (

      <Router>

        <div>
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/signup/games" component={NewGame} />
          <Route exact path="/" render={() => <Redirect to="/games" />} />
          <Route exact path="/signup/games/:id" component={GamePage} />
         </div>
         
      </Router>

    );
  }
}

export default App;
