//reducer for dj commands
const reducer = (state=null, action) => {
  switch(action.type) {
  case SET_COMMAND:
  console.log("setting command to", action.command);
    return action.command
  }
  return state
}

//constants
const SET_COMMAND = 'SET_COMMAND'

//action-creators
export const setCommand = command => ({
  type: SET_COMMAND, command
})

export default reducer
