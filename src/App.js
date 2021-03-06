import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Routes from './route' 
import NavBar from './views/NavBar/Navbar'
import './annimations.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route component = {NavBar}/>
      <Routes/>
      </div>
    );
  }
}

export default App;
