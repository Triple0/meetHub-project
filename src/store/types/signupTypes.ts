//define interfaces for task
export interface Signup {
    username:string,
    password:string,
    email: string,
  }
  
  //interface for taskList inventory state
  export interface SignupListState {
    signupList: Signup[]
  }
  
  //define action strings
  export const ADD_SIGNUP_TO_LIST = 'ADD_SIGNUP_TO_LIST'
  
    
  //add task to list 
  interface AddSignupToList {
    type: typeof ADD_SIGNUP_TO_LIST
    payload: Signup //we need to pass a new Item that should be added to out store.
  }
  
  //Define action types inclide add and remove list
  export type SignupActionTypes = AddSignupToList;