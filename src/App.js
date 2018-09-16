import React, { Component } from 'react';
import './App.css';
import Textbooks from './users/Textbooks';
import Users from './users/Users';
import Parent from './components/parentToChild/Parent';

class App extends Component{

  state = {
    name: 'state: Ji Hoon Lee',
    title: 'Title for chidlren'
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

  changeTheWorld = (newTitle) => {
    this.setState({
      title: newTitle
    })
  }

  render(){
    return(
      <div className="App">
        <h1>CHANGING STATES</h1>
        <button onClick={()=> this.changeName("AnonIsSlow:(")}>Change state using anon function!</button>
        <button onClick={this.changeName.bind(this, "BindedIsFast:)")}>Change state using bind function!</button><br/>
        <label>Type something in the input: </label><input type="text" onChange={this.changeNameFromInput} placeholder={this.state.name}/>
        <br/><br/>
        <div>{this.state.name}</div>
        <Users title="USERS LIST"/>
        <Textbooks/>
        <h1>GRANDPARENT TO PARENT TO CHILD COMPONENTS</h1>
        {/* app is grandfather */}
        <Parent changeTheWorldEvent={this.changeTheWorld.bind(this, 'Changed the World!')} 
                keepTheWorldSameEvent={this.changeTheWorld.bind(this, 'Kept the World Same!')}
                title={this.state.title}/>
      </div>
    )
  }
}

export default App;
