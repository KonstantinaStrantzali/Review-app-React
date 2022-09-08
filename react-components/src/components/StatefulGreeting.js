

import React from "react";

export default class StatefulGreeting extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    introduction : "Hello",
    buttonText : "Exit",
    count : 0,
  };

}

  handleClick(){
    this.setState({
      introduction : this.state.introduction === "Hello" ? "Goodbye" : "Hello",
      buttonText : this.state.buttonText === "Exit" ? "Enter" : "Exit",
    });
  }
 
  increment(){
    this.setState({
      count : this.state.count + 1,
    })
  }

render() {
  return (
  <div>
  <h1>{this.state.introduction} {this.props.greeting} welcome to our website</h1>
  <button onClick = {() => this.handleClick()}>{this.state.buttonText}</button>
  <p>You clicked {this.state.count} times</p>
  </div>
  )
}

}

