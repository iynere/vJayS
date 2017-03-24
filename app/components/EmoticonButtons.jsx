import React, { Component } from 'react'

export default props => {
  return (
    <div className="emojiMobile">
      <h1>How are you feeling?</h1>
      <div className="buttonsContainer">
        <button className="emojiButton" onClick={()=>props.handleEmojiClick("alien")}><img src="/logos/alienemoji.png"/></button>
        <button className="emojiButton" onClick={()=>props.handleEmojiClick("fire")}><img src="/logos/fireemoji.png"/></button>
      </div>
    </div>
  )
  // return(
  //   <div className="buttonsContainer">
  //       <button className="emojiButton" onClick={()=>props.handleEmojiClick("alien")} style={{background: "url('/logos/alienemoji.png')"}}></button>
  //       <button className="emojiButton" onClick={()=>props.handleEmojiClick("fire")} style={{background: "url('/logos/fireemoji.png')"}}></button>
  //   </div>
  // )
}
