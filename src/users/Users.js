import React, { Component } from 'react';
import User from './User';
import Info from './Info';


class Users extends Component{
  render(){
    return(
      <div className="users">
        <h1>{this.props.title}</h1>
        <User name="Mary" age="25"/>
        <Info number="1112222"/>
        <User name="Sue" age="42"/>
        <Info number="1112222"/>
        <User name="John" age="13"/>
        <Info number="1112222"/>
        <User name="Jack" age="7"/>
      </div>
    )
  }
}

export default Users;