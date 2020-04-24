//import some interfaces from signupType.ts
import {
  ADD_SIGNUP_TO_LIST,
  SignupActionTypes,
  Signup
} from '../types/signupTypes'

// this function add Signup detail into signup list....
export function addSignupToList (signup: Signup): SignupActionTypes {
  return {
    type: ADD_SIGNUP_TO_LIST,
    payload: signup
  }
}
