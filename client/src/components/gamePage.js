import React, { Component } from 'react';
import Insult from './Insult'
import '../App.css';


export default class GamePage extends Component {
    render() {
        return (
            <div className="App">

                <header className="App-header">
                    <h1 className="App-title">Welcome to Insult Sword Fighting</h1>
                    <img src="https://i.giphy.com/media/eXUQGrHrur4Fq/giphy.webp" alt="Sowrd Gif" />
                </header>
                <Insult className="Index" />

            </div>
        );
    }
}


