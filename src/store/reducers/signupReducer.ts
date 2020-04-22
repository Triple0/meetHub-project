import {
    SignupListState,
    SignupActionTypes,
    ADD_SIGNUP_TO_LIST,
  } from "../types/signupTypes";
  
  //set up default or "initial" state for todo list
  const initialState: SignupListState = {
    signupList: [
      {
        username: "sohampatel",
        password: "12345",
        email: "sohampatelk@yahoo.com"
      },
      {
        username: "ryan",
        password: "12345",
        email: "ryan@yahoo.com"
      },
    ],
  };
  
  //here is todo reducer /functionality setup
  export function signupReducer(state = initialState, action: SignupActionTypes) {
    switch (action.type) {
        
      case ADD_SIGNUP_TO_LIST:
        return {
          ...state,
          //add one new task into the end of our array !!
          signupList: [...state.signupList, action.payload],
        };
  
      default:
        return state;
    }
  }
  