import React, { Component } from 'react'
import SliderComponent from 'APP/app/components/SliderComponent'
import { Form, Button, Header, Icon, Modal } from 'semantic-ui-react'

/*~~~DJ CONTROLS TO AFFECT OUTPUT SCREEN~~~*/

var socket = io(window.location.origin)

export default class ControllerVid extends Component {

	constructor(){
		super()
		this.play="play"
		this.pause="pause"
		this.playing=0;
		this.state={
			playStatus: "play",
			hueLeftVal: 0,
			hueRightVal: 0,
			invertLeftVal: 0,
			invertRightVal: 0,
			saturateLeftVal: 100,
			saturateRightVal: 100
		}
		this.handleOpacitySlider= this.handleOpacitySlider.bind(this)
	}

	handleVolumeSlider(event){
		socket.emit('changeVolume', event.target.value*2);
	}

	handleOpacitySlider(event){
		socket.emit('changeOpacity', event.target.value/100)
	}

	handleHueSlider(direction, event){
		event.persist()
		// console.log('EVENT', event.target.value)
		socket.emit('changeHueRotation', event.target.value, direction)
		
		this.setState({
			[`hue${direction}Val`]: event.target.value
		})
	}

	handleInvertSlider(direction, event){
		event.persist()
		// console.log('EVENT', event.target.value)
		socket.emit('changeInvertPercent', event.target.value, direction)
		
		this.setState({
			[`invert${direction}Val`]: event.target.value
		})
	}

	handleSaturationSlider(direction, event){
		event.persist()
		// console.log('EVENT', event.target.value)
		socket.emit('changeSaturationPercent', event.target.value, direction)
		
		this.setState({
			[`saturate${direction}Val`]: event.target.value
		})
	}

	handleSkipVideo(direction){
		socket.emit('skipVideoPressed', direction)
	}

	handlePlayBoth(){
		this.playing = this.playing === 0 ? 1 : 0
		let playStatus = this.playing === 0 ? this.play : this.pause
		this.setState({playStatus: playStatus})
		socket.emit('playBothPressed', this.playing)
	}

	render() {
		// console.log("command current", this.props.command);

		return (
			<div className="djControls">
				<h2><Icon name="options" /> Video Controls</h2>
				<div className="djControlButtons">
					<div className="singleSliders">
						<input type="range" min="0" max="359" step="1" value={this.state.hueLeftVal} onChange={this.handleHueSlider.bind(this, "Left")}/>
						<p>Hue</p>
						<input className="invertLeft" type="range" min="0" max="100" step="1" value={this.state.invertLeftVal} onChange={this.handleInvertSlider.bind(this, "Left")}/>
						<p>Invert</p>
						<input className="saturateLeft" type="range" min="0" max="200" step="1" value={this.state.saturateLeftVal} onChange={this.handleSaturationSlider.bind(this, "Left")}/>
					 <p>Saturation</p>
					</div>
					<div className="sliders">
						<Button inverted basic color="red" size="huge" onClick={()=>this.handleSkipVideo("Left")} icon="fast forward" content="Skip Left " style={{margin: "0px"}}></Button>
						<Button inverted basic color="blue" size="huge" icon={this.state.playStatus} style={{margin: "20px"}} onClick={()=>this.handlePlayBoth()}></Button>
						<Button inverted basic color="red" size="huge" onClick={()=>this.handleSkipVideo("Right")} icon="fast forward" content="Skip Right" style={{margin: "0px"}}></Button>
						 <p></p>
						<SliderComponent  handleChange={this.handleOpacitySlider}/>
						<p>Video Balance</p>
						<SliderComponent  handleChange={this.handleVolumeSlider}/>
						<p>Audio Balance</p>
					</div>
					<div className="singleSliders">
						<input className="hueRight" type="range" min="0" max="359" step="1" value={this.state.hueRightVal} onChange={this.handleHueSlider.bind(this, "Right")}/>
						<p>Hue</p>
						<input className="invertRight" type="range" min="0" max="100" step="1" value={this.state.invertRightVal} onChange={this.handleInvertSlider.bind(this, "Right")}/>
						<p>Invert</p>
						<input className="saturateRight" type="range" min="0" max="200" step="1" value={this.state.saturateRightVal} onChange={this.handleSaturationSlider.bind(this, "Right")}/>
					 <p>Saturation</p>
					</div>
				</div>
			</div>
		)
	}
}
