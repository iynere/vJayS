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
        </Dropdown.Menu>
      </Dropdown>
    )
  }

  renderLogin() {
    return (
      <Button content='Login' icon={'youtube'} color={'youtube'} href='/api/auth/login/google' style={{position: "relative", left: "10px", width: "25%", maxWidth: "115px"}}></Button>
    )
  }

  render() {
    const user = this.props.user
    return (
      <Menu.Item style={{ width: "30%"}} position='right'>
        <Button content='Submit Screenshots!' href='http://vjays-screens.tumblr.com' target="_blank" style={{marginRight: "10px"}}></Button>
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
