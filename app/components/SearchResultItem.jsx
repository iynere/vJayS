// WRITE CODE TO USE THIS

import React, {Component} from 'react'
import {Button, Dimmer, Image, Icon} from 'semantic-ui-react'
import {addToQueue} from 'APP/app/reducers/queue'
import store from 'APP/app/store'

export default class SearchResultItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
    this.onClickLeft=this.onClickLeft.bind(this)
    this.onClickRight=this.onClickRight.bind(this)
  }

  handleShow() {
    this.setState({ active: true })
  }

  handleHide() {
    this.setState({ active: false })
  }

  onClickLeft() {
    // console.log(this.props)
    store.dispatch(addToQueue(this.props.video, 'queueLeft'))
    this.props.handleClose();
  }

  onClickRight() {
    // console.log(this.props)
    store.dispatch(addToQueue(this.props.video, 'queueRight'))
        this.props.handleClose();
  }

  render() {
    var headerStyle = {
      color: "#fff",
      paddingBottom: 0,
      marginBottom: "3px",
      marginTop: 0,
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      msUserSelect: 'none'
    }

    var dimDivStyle = {
      paddingTop: 0,
    }

    const {active} = this.state
    const content = (
      <div style={dimDivStyle}>
        <p style={headerStyle}>{this.props.video.snippet.title.slice(0,36)}</p>

        <Button className="blue mini circular icon" onClick={this.onClickLeft}><Icon name="add circle"/></Button>
        <Button className="blue mini circular icon" onClick={this.onClickRight}><Icon name="add circle"/></Button>
      </div>
    )

    return (
      <Dimmer.Dimmable
        as={Image}
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={this.handleShow.bind(this)}
        onMouseLeave={this.handleHide.bind(this)}
        src={this.props.video.snippet.thumbnails.default.url}
      />
    )
  }
}
