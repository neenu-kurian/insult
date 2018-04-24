import React, { PureComponent } from 'react'
// import { connect } from 'react-redux'
// import {Link} from 'react-router-dom'
// import { Router } from 'react-router';

export default class NewGame extends PureComponent {

    handleClick() {
        window.location = '/games/1';
      }
    render() {
     return (
            <button className='start-btn' onClick={this.handleClick}>New Game</button>
        )
    }
}

