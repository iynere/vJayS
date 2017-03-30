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
			playStatus: "play"
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
		socket.emit('changeHueRotation', event.target.value, direction) 
	}

	handleInvertSlider(direction, event){
		socket.emit('changeInvertPercent', event.target.value, direction) 
	}

	handleSaturationSlider(direction, event){
		socket.emit('changeSaturationPercent', (event.target.value * 6), direction) 
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
						<SliderComponent handleChange={this.handleHueSlider.bind(this, "Left")}/>
						<p>Hue</p>
						<SliderComponent handleChange={this.handleInvertSlider.bind(this, "Left")}/>
						<p>Invert</p>
					 <SliderComponent handleChange={this.handleSaturationSlider.bind(this, "Left")}/>
					 <p>Saturation</p>
					</div>
					<div className="sliders">
						<Button.Group style={{width: "100%"}}>
							<Button style={{maxWidth: '43%', margin: '0px'}} inverted basic color="red" size="big" onClick={()=>this.handleSkipVideo("Left")} icon="fast forward" content="Skip Left"></Button>
							<Button style={{maxWidth: '14%', marginLeft: '20px', marginRight: '20px'}} inverted basic color="blue" size="big" icon={this.state.playStatus} onClick={()=>this.handlePlayBoth()}></Button>
							<Button style={{maxWidth: '43%', margin: '0px'}} inverted basic color="red" size="big" onClick={()=>this.handleSkipVideo("Right")} icon="fast forward" content="Skip Right"></Button>
						</Button.Group>
						<p></p>
						<SliderComponent  handleChange={this.handleOpacitySlider}/>
						<p>Opacity</p>
						<SliderComponent  handleChange={this.handleVolumeSlider}/>
						<p>Volume</p>
					</div>
					<div className="singleSliders">
						<SliderComponent handleChange={this.handleHueSlider.bind(this, "Right")}/>
						<p>Hue</p>
						<SliderComponent handleChange={this.handleInvertSlider.bind(this, "Right")}/>
						<p>Invert</p>
						<SliderComponent handleChange={this.handleSaturationSlider.bind(this, "Right")}/>
						<p>Saturation</p>
					</div>
				</div>
			</div>
		)
	}
}
