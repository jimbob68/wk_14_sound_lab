import React, { Component, Fragment } from 'react';
import SoundGenerator from '../components/SoundGenerator'

class SoundContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      sounds: [],
      activeSounds: [],
      context: new window.AudioContext()
    }
  }

  // runAudioContext(){
  //   contextAlias = new window.AudioContext()
  //   return contextAlias
  // }

  componentDidMount(){
  }

  render(){
    return(
      <Fragment>
      <h1>Sound Container</h1>

      <SoundGenerator context={this.state.context}/>
      </Fragment>
    )
  }
}


export default SoundContainer;
