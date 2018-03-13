import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Splash from './components/Splash';
import Adoptions from './components/Adoptions';
import Auth from './components/Auth';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Splash} />
          <Route path="/adoptions" component={Adoptions} />
          <Route path="/auth" component={Auth} />
        </div>
      </Router>
    );
  }
}

export default App;