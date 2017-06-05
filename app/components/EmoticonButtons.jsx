// node modules
import React, { Component } from 'react'
import Twemoji from 'react-twemoji'

// local files
import {twemojiList} from 'APP/app/components/twemojis'

export default props => {
  let emojiButtons= twemojiList ? twemojiList.map((twemoji, index) => {
    return <button className="emojiButton" key={index} onTouchStart={(event)=>{
          event.preventDefault()
          props.handleEmojiClick(index)
      }}>{twemojiList[index]}</button>
  }) : null
  return (
    <div className="emojiMobile">
      <h1>Click Your Favorite Emojis</h1>
      <div className="buttonsContainer">
        {emojiButtons}
      </div>
    </div>
  )
}
