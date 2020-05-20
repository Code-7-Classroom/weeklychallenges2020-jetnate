import React, { Component } from 'react';
import './App.css'


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      person: {
        name:"George Washington",
        number:"123-456-7890",
        dateofbirth:"July 4th, 1776"
      }
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
    return( <div className="bio"> 
    <h1> {this.props.BasicInfo.name}</h1>
      <h2>{this.props.BasicInfo.number}</h2>
     <p>{this.props.BasicInfo.dateofbirth}</p>
    </div>)



  }
}



export default App;




