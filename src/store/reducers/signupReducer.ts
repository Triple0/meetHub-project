//import types from signupTypes.ts
import {
  SignupListState,
  SignupActionTypes,
  ADD_SIGNUP_TO_LIST
} from '../types/signupTypes'

//set up default or "initial" state for SignupList
const initialState: SignupListState = {
  signupList: [
    {
      username: 'sohampatel',
      password: '12345',
      email: 'sohampatelk@yahoo.com',
      about: 'Hi....I like programming and sports..'
    },
    {
      username: 'ryan',
      password: '12345',
      email: 'ryan@yahoo.com',
      about: 'Hi...My interest are computers and ice-hockey.'
    }
  ]
}

//here is signupReducer /functionality setup which adds signup detail into array
export function signupReducer (
  state = initialState,
  action: SignupActionTypes
) {

  //just for checking that the array og signup date added or not..
  console.log(state);
  console.log(action);

  switch (action.type) {
    case ADD_SIGNUP_TO_LIST:
      return {
        ...state,
        //add one new Signup Detail into the end of our array !!
        signupList: [...state.signupList, action.payload]
      }

    default:
      return state
  }
}
