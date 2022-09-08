import React from "react";

export default class StatefulGreeting extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    introduction : "Hello",
    buttonText : "Exit",
  };

}

  handleClick(){
    this.setState({
      introduction : "Goodbye",
      buttonText : "Clicked",
    });
  }


render() {
  return (
  <div>
  <h1>{this.state.introduction} {this.props.greeting} welcome to our website</h1>
  <button onClick = {() => this.handleClick()}>{this.state.buttonText}</button>
  </div>
  )
}

}

