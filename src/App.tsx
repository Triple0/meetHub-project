import React from 'react';
import meetHubLogo from './logo/meetHubLogo.png';
import './App.css';
import NewsForm  from './components/NewsForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import { Grid } from 'semantic-ui-react';


export interface IAppProps {

}

export default class App extends React.Component<IAppProps> {
  render() {
    return (
      <Grid centered>
        <Router>
        <Switch>
          <Route path="/NewsForm" />
          <Route path="/Profiles" />
        </Switch>
        </Router>
        <div className="App">
          <header className="App-header">
            <img src={meetHubLogo} className="App-logo" alt="logo" />
          </header>
          <NewsForm />
        </div>

      </Grid>
    );
  }
}