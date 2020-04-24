import { combineReducers, createStore } from 'redux';
import { newsFeedReducer } from './reducers/reducers';

// Combine all the reducers together for a global app.
const rootReducer = combineReducers( {
    newsFeed: newsFeedReducer
} );

// "typeof" will grab the type that the "combineReducers" function returned.
export type RootState = ReturnType<typeof rootReducer>;

//Here is our redux store! It knows about our actions and reducers.
export default function configureStore() {
    const store = createStore( rootReducer );
    return store;
}
