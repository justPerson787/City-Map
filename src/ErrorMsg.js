import React, { Component } from 'react';
import './App.css';

class ErrorMessage extends Component {
  state = {
    message: 'This page didn’t load Google Maps correctly'
  }

  render() {
    return (
      <h1>{this.state.message}</h1>
    )
  }
}

export default ErrorMessage;