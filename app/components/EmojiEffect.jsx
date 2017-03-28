import React, { Component } from 'react'


// from state: liveEffect
var socket = io(window.location.origin)

export default class EmojiEffect extends Component {

 componentDidMount(){
  console.log("socket has listeners?", socket.hasListeners('drawEmoji'))
  if(!socket.hasListeners('drawEmoji')){
    socket.on('drawEmoji', (emoji)=>{
      console.log("draw emoji", emoji);
      this.drawEmoji(emoji);
    })
  }

 }

 getUrl(emoji){
   switch (emoji){
     case "alien":
       return "/logos/alienemoji.png"
     case "fire":
       return "/logos/fireemoji.png"
     default: return null
   }
 }

 drawEmoji(emoji){
   let url=this.getUrl(emoji);

   var animationDiv=document.createElement('div')
   animationDiv.setAttribute("class", "emojiAnimation")
   var img=new Image(100,100);
   img.src=url;
   animationDiv.appendChild(img)


   let columns=["col1", "col2", "col3", "col4", "col5", "col6", "col7", "col8", "col9", "col10"]
   let column=columns[Math.floor(Math.random()*10)+1]
   document.getElementById(column).appendChild(animationDiv)

   setTimeout(()=>{
     document.getElementById(column).removeChild(animationDiv)
   }, 5000)
 }

 render(){
   return (
     <div className="emojiEffect" id="emojiEffect">
       <div id="col1" className="col"></div>
       <div id="col2" className="col"></div>
       <div id="col3" className="col"></div>
       <div id="col4" className="col"></div>
       <div id="col5" className="col"></div>
       <div id="col6" className="col"></div>
       <div id="col7" className="col"></div>
       <div id="col8" className="col"></div>
       <div id="col9" className="col"></div>
       <div id="col10" className="col"></div>
     </div>
   )
 }
}
