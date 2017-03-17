import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	auth: require('./auth').default,
//player: require('./player'), // for both players
//queue: require('./queue'), // for both queues
//set: require('./set'),
//effects: ?
})

export default rootReducer

