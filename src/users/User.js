import React, { Component } from 'react';

class User extends Component{
  render(){
    return(
      <div>
        Name: {this.props.name} | Age: {this.props.age}
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