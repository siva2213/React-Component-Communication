import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './components/parent';

class App extends Component {
  state = { 
    title: 'click here'
   }
  changeTitleFromChild1 = (val) => {
    return this.setState({
      title: val
    })
  }
  changeTitleFromChild2 = (val) => {
    debugger
    return this.setState({
      title: val.target.value
    })
  }
  render() { 
    return (
      <div className="App">
        <Parent
        title={this.state.title}
        changeTitleFromChild1={this.changeTitleFromChild1.bind(this, 'you have changed')}
        changeTitleFromChild2={this.changeTitleFromChild2}
        />
      </div>
    );
  }
}
 
export default App;
