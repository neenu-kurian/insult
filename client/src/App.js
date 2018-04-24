import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import GamePage from './components/gamePage'
import SignupPage from './components/signup/SignupPage'
import NewGame from './components/newGame'
// import insult from './components/Insult'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
           
          </nav>
          <main style={{marginTop:75}}>
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/games" component={NewGame} />
            <Route exact path="/games/:id" component={GamePage} />
            <Route exact path="/" render={ () => <Redirect to="/games" /> } />
          </main>
        </div>
      </Router>
    )
  }
}
export default App
