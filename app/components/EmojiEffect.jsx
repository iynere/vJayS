import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Twemoji from 'react-twemoji'
import {twemojiList} from 'APP/app/utils/twemojis.js'

// from state: liveEffect
var socket = io(window.location.origin)

export default class EmojiEffect extends Component {

  constructor(){
    super();
    this.recentCol= []
    this.drawEmoji=this.drawEmoji.bind(this)
  }

 componentDidMount(){
  if(!socket.hasListeners('drawEmoji')){
    socket.on('drawEmoji', (emoji)=>{
      this.drawEmoji(emoji);
    })
  }
 }

 drawEmoji(emoji){
    // console.log("emo index", emoji)
    let element=<div className="emojiAnimation">{twemojiList[emoji]}</div>

    let num=Math.floor(Math.random()*20)+1
    while(this.recentCol.indexOf(num) >= 0){
      let num=Math.floor(Math.random()*20)+1
    }
    this.recentCol.push[num]
    if(this.recentCol.length > 18){
      this.recentCol=this.recentCol.slice(5)
    }
    console.log("recent", this.recentCol)
    let column=`col${num}`

    // console.log("jlj", column)
    ReactDOM.render(
      element,
      document.getElementById(column)
    );

    setTimeout(()=>{
      ReactDOM.render(
        <div></div>,
        document.getElementById(column)
      );
    }, 5000)
 }

 render(){
   let animationColumns=[], animationColumns2=[];
   for(let i=1; i <= 10; i++){
     animationColumns.push(<div key={i} id={`col${i}`} className="col"></div>)
   }
   for(let i=11; i <= 20; i++){
     animationColumns2.push(<div key={i} id={`col${i}`} className="col"></div>)
   }
   return (
     <div>
       <div className="emojiEffect" id="emojiEffect">
         {animationColumns}
       </div>
       <div className="emojiEffect2" id="emojiEffect">
         {animationColumns2}
       </div>
     </div>
   )
 }
}
