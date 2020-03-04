import React, { Fragment, Component} from 'react';

class SoundGenerator extends Component {
  constructor(props){
    super(props)
    this.state = {
      // successNoise: null
      frequencyValue: "700"
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleFrequencyChange = this.handleFrequencyChange.bind(this)
    this.changeFrequency = this.changeFrequency.bind(this)
  }

handleButtonClick(){
  if (!this.props.context.createOscillator) return null
  const successNoise = this.props.context.createOscillator();

  successNoise.frequency.value = this.state.frequencyValue;
  successNoise.type = "square";
  successNoise.frequency.exponentialRampToValueAtTime(
    50,
    this.props.context.currentTime + 0.05
  );
  successNoise.frequency.exponentialRampToValueAtTime(
    1000,
    this.props.context.currentTime + 0.15
  );

  const successGain = this.props.context.createGain();
  successGain.gain.exponentialRampToValueAtTime(
    0.01,
    this.props.context.currentTime + 0.3
  );

  const successFilter = this.props.context.createBiquadFilter("bandpass");
  successFilter.Q.value = 0.05;

  successNoise
  .connect(successFilter)
  .connect(successGain)
  .connect(this.props.context.destination);
  successNoise.start();
  successNoise.stop(this.props.context.currentTime + 0.2);

}

handleFrequencyChange(event){
  this.changeFrequency(event.target.value)
  console.log(event.target.value)
}

changeFrequency(frequency){
  this.setState({frequencyValue: frequency})
}
render(){
  return (

    <Fragment>
      <h1>Sound Generator!</h1>
      <p>Audio settings:</p>
      <input type="range" min="50" max="1500" onChange={this.handleFrequencyChange} value={this.state.frequencyValue}/>
      <button onClick={this.handleButtonClick}> Test</button>

    </Fragment>
)
}


    // <form onSubmit={handleButtonClick}>
    //   <input onChange={handleFrequencyChange} type="range" id="frequency" name="frequency" min="0" max="11" value="1"/>
    //   <label for="frequency">Frequency</label>
    //   <input type="submit" value="Play noise"/>
    // </form>


}
export default SoundGenerator;
