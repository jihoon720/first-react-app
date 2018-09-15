import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Textbooks from './users/Textbooks';

import Users from './users/Users';


class App extends Component{

  state = {
    name: 'state: Ji Hoon Lee'
  }

  changeName = (newName) => {
    this.setState({
      name: newName
    });
  }

  changeNameFromInput = (event) =>{
    this.setState({
      name: event.target.value
    });
  }

  render(){
    return(
      <div className="App">
        <button onClick={()=> this.changeName("AnonIsSlow:(")}>Change state using anon function!</button>
        <button onClick={this.changeName.bind(this, "BindedIsFast:)")}>Change state using bind function!</button><br/>
        <label>Type something in the input: </label><input type="text" onChange={this.changeNameFromInput} placeholder={this.state.name}/>
        <br/><br/>
        <div>{this.state.name}</div>
        <Users title="USERS LIST"/>
        <Textbooks/>
      </div>
    )
  }
}

export default App;
