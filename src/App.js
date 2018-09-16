import React, { Component, Fragment } from 'react';
import './App.css';
import Textbooks from './users/Textbooks';
import Users from './users/Users';
import Parent from './components/parentToChild/Parent';
import Course from './components/Course';


const Temp = () => {
  return(
    <Fragment>
      <div>Hi</div>
      <div>Hello</div>
    </Fragment>
  )
}


class App extends Component{

  state = {
    name: 'state: Ji Hoon Lee',
    title: 'Title for chidlren',
    courses:[
      {id: "asdf", name: 'CS3413', prof: 'Ken'},
      {id: "qewr", name: 'CE3963', prof: 'Yuri'},
      {id: "zxcv", name: 'SWE4401', prof: 'Blitzcrank'}
    ]
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

  deleteUser = (index, e)=>{
    //state cannot be mutated!
    //create a duplicate array by Object.assign. Now courses variable has duplicate items of this.state.courses
    const courses = Object.assign([], this.state.courses);
    courses.splice(index, 1); //splice(index, howmany);
    this.setState({
      courses: courses
    });
  }

  changeCourseName = (id, e)=>{
    const index = this.state.courses.findIndex((course)=>{
      return course.id === id
    });
    const course = Object.assign({}, this.state.courses[index]);
    course.name = e.target.value;

    const courses = Object.assign([], this.state.courses);
    courses[index] = course;
    this.setState({
      courses: courses
    });
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
        <h1>COURSE LIST!</h1>
        <ul>
          {
            this.state.courses.map((course, index)=>{
              return(
                <Course prof={course.prof} key={course.id} delEvent={this.deleteUser.bind(this, index)} changeEvent={this.changeCourseName.bind(this, course.id)}>{course.name}</Course>
              )
            })
          }
        </ul>
        <h1>FRAGMENTS</h1>
        <Temp/>
      </div>
    )
  }
}

export default App;
