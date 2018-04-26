import React, { Component } from 'react';
import Insult from './insults/Insult'
import Comebacks from './comebacks/Comebacks';
import { fetchInsults } from '../actions/insults'

import { connect } from 'react-redux'
import '../App.css';

class GamePage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
           <h1 className="App-title">Welcome to Insult Sword Fighting</h1>
          <img src="https://i.giphy.com/media/eXUQGrHrur4Fq/giphy.webp" alt="Sowrd Gif" />
        </header>
        <p>Chances left: {this.props.chances}</p>
        <Insult />
        <br />
        <Comebacks />    
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
  insults: state.insults,
  chances: state.chances
  }
)

export default connect(mapStateToProps, { fetchInsults })(GamePage)