
import React from "react";
import { Component } from "react";

class Header extends Component{

    constructor(){
        super();
        this.state = {
            message: "Welcome Visitor"
        }
    }
    changeMessage(){
        this.setState({message:"Static text"})
    }
        render(){
        return (
        <div>
            <h1>{this.state.message}</h1>
           Enter value: <input id="i1"></input>
            <button onClick={()=>this.changeMessage()}>Click</button>
        </div>
        )
    }
}

export default Header;