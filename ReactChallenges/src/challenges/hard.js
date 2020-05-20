import React, { Component } from 'react';
import './App.css'

export default App;

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
  }
  render() ;
    return <div className="Person">

        {this.state.person.map( person =>{
            return <p>{person.name}</p>
                <p>{person.phone}</p>
                <p>{person.DOB}</p>
            
        })}
    </div>



export default person;