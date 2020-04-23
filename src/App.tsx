import React, { Component } from "react";
import "./App.css";
//import { connect } from "react-redux";
import SignupForm from "./components/SignupForm";
import Login from "./components/Login";
import { Grid } from "semantic-ui-react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Grid centered>
          <Router>
          <SignupForm />
          
          <Switch>
            <Route>

            </Route>

          </Switch>
          </Router> 
      </Grid>
    );
  }
}

export default App;
