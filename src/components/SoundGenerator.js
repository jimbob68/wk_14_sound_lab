import React, { Fragment, Component} from 'react';

class SoundGenerator extends Component {
  constructor(props){
    super(props)
    this.state = {
      wave1: "sine",
      frequencyValue1: "700",
      wave2: "sine",
      frequencyValue2: "700",

    }
    this.handleButtonClick1 = this.handleButtonClick1.bind(this)
    this.handleButtonClick2 = this.handleButtonClick2.bind(this)

    this.handleFrequencyChange1 = this.handleFrequencyChange1.bind(this)
    this.changeFrequency1 = this.changeFrequency1.bind(this)
    this.handleWaveChange1 = this.handleWaveChange1.bind(this)
    this.changeWave1 = this.changeWave1.bind(this)

    this.handleFrequencyChange2 = this.handleFrequencyChange2.bind(this)
    this.changeFrequency2 = this.changeFrequency2.bind(this)
    this.handleWaveChange2 = this.handleWaveChange2.bind(this)
    this.changeWave2 = this.changeWave2.bind(this)

  }

handleButtonClick1(){
  if (!this.props.context.createOscillator) return null
  const successNoise = this.props.context.createOscillator();

  successNoise.frequency.value = this.state.frequencyValue1;
  successNoise.type = this.state.wave1;
  // successNoise.frequency.exponentialRampToValueAtTime(
  //   50,
  //   this.props.context.currentTime + 0.05
  // );
  // successNoise.frequency.exponentialRampToValueAtTime(
  //   500,
  //   this.props.context.currentTime + 0.15
  // );

  const successGain = this.props.context.createGain();
  successGain.gain.exponentialRampToValueAtTime(
    0.01,
    this.props.context.currentTime + 0.3
  );

  const successFilter = this.props.context.createBiquadFilter("lowpass");
  successFilter.Q.value = 0.05;

  const delay = this.props.context.createDelay(0.5);
  delay.connect(this.props.context.destination)

  successNoise
  .connect(successFilter)
  .connect(delay)

  .connect(successGain)
  .connect(this.props.context.destination);
  successNoise.start();
  successNoise.stop(this.props.context.currentTime + 2);

}

handleButtonClick2(){
  if (!this.props.context.createOscillator) return null
  const successNoise = this.props.context.createOscillator();

  successNoise.frequency.value = this.state.frequencyValue2;
  successNoise.type = this.state.wave2;
  // successNoise.frequency.exponentialRampToValueAtTime(
  //   50,
  //   this.props.context.currentTime + 0.05
  // );
  // successNoise.frequency.exponentialRampToValueAtTime(
  //   500,
  //   this.props.context.currentTime + 0.15
  // );

  const successGain = this.props.context.createGain();
  successGain.gain.exponentialRampToValueAtTime(
    0.01,
    this.props.context.currentTime + 0.3
  );

  const successFilter = this.props.context.createBiquadFilter("lowpass");
  successFilter.Q.value = 0.05;

  const delay = this.props.context.createDelay(0.5);
  delay.connect(this.props.context.destination)

  successNoise
  .connect(successFilter)
  .connect(delay)

  .connect(successGain)
  .connect(this.props.context.destination);
  successNoise.start();
  successNoise.stop(this.props.context.currentTime + 2);

}

handleFrequencyChange1(event){
  this.changeFrequency1(event.target.value)
  console.log(event.target.value)
}

changeFrequency1(frequency){
  this.setState({frequencyValue1: frequency})
}

handleWaveChange1(event){
  console.log(event.target.value)
  this.changeWave1(event.target.value)

}
changeWave1(wave){
  this.setState({wave1: wave})
}


handleFrequencyChange2(event){
  this.changeFrequency2(event.target.value)
  console.log(event.target.value)
}

changeFrequency2(frequency){
  this.setState({frequencyValue2: frequency})
}

handleWaveChange2(event){
  console.log(event.target.value)
  this.changeWave2(event.target.value)

}
changeWave2(wave){
  this.setState({wave2: wave})
}
render(){
  return (

    <Fragment>
      <h2>Sound Generator</h2>
      <p>Audio settings:</p>

      <label>Noise 1</label>
      <input type="range" min="50" max="1000" onChange={this.handleFrequencyChange1} value={this.state.frequencyValue1}/>
      <button onClick={this.handleButtonClick1}> Test</button>


      <label>
        <input type="radio" value="sine"
                      checked={this.state.wave1 === 'sine'}
                      onChange={this.handleWaveChange1} />
        Sine
      </label>

      <label>
        <input type="radio" value="sawtooth"
                      checked={this.state.wave1 === 'sawtooth'}
                      onChange={this.handleWaveChange1} />
        Saw
      </label>

      <label>
        <input type="radio" value="square"
                      checked={this.state.wave1 === 'square'}
                      onChange={this.handleWaveChange1} />
        Square
      </label>
      <br/>




      <label>Noise 2</label>
      <input type="range" min="50" max="1000" onChange={this.handleFrequencyChange2} value={this.state.frequencyValue2}/>
      <button onClick={this.handleButtonClick2}> Test</button>


      <label>
        <input type="radio" value="sine"
                      checked={this.state.wave2 === 'sine'}
                      onChange={this.handleWaveChange2} />
        Sine
      </label>

      <label>
        <input type="radio" value="sawtooth"
                      checked={this.state.wave2 === 'sawtooth'}
                      onChange={this.handleWaveChange2} />
        Saw
      </label>

      <label>
        <input type="radio" value="square"
                      checked={this.state.wave2 === 'square'}
                      onChange={this.handleWaveChange2} />
        Square
      </label>





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
