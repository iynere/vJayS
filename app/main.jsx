'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import {fetchQueue} from './utils/queue'
import store from './store'
import Output from './containers/Output'
import {Root} from './containers/Root'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log("*******I have connected to the server!*****")
})

const onRootEnter = () => {
  store.dispatch(fetchQueue('queueLeft'))
  store.dispatch(fetchQueue('queueRight'))
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root} onEnter={onRootEnter} />
      <Route path="/output" component={Output} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
