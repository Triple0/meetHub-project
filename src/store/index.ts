import { combineReducers, createStore } from 'redux';
import { newsFeedReducer } from './reducers/reducers';
import { signupReducer } from './reducers/signupReducer';

// Combine all the reducers together for a global app.
const rootReducer = combineReducers( {
    newsFeed: newsFeedReducer,
    signup: signupReducer   //You can add reducer from coma here. we can set up boiler late here for multiple reducers
} );

// "typeof" will grab the type that the "combineReducers" function returned.
export type RootState = ReturnType<typeof rootReducer>;

//Here is our redux store! It knows about our actions and reducers.
export default function configureStore() {
    const store = createStore( rootReducer );
    return store;
}
