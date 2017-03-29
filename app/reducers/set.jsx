import axios from 'axios'
import localStore from 'store'

// CONSTANTS
export const RECEIVE_SET = 'RECEIVE_SET'

// REDUCER
export const reducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SET:
      return action.set
    default:
      return state
  }
}

// ACTION TYPES
export const receiveSet = set => ({
  type: RECEIVE_SET,
  set
})

// ACTION CREATORS
export const fetchSetItems = () => dispatch => {
  let setItems = localStore.get('set') ? localStore.get('set') : []
  dispatch(receiveSet(setItems))
  // console.log('SET', setItems)
}

export const fetchSetFromDb = (/*title? id? userId?*/) => dispatch => {
  // do axios stuff
}

export const fetchAllSetsFromDb = (userId) => dispatch => {
  // do axios stuff
  axios.get(`/api/sets/${userId}`)
    .then((sets) => {console.log("Getting the sets!", sets)})
    .catch(console.error)
}

export const addToSet = setItem => dispatch => {
  let setToUpdate = localStore.get('set') ? localStore.get('set') : []
  setToUpdate.push(setItem)
  localStore.set('set', setToUpdate)
  dispatch(receiveSet(setToUpdate))
}

export const saveSetToDb = (set) => dispatch => {
  axios.post('/api/sets', set)
    .then(() => {
      dispatch(clearSet())
      console.log("Saved set and everything's working!")})
    .catch(console.error)
}

export const clearSet = () => dispatch => {
  localStore.set('set', [])
  dispatch(receiveSet([]))
}

export default reducer