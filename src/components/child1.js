import React from 'react';

const child1 = (props) => {
  return (
    <div>
      <h3>Child1</h3>
      <h6>{props.parentprop}</h6>
      <input type="button" value={props.title} onClick={props.changeTitleFromChild1}/>
    </div>
  )
}

export default child1;