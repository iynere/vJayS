import axios from 'axios'
import localStore from 'store'
import clearSet from './set'

// CONSTANTS
export const RECEIVE_SETS = 'RECEIVE_SETS'

// REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SETS:
      return action.sets
    default:
      return state
  }
}

// ACTION TYPES
export const receiveSets = sets => ({
  type: RECEIVE_SETS,
  sets
})

// ACTION CREATORS

export const fetchUserSets = userId => dispatch => {
  // do axios stuff
  axios.get(`/api/sets/user/${userId}`)
    .then((userSets) => {
      dispatch(receiveSets(userSets))})
    .catch(console.error)
}

export const fetchAllSets = () => dispatch => {
  // do axios stuff
  axios.get('/api/sets')
    .then(allSets => {
      dispatch(receiveSets(allSets))})
    .catch(console.error)
}

export default reducer