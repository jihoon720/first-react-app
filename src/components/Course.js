import React from 'react';

const Course = (props) => {
  return(
    <li>
      <span>{props.children} Prof: {props.prof}</span>
      <input onChange={props.changeEvent} placeholder={props.children}/>
      <button onClick={props.delEvent}>Delete</button>
    </li>
  )
}

export default Course;