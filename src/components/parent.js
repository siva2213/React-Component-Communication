import React from 'react';
import Child1 from './child1'
import Child2 from './child2'
 
const parent = (props) => {
  return (
    <div>
      <h1>Parent</h1>
      <Child1 {...props} parentprop="Got some 'money' from parent "/>
      <hr/>
      <Child2 {...props}/>
    </div>
  );
}

export default parent;