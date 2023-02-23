import React, { Component } from 'react'
import Image from "./images/red-heart-11121.svg"
export default class Button extends Component {
    state={
        value:false,
        text:"Like",
        showImage:false
    }
     eventHandler=()=>{
this.state.value===false?this.setState({value:true,text:"Liked"}):this.setState({value:false,text:"Like"}); 
}
z
  render() {

  

    return (
    <>
    
    {this.state.value===true&& <img src={Image} alt="red__heart" className='image'></img>}
        <button onClick={this.eventHandler} className="button">{this.state.text}</button>
        
        </>
            
        )
  }
    
  
}
