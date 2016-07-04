import React from 'react';
import {Component} from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
      {this.props.children}
      <h1>Working</h1>
   
      </div>
    );
  }
}
