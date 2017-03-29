import axios from 'axios'
import localStore from 'store'
import receiveQueue from './queue'
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
    })
    .catch(console.error)
}

export const fetchSetFromDb = (userId, setId) => dispatch => {
  axios.get(`/api/sets/${userId}/${setId}`)
    .then((foundSet) => {
      let setArray = foundSet.data[0].videos
      dispatch(receiveSet(foundSet.data[0].videos))
      localStore.set("queueLeft", [])
      localStore.set("queueRight", []) 

      let queueLeft=[]
      let queueRight=[]

      setArray.forEach((setItem) => {
        let itemForQueue = {
          id: {videoId: setItem.videoId},
          snippet: {
            title: setItem.title,
            thumbnails: {default: {url: setItem.thumbnailUrl}}    
          }
        }
      
      setItem.direction === "Left" ? queueLeft.push(itemForQueue) : queueRight.push(itemForQueue)
      })

      localStore.set("queueLeft", queueLeft)
      localStore.set("queueRight", queueRight)
    })
    .catch(console.error)
}

export const clearSet = () => dispatch => {
  localStore.set('set', [])
  dispatch(receiveSet([]))
}

export default reducer