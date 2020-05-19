import React, { Component } from 'react';
import './App.css'


class App extends Component {
  constructor(props){
    super(props);
    this.state={  }
  }
  render(){
    return(
        <div className="bio">
        <h1>George Washington</h1>
        <h2>123-456-7890</h2>
        <p>July 4th,1776</p>
    </div>
    )
  }
}