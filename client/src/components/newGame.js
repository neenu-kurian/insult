import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class NewGame extends PureComponent {
    render() {
     return (
            <button className='App start-btn'><Link to="/games/1">New Game</Link></button>
        )
    }
}

export default NewGame;