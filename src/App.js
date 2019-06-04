import React, { Component } from 'react';
import './App.css';
import Parent from './components/parent';

class App extends Component {
  state = {
    buttonFlag: false,
    title: 'set access to change user age',
    userData: [
      {name: "siva", age: 27},
      {name: "taru", age: 26},
      {name: "yesh", age: 25},
    ]
   }
  changeTitleFromChild1 = (val) => {
    return this.setState({
      buttonFlag: !this.state.buttonFlag
    })
  }
  changeTitleFromChild2 = (val) => {
    return this.setState({
      title: val.target.value
    })
  }
  changeUserAge = () => {
    if (this.state.buttonFlag) {
      const tempData = this.state.userData.map(user => {
        const tempUser = user
        return tempUser.age += 10
      })
      debugger
      this.setState({
        tempData
      })
    }
    console.log(this.state, 'state doesn\'t change')
  }
  render() { 
    return (
      <div className="App">
        <Parent
        title={this.state.title}
        userData={this.state.userData}
        accessButton={this.state.buttonFlag}
        changeTitleFromChild1={this.changeTitleFromChild1}
        changeTitleFromChild2={this.changeTitleFromChild2}
        changeUserAge={this.changeUserAge}
        />
      </div>
    );
  }
}
 
export default App;
