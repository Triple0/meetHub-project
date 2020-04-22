import {combineReducers,createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {signupReducer} from "./reducers/signupReducer";

//combine all the reducers together for a global app
const rootReducer = combineReducers({
    signup:signupReducer
});

//"typeof" will grab the type that the "combineReducers" function
export type RootState = ReturnType<typeof rootReducer>;

//Here is our redux store ! It knows about our actions and reducers.
export default function configureStore(){
    const store = createStore(
        rootReducer,composeWithDevTools(applyMiddleware())
    );
    return store;
}