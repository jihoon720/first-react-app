import React from 'react';

const Textbook = (props) =>{
  const name = props.name ? props.name : "Not specified";
  const cost = props.cost ? props.cost : "Not specified";
  return(
    <div>{name} | ${cost}</div>
  )
}

export default Textbook;