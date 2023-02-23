import React, { Component } from 'react'

import Info from "./components/Info";

export default class App extends Component {
  render() {
    return ( <>
    <>
      <Info
        title="Wine La Grand Noir Purple"
        info=" France, purple, 0.75 l"
        score="3.6"
      />

   
    </>
    <>
      <Info
        title="Wine La Grand Noir Blue"
        info="  Italy, red, 1 l"
        score="4.8"
      />
    

    </>
  </>)
  }
}
