import React from 'react'
import {connect} from 'react-redux'
import {Container} from 'semantic-ui-react'
import YouTube from 'react-youtube'

const Output = ({player, queue}) => {
  
  return (
    <div>
      <Container fluid>
        <YouTube />
        <YouTube />
      </Container>  
    </div>
  )
}

const mapStateToProps = ({player, queue}) => ({
  player,
  queue
})

export default connect(mapStateToProps)(Output)