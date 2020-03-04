import React, { Component, Fragment } from 'react';
import SoundGenerator from '../components/SoundGenerator'

class SoundContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      sounds: [],
      activeSounds: []
    }
  }
  render(){
    return(
      <Fragment>
      <h1>Sound Container!!!</h1>
      <SoundGenerator/>
      </Fragment>
    )
  }
}
export default SoundContainer;
