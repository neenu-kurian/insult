import React, { Component } from 'react';
import Insult from './insults/Insult'
import Comebacks from './comebacks/Comebacks';
import { fetchInsults } from '../actions/insults'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import '../App.css';

class GamePage extends Component {
  render() {
    const {chances, authenticated} = this.props
    return (
      <div className="App">
        <form>
          <input className='signup-button' type='submit' value='New Game' />
        </form>
        {
          authenticated ? 
          <button className="signup-button"><Link to="/login">Login</Link></button> : 
          <Redirect to="/games" />
        }
        <header className="App-header">
           <h1 className="App-title">Insult Sword Fighting</h1>
          <img src="http://www.communication4all.co.uk/animated%20gifs/pirate_ninja_sword_fight_hg_clr.gif" alt="Sowrd Gif" />
        </header>
        <p>Chances left: {chances}</p>
        <Insult />
        <br />
        <Comebacks />    
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    authenticated: state.currentUser,
    insults: state.insults,
    chances: state.chances
  }
)

export default connect(mapStateToProps, { fetchInsults })(GamePage)