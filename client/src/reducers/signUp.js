import { SIGN_UP } from '../actions/signUp'

const initalState={
   firstName:"neenu",
   lastName:"k",
   email:"abc@gmail.com",
   passsword:"password",
   confirmpassword:"password"
}

export default function (state=initalState,{type,payload}){
    switch(type) {
        case SIGN_UP:
        return{
            payload
        }
        default:
        return state
    }
}