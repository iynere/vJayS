'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import {fetchQueue} from 'APP/app/utils/queue'
import store from 'APP/app/store'
import Output from 'APP/app/containers/Output'
import {Root} from 'APP/app/containers/Root'
import {TapComponent} from 'APP/app/components/TapComponent'
// import injectTapEventPlugin from 'react-tap-event-plugin';

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
      <Route path="/TapComponent" component={TapComponent}/>
    </Router>
  </Provider>,
  document.getElementById('main')
)

// injectTapEventPlugin();
