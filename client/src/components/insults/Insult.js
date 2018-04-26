import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchInsults, fetchInsult } from '../../actions/insults'

class Insult extends PureComponent {
  hitMe = (e) => {
    e.preventDefault()
    let insultId = Math.floor((Math.random() * 16) + 1)
    this.props.fetchInsult(insultId)
    }

  render(){
    const insults = this.props.insults.currentinsult
    return (
      <div>
      {
        insults ? <p>{insults.insult}</p> : <p></p>
      }
        <button className="Insult-Button" onClick={this.hitMe}>Insult</button>
      </div>
    )
  }
}

const mapStateToProps = (insults,currentinsult) => {
  return {
    insults:insults,
    currentinsult:currentinsult
  }
}

export default connect(mapStateToProps, { fetchInsults, fetchInsult })(Insult)