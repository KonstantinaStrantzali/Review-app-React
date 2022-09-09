import React, { Component } from 'react';

export class EventClass extends Component {
    clickHandler() {
    console.log("Something")
  }
  render() {
    return (
    <div>
      <button onClick = {this.clickHandler}>EventClass</button>
    </div>
    );
  }
}

export default EventClass


