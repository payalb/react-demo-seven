import React, { Component } from 'react'
//rce to get default code snippet for class component
export class counter extends Component {
//rconst to get default constructor code.
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
 
    incrementCount(){
        //have to use setState to change the state
            this.setState((prevState, props)=> ( {count: prevState.count+ props.addValue})
        )
    }
    incrementCountBy5(){
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }
  render() {
    
    return (
      <div>
        {this.state.count}
        <button onClick={()=> this.incrementCountBy5()}>Click here</button>
      </div>
    )
  }
}

export default counter
