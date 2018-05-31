import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class NewGame extends PureComponent {
    render() {
        const id=1;
     return (
            <button className='App start-btn'><Link to={`/games/${id}`}>New Game</Link></button>
        )
    }
}

export default NewGame;