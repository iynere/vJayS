// CONSTANTS
const RECEIVE_RESULTS = 'RECEIVE_RESULTS'

// REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_RESULTS:
      return action.results
    default:
      return state
  }
}

// ACTION TYPES
export const receiveresults = searchResults => ({
  type: RECEIVE_RESULTS,
  searchResults
})

// ACTION CREATORS

export default reducer
