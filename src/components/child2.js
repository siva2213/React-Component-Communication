import React from 'react';

const child2 = (props) => {
  return (
    <div>
      <h3>Child2</h3>
        change child1 button title : <input type="text" value={props.title} onChange={props.changeTitleFromChild2}></input>
    </div>
  )
}

export default child2;