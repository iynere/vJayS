import axios from 'axios'

// CONSTANTS
export const GET_SETS_FROM_DB = 'GET_SETS_FROM_DB'

// REDUCER
export const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_SETS_FROM_DB:
      return action.sets
    default:
      return state
  }
}

// ACTION TYPES
export const getAllSets = sets => ({
  type: GET_SETS_FROM_DB,
  sets: sets
})

// ACTION CREATORS

export const saveSetToDb = (set) => dispatch => {
  axios.post('/api/sets', set)
    .then(() => {console.log("Saved set and everything's working!")})
    .catch(console.error)
  // note: eventually add a "Clear Set" function to clear from local storage
}

export const fetchSetFromDb = (/*title? id? userId?*/) => dispatch => {
  // do axios stuff
}

export const fetchAllSetsFromDb = (userId) => dispatch => {
  // do axios stuff
  axios.get(`/api/sets/${userId}`)
    .then((sets) => {
      console.log("GETTING SETS FROM DB", sets)
      dispatch(getAllSets(sets))})
    .catch(console.error)
}

export default reducer