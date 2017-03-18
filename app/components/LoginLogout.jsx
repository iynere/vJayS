import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Button, Dropdown, Menu} from 'semantic-ui-react'
import {logout} from 'APP/app/reducers/auth'

class LoginLogout extends Component {
  constructor(props) {
    super(props)
    this.renderLogin = this.renderLogin.bind(this)
    this.renderUser = this.renderUser.bind(this)
    this.renderLogout = this.renderLogout.bind(this)
  }
  
  renderUser() {
    const user = this.props.user
    return (
      <Dropdown.Menu text={`Hello ${user.name || user.email}!`} className='link item'>
        <Dropdown.Item>Import Playlists
        </Dropdown.Item>
        <Dropdown.Item>View Your Sets
        </Dropdown.Item>
      </Dropdown.Menu>
    )
  }
  
  renderLogin() {
    return (
      <Menu.Item><Button primary href='/api/auth/login/google'>Log In</Button></Menu.Item>
    )
  }
  
  renderLogout() {
    const user = this.props.user
    return (
      <Menu.Item>
        <Button primary onClick={this.props.logout}>Logout</Button></Menu.Item>
    )
  }
  
  render() {
    const user = this.props.user
    return (
      <Menu>
        <Menu.Menu position='right'>
          {user ? this.renderUser() : null}
          {user ? this.renderLogout() : this.renderLogin()}
        </Menu.Menu>
      </Menu>
    )
  }
}

const mapStateToProps = ({auth}) => ({
  user: auth
})

export default connect(mapStateToProps, {logout})(LoginLogout)
