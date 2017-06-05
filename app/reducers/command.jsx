// CONSTANTS
const SET_COMMAND = 'SET_COMMAND'

// REDUCER
const reducer = (state=null, action) => {
  switch(action.type) {
  case SET_COMMAND:
    console.log('setting command to', action.command)
    return action.command
  }
  return state
}

// ACTION TYPES
export const setCommand = command => ({
  type: SET_COMMAND, command
})

export default reducer
