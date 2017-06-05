// node modules
import React from 'react'
import {Menu, Button, Container, Input} from 'semantic-ui-react'

// local files
import YouTubeSearch from 'APP/app/containers/YouTubeSearch'
import store from 'APP/app/store'
import LoginLogout from 'APP/app/containers/LoginLogout'
import Search from 'APP/app/containers/Search'
import ViewSetModal from 'APP/app/containers/ViewSetModal'
import {addToQueue, fetchQueue, clearQueue} from 'APP/app/reducers/queue'

var socket = io(window.location.origin)

export const Navbar = () => {

  var buttonSpacingStyle = {
    marginRight: "10px"
  }

  var searchStyles = {
    width: "500px"
  }

  return (
    <Menu widths={3} inverted style={{width: "100%", margin: "0 auto"}}>
      <Container fluid>
        <Menu.Item style={{ width: "30%"}}>
          <a target="_blank" href="/output"><Button basic color={"youtube"} inverted style={buttonSpacingStyle}>Output</Button></a>
          <ViewSetModal />
          <Button basic color={"youtube"} inverted onClick={evt => {
            socket.emit('clearVideos')
            evt.preventDefault()
            store.dispatch(clearQueue('queueLeft'))
            store.dispatch(clearQueue('queueRight'))
          }} style={buttonSpacingStyle}>Clear Queues</Button>
        </Menu.Item>
        <Menu.Item style={{width: "40%"}}>
          <Search />
        </Menu.Item>
        <LoginLogout />
      </Container>
    </Menu>
  )
}
