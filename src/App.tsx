import React, { Component } from "react";
import "./App.css";
//import { connect } from "react-redux";
import SignupForm from "./components/SignupForm";
import Login from "./components/Login";
import { Grid } from "semantic-ui-react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export interface IAppProps{
}

export default class App extends Component<IAppProps> {
  render() {
    return (
      <Grid centered>
          {/* Start with /Login in browser it can appear Login component */}
        <Switch>
          <Route path="/SignupForm" component={SignupForm}/>
          <Route path="/Login" component={Login}/>
        </Switch>   
      </Grid>
    );
  }
}


