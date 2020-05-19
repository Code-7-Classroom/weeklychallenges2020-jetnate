import React, { Component } from 'react';
import './App.css'


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      person: [
        {
          name : "George Washington",
          phone: "123-45-6789",
          DOB: "02/20/34"
        },
        {
          name : "John Adams",
          phone: "123-45-6790",
          DOB: "02/20/34"
        },
        {
          name : "Thomas Jefferson",
          phone: "123-45-6789",
          DOB: "02/20/34"
        },
        {
          name : "Barack Obama",
          phone: "123-45-6789",
          DOB: "02/20/34"
        },
        {
          name : "Bill Clinton",
          phone: "123-45-6789",
          DOB: "02/20/34"
        }
      ]
      }
    }
    render(){
      return(
     <Medium BasicInfo={this.state.person} />
      )
    }
  }
  
  class Medium extends React.Component{
    render(){
      return(
        <div className="bio">
      <h1> {this.props.BasicInfo.name}</h1>
        <h2>{this.props.BasicInfo.number}</h2>
       <p>{this.props.BasicInfo.dateofbirth}</p>
      </div>
  
      )
    }
  }
  
  
  
  export default App;
  // <div className="bio">
    // <h1> {this.state.person}</h1>
    // <h2>{this.state.person}</h2>
    // <p>{this.state.person}</p>
    //  </div>