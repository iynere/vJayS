import React, { Component } from 'react'

export default props => {
  return (
    <div className="buttonsContainer">
      <div className="emojiButton" onClick={props.handleEmojiClick("alien")}><img src="/logos/alienemoji.png"/></div>
      <div className="emojiButton" onClick={props.handleEmojiClick("fire")}><img src="/logos/fireemoji.png"/></div>
    </div>
  )
}
