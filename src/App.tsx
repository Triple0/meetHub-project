import React from 'react';
import './App.css';
import NewsFeed from './components/NewsFeed';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NewsFeed />

        </header>
      </div>
    );
  }
}