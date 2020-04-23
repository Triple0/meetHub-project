//define interfaces for Signup
export interface Signup {
    username:string,
    password:string,
    email: string,
    about: string
  }
  
  //interface for SignupkList inventory state
  export interface SignupListState {
    signupList: Signup[]
  }
  
  //define action strings for ADD_SIGNUP_TO_LIST
  export const ADD_SIGNUP_TO_LIST = 'ADD_SIGNUP_TO_LIST'
  
    
  //interface for function AddSignupToList which is used in signupAction.ts
  interface AddSignupToList {
    type: typeof ADD_SIGNUP_TO_LIST
    payload: Signup //we need to pass a new Item that should be added to out store.
  }
  
  //Define action types inclide add SignupDetail list
  export type SignupActionTypes = AddSignupToList;