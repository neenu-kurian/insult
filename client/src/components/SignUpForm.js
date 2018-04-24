import React, {PureComponent} from 'react'
import {userSignUp} from '../actions/signUp'
import { connect } from 'react-redux'

 class SignUpForm extends PureComponent {

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="firstName">firstName</label>
                <input type="firstName" name="firstName" id="firstName" value={
                this.props.firstName||" "
                }onChange={this.handleChange}/>
                </div>
             <div>
               <label htmlFor="lastName">lastName</label>
               <input type="lastName" name="lastName" id="lastName" value={
               this.props.lastName||" "
               }onChange={this.handleChange}/>
             </div>
              <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" value={
                   this.props.email|| " "
                  }onChange={this.handleChange}/>
             </div>
             <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={
                this.props.password||" "
            }onChange={this.handleChange}/>
             </div>

             <div>
               <label htmlFor="confirm password">Confirm Password</label>
               <input type="password" name="confirmPassword" id="confirmPassword" value={
                 this.props.password||" "
               }onChange={this.handleChange}/>
             </div>

             <button type="submit">Submit </button>
            </form>

        )
    }
}

const mapStateToProps=(state)=>{
    // state=this.state
    signup: state.signup
}

export default connect(mapStateToProps,{userSignUp} )(SignUpForm)
