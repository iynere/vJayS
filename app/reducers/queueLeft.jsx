import {RECEIVE_LEFT, receiveQueue, fetchQueue, addToQueue, removeFromQueue} from '../utils/queue'

// REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_LEFT:
      return action.queueLeft
  }
  return state
}

export default reducer