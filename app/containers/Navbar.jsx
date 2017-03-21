import React from 'react'
import {Menu, Button} from 'semantic-ui-react'
import YouTubeSearch from 'APP/app/components/YouTubeSearch'
import store from 'APP/app/store'
import LoginLogout from 'APP/app/components/LoginLogout'
import {addToQueue, fetchQueue, clearQueue} from 'APP/app/utils/queue'

export const Navbar = () => (
	<Menu>
		<YouTubeSearch
			apiKey='AIzaSyBOr-nJwESPXBlOSh-4-bf2R-ayOTUFVt4' // how to use .env on the front-end
			callback={results => {
				store.dispatch(addToQueue(results[0], 'queueLeft'))
			}}
		/>
		<Menu.Item><Button primary onClick={evt => {
			evt.preventDefault()
			store.dispatch(clearQueue('queueLeft'))
		}}>clear (left) queue</Button></Menu.Item>
		<LoginLogout />
	</Menu>
)
