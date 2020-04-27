//define interfaces for Signup
  export interface userDescription {
    username:string,
    about: string,
    imagurl:string,
    description:string
  }
  
  //interface for SignupList inventory state
  export interface SignupListState {
    signupList: userDescription[]
  }
  
  //define action strings for ADD_SIGNUP_TO_LIST
  export const ADD_SIGNUP_TO_LIST = 'ADD_SIGNUP_TO_LIST'
  
    
  //interface for function AddSignupToList which is used in signupAction.ts
  interface AddSignupToList {
    type: typeof ADD_SIGNUP_TO_LIST
    payload: userDescription //we need to pass a new Item that should be added to out store.
  }
  
  //Define action types inclide add SignupDetail list
  export type SignupActionTypes = AddSignupToList;