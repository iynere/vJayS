import React from 'react'
import {Link} from 'react-router'
import {Button} from 'semantic-ui-react'

export const Login = ({ login }) => (
  <div>
    <form onSubmit={evt => {
      evt.preventDefault()
      login(evt.target.username.value, evt.target.password.value)
    } }>
      <input name="username" />
      <input name="password" type="password" />
      <input type="submit" value="Login" />
    </form>
    <a href="/api/auth/login/google"><Button basic>log in w/google</Button></a>
  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)
