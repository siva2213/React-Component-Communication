import React from 'react';

const child1 = (props) => {
  return (
    <div>
      <h3>Child1</h3>
      <ul>
        { props.userData.map(user => {
            return (<li key={user.age}>Name: {user.name} | Age: {user.age}</li>)
        })}
      </ul>
      <h6>{props.parentprop}</h6>
      <input type="button" value={!props.accessButton ? props.title : 'access removed'} onClick={props.changeTitleFromChild1}/>
    </div>
  )
}

export default child1;