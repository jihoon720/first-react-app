import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Textbooks from './users/Textbooks';

import Users from './users/Users';


class App extends Component{
  render(){
    return(
      <div className="App">
        <Users title="Users list"/>
        <Textbooks/>
      </div>
    )
  }
}

export default App;
