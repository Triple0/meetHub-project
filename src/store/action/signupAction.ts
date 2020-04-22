//import some interfaces from type.ts
import {
    ADD_SIGNUP_TO_LIST,
    
    SignupActionTypes,
    Signup
  } from "../types/signupTypes";
  
  // this add task to list....
  export function addSignupToList (signup: Signup): SignupActionTypes {
    return {
      type: ADD_SIGNUP_TO_LIST,
      payload: signup
    }
  }
  