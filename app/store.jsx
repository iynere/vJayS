import {createStore, applyMiddleware } from 'redux'
import {composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from 'APP/app/reducers'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import {whoami} from 'APP/app/reducers/auth'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      createLogger({collapsed: true}),
      thunkMiddleware
    )
  )
)

export default store

// Set the auth info at start
store.dispatch(whoami())
