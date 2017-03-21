import axios from 'axios'

const fetchPlaylists = () => dispatch => {
  console.log('fetching')
  axios.get('https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true')
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))
}

export default fetchPlaylists