import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  // playlists: require('./playlists').default, for pulling stuff off youtube
  queueLeft: require('./queueLeft').default,
  queueRight: require('./queueRight').default
//player: require('./player'), // for both players
//queue: require('./queue'), // for both queues
//set: require('./set'),
//effects: ?
})

export default rootReducer
