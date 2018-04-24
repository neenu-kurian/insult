import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchInsults, fetchInsult } from '../actions/insults'

class Insult extends PureComponent {
  handleClick = (insults, e) => {
    e.preventDefault()
    let newPhrase = ''
    // console.log(insults.insult)
    e.target.textContent === insults.insult ? newPhrase = insults.comeback : newPhrase = insults.insult
    e.target.textContent = newPhrase
  }

  hitMe(e) {
    e.preventDefault()
    this.props.fetchInsult()
  }
  render(){
    const insults = this.props.insults
    // console.log(insults)    
    return (
      <div>

      {
        insults ? <p key={insults.id} onClick={(e) => this.handleClick(insults, e)}>{insults.insult}</p> : <p></p>
      }
         <button type='submit' onClick={(e) => this.hitMe(e)}>Insult</button>
      </div>
    )
  }
}

const mapStateToProps = ({insults}) => ({insults})

export default connect(mapStateToProps, { fetchInsults, fetchInsult })(Insult)

// insults ? insults.map((insult) => <p key={insult.id} onClick={(e) => this.handleClick(insult, e)}>{insult.insult}</p>) : <p>Insult me!</p>