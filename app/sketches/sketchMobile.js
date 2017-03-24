function sketch(p) {
    p.setup = setup
    p.draw = draw
    function setup() {
      var p5Canvas=p.createCanvas(window.innerWidth, window.innerHeight, true);
      p5Canvas.parent("p5parent");
    }

    function draw() {
      // console.log("MOUSE EVENT:", p.mouseX, p.mouseY)
      p.ellipse(p.mouseX, p.mouseY, 80, 80);
    }
}


// function sketch2(p) {
//   p.setup = setup
//   function setup() {
//     var p5Canvas=p.createCanvas(window.innerWidth, window.innerHeight, true);
//     p5Canvas.parent("p6parent");

//     socket = io(window.location.origin)
//     socket.on('connect', () => {
//       console.log("~~sketch~MainScreen Socket~~~~~")

//       socket.on('sendMousePosToMobile', (data)=>{
//         console.log("main 2",data);
//         p.fill(255, 204, 0);
//         p.ellipse(data.x, data.y, 80, 80);
//       })

//       socket.on('clearCanvas', ()=>{
//         console.log("clearing canvas");
//         p5Canvas.clear();
//       })
//     })
//   }
// }

module.exports = {
  sketch,
  // sketch2
}
