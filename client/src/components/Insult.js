import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Insult extends PureComponent {
  handleClick = (insult, e) => {
    e.preventDefault()
    let newPhrase = ''
    e.target.textContent === insult.insult ? newPhrase = insult.comeback : newPhrase = insult.insult
    e.target.textContent = newPhrase
  }
  render(){
    const insults = this.props.insults
    console.log(insults)    
    return (
      <div>
      {
        insults.map((insult) => <p key={insult.id} onClick={(e) => this.handleClick(insult, e)}>{insult.insult}</p>)
      }
      </div>
    )
  }
}

const mapStateToProps = ({insults}) => ({insults})

export default connect(mapStateToProps)(Insult)