import localStore from 'store'

// CONSTANTS
export const RECEIVE_LEFT = 'RECEIVE_LEFT'

export const RECEIVE_RIGHT = 'RECEIVE_RIGHT'

// ACTION CREATOR
export const receiveQueue = (queue, queueLeftOrRight) => ({
  type: queueLeftOrRight === 'queueLeft' ? RECEIVE_LEFT : RECEIVE_RIGHT,
  [queueLeftOrRight]: queue
})

export const fetchQueue = queueLeftOrRight => dispatch => {
  dispatch(receiveQueue(localStore.get(queueLeftOrRight) || [], queueLeftOrRight))
}

export const addToQueue = (videoUrl, queueLeftOrRight) => (dispatch, getState) => {
  // get the correct queue
  const queueToUpdate = localStore.get(queueLeftOrRight) || []
  // update queue
  queueToUpdate.push(videoUrl)
  // set new queue
  localStore.set(queueLeftOrRight, queueToUpdate)
  // put new queue on state
  dispatch(fetchQueue(queueLeftOrRight))
  console.log(getState()[queueLeftOrRight])
}

export const removeFromQueue = (videoIdx, queueLeftOrRight) => (dispatch, getState) => {
  // get the correct queue
  const queueToUpdate = localStore.get(queueLeftOrRight) || []
  // update queue
  queueToUpdate.splice(videoIdx, 1)
  // set new queue
  localStore.set(queueLeftOrRight, queueToUpdate)
  // put new queue on state
  dispatch(fetchQueue(queueLeftOrRight))
}

// move stuff around: combination of remove from queue and add to queue

// play from back in queue: combination of remove and add
