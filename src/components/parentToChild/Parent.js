import React from 'react';
import Child from './Child';

const Parent = (props) => {
  return(
    <div>
      {/* when you do'...props', it passes to child component! */}
      <Child doWhatever={props.changeTheWorldEvent} title={props.title}/>
      <Child doWhatever={props.keepTheWorldSameEvent} title={props.title}/>
    </div>
  )
}

export default Parent;