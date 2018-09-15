import React, { Component } from 'react';
import Info from './Info'

class User extends Component{
  render(){
    return(
      <div>
        <h4>Name: {this.props.name} | Age: {this.props.age}</h4>
      </div>
    )
  }
}

// const User = (props) =>{
//   let age = props.age ? props.age : 'NA'
//   return(
//     <div>{props.name} | Age: {age}</div>
//   )
// }

export default User;