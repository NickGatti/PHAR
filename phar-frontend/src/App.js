import React, { Component } from 'react';
import './App.css';
import TopNav from './components/TopNav';
import SplashContent from './components/SplashContent';

class App extends Component {
  render() {
    return (
      <div className="App">
      <TopNav />
        <SplashContent />
      </div>
    );
  }
}

export default App;