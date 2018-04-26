import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchInsult, fetchInsults, comeback } from '../../actions/insults'
import Sound from 'react-sound'
import "./Comebacks.css"

class Comebacks extends PureComponent {
  handleClick = (e) => {
    e.preventDefault()
    this.props.fetchInsults()
  }

  handleComeback = (e) => {
    const comeback = e.target.textContent
    this.props.comeback(this.props.currentinsult.comeback, comeback, this.props.chances) 
  }
  render() {
    const {chances, insults} = this.props
    return(
      <div>
        {
          chances === 0 ? (
            <div>
              <Sound 
              url="./loser.mp3 "
              playStatus={Sound.status.PLAYING}
              autoLoad={true}/>
              <img className="loser" alt='loser' src="https://media1.giphy.com/media/3og0IEeKFFlzaykixW/giphy.gif" />
            </div>
        ): console.log('keep going!')
        }
       {insults.length > 1 ? insults.map(insult => <p onClick={(e) => this.handleComeback(e)} key={insult.id}>{insult.comeback}</p>) : <p>{insults.insulted}</p>}
       <button onClick={this.handleClick}>Comebacks!</button>
       
      </div>
    )
  }
}

const mapStateToProps = (state) => {
   return {
     insults: state.insults,
     currentinsult: state.currentinsult,
     chances: state.chances
   }
} 

export default connect(mapStateToProps, { fetchInsult, fetchInsults, comeback })(Comebacks)