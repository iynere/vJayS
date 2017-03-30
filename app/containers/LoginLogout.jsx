import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Button, Icon, Dropdown, Menu} from 'semantic-ui-react'
import {logout} from 'APP/app/reducers/auth'
import {fetchAllSetsFromDb} from 'APP/app/reducers/sets'
import FetchSetModal from 'APP/app/components/FetchSetModal'
import ViewAllSetsModal from 'APP/app/components/ViewAllSetsModal'
import SaveSetModal from 'APP/app/components/SaveSetModal'
import FetchPlaylistsModal from 'APP/app/components/FetchPlaylistsModal'

class LoginLogout extends Component {
  constructor(props) {
    super(props)
    this.renderLogin = this.renderLogin.bind(this)
    this.renderUser = this.renderUser.bind(this)
    // this.renderLogout = this.renderLogout.bind(this)
  }
  
  componentDidMount() {
    // if (this.props.user) {this.props.dispatch(fetchAccessToken(this.props.user.id))}
    // if (this.props.playlists.accessToken) {this.props.fetchUserPlaylists(this.props.playlists.accessToken)}
  }
  
  renderUser() {
    const user = this.props.user
    return (
      <Dropdown text={`Hello ${user.name || user.email}!`} className='link item'>
        <Dropdown.Menu>
          <SaveSetModal />
          <FetchSetModal />
          <FetchPlaylistsModal />
          <Menu.Item onClick={this.props.logout}>
            Logout
          </Menu.Item>
        {/*<Dropdown.Item
                    onClick={()=>{
                      this.props.fetchUserPlaylists(this.props.user.id)
                      // this.props.fetchSelectedPlaylist(this.props.user.id, "PLOiYwgsDuc0a4sAniPYhU4aJdyNXCQmO7")
                      // this.props.fetchSelectedPlaylist(this.props.playlists.accessToken, this.props.playlists[1].id)
                      // let accessToken;
                      // axios.get(`/api/auth/users/${this.props.user.id}`)
                      //  .then(res => {
                      //    accessToken = res.data.accessToken
                      //    return axios.get(`https://www.googleapis.com/youtube/v3/playlists?access_token=${accessToken}&part=snippet&mine=true`)
                      //  })
                      //  .then(res => {
                      //    // console.log('playlists response: ',res.data)
                      //    let playlistId = res.data.items[1].id
                      //    return axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?access_token=${accessToken}&part=snippet&maxResults=50&playlistId=${playlistId}`)
                      //  }).then((res) => {
                      //    // console.log("playlist items??", res.data)
                      //    this.props.loadYoutubePlaylist(res.data.items)
                      //  }).catch(console.error)
                    }}>Load Youtube Playlists
                  </Dropdown.Item>*/}
        </Dropdown.Menu>
      </Dropdown>
    )
  }

  renderLogin() {
    return (
      <Button content='Login' icon={'youtube'} color={'youtube'} href='/api/auth/login/google' style={{position: "relative", left: "10px", width: "25%", maxWidth: "115px"}}></Button>
    )
  }

  // renderLogout() {
  //  const user = this.props.user
  //  return (
  //    <Menu.Item>
  //      <Button onClick={this.props.logout}>Logout</Button></Menu.Item>
  //  )
  // }

  render() {
    const user = this.props.user
    // if (user) {this.props.dispatch(fetchAccessToken(user.id))}
    // if (this.props.playlists.accessToken) {this.props.fetchUserPlaylists(this.props.playlists.accessToken)}
    return (
      <Menu.Item style={{ width: "30%"}} position='right'>
        <Button content='Submit Screenshots!' href='http://crossfader-screens.tumblr.com' target="_blank" style={{marginRight: "10px"}}></Button>
        <ViewAllSetsModal />
        {user ? this.renderUser() : null}
        {user ? null : this.renderLogin()}
      </Menu.Item>
    )
  }
}

const mapStateToProps = ({auth}) => ({
  user: auth
})

const mapDispatchToProps = dispatch => ({
  // FROM AUTH REDUCER
  logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginLogout)
