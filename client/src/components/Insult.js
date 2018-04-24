import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchInsults, fetchInsult,fetchAllComebacks } from '../actions/insults'

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
    this.props.fetchAllComebacks()
    console.log('comebacks')
    if(this.props.insults[0] !== undefined) {
       
      this.props.insults.map(insult => console.log(insult.comeback))
    }
  }
  render(){
    const insults = this.props.insults
    //console.log(insults)    
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

export default connect(mapStateToProps, { fetchInsults, fetchInsult, fetchAllComebacks })(Insult)

// insults ? insults.map((insult) => <p key={insult.id} onClick={(e) => this.handleClick(insult, e)}>{insult.insult}</p>) : <p>Insult me!</p>