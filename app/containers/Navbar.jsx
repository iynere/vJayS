import React from 'react'
import {Menu} from 'semantic-ui-react'
import YouTubeSearch from '../components/YouTubeSearch'
import store from '../store'
import LoginLogout from '../components/LoginLogout'
import {addToQueue, fetchQueue} from '../utils/queue'

export const Navbar = () => (
  <Menu>
    <YouTubeSearch
      apiKey='AIzaSyBOr-nJwESPXBlOSh-4-bf2R-ayOTUFVt4' // how to use .env on the front-end
      callback={results => {
        store.dispatch(addToQueue(results[0].id.videoId, 'queueLeft'))
      }}
    />
    <LoginLogout />
  </Menu>
)
