import React, { Component } from "react";
import "./App.css";
//import { connect } from "react-redux";
import SignupForm from "./components/SignupForm";
import Login from "./components/Login";
import { Grid } from "semantic-ui-react";
import {Switch, Route} from "react-router-dom";

export interface IAppProps{
}

export default class App extends Component<IAppProps> {
  render() {
    return (
      <Grid centered>
          {/* Start with localhost:3000/Login in browser it can appear Login component 
          after that it will switch from login and signup form..*/}
        <Switch>
          <Route path="/SignupForm" component={SignupForm}/>
          <Route path="/Login" component={Login}/>
        </Switch>   
      </Grid>
    );
  }
}


