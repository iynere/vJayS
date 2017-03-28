import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  // playlists: require('./playlists').default, for pulling stuff off youtube
  player: require ('./player').default,
  queue: require('./queue').default,
  set: require('./set').default,
  sets: require('./sets').default,
//effects: ?

  command: require('./command').default
})

export default rootReducer
