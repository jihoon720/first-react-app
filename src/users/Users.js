import React, { Component } from 'react';
import User from './User';

class Users extends Component{
  render(){
    return(
      <div className="users">
        <h1>{this.props.title}</h1>
        <User name="Mary" age="25"/>
        <User name="Sue" age="42"/>
        <User name="John" age="13"/>
        <User name="Jack" age="7"/>
      </div>
    )
  }
}

export default Users;