import React, { Component } from 'react';

class Children extends Component{
  constructor(){
    super();
    console.log("Children constructor");
  }

  componentWillMount(){
    console.log("Children componentWillMount");
  }

  componentDidMount(){
    console.log("Children componentDidMount");
  }

  componentWillReceiveProps(){
    console.log("Children componentWillReceiveProps");
  }
  
  //if true, gets updated
  //if false, does not change
  shouldComponentUpdate(nextProps, nextState){
    console.log("Children shouldComponentUpdate");
    return true;
  }

  //if component will get updated, gets executed
  componentWillUpdate(){
    console.log("Children componentWillUpdate");
  }

  componentDidUpdate(nextProps, nextState){
    console.log("Children componentDidUpdate");
    return true;
  }

  componentWillUnmount(){
    console.log("Children componentWillUnmount");
  }
  
  render(){
    console.log("Children render");
    return(
      <div>Children component
        Children {this.props.name}
      </div>
    )
  }
}

export default Children;