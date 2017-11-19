const five = require("johnny-five");

const board = new five.Board();

board.on("ready", function(){
   const myLed2 = new five.Led(2);
   const myLed4 = new five.Led(4);
   const myLed6 = new five.Led(6);
   const myLed9 = new five.Led(9);
   const piezo = new five.Piezo(3);


   this.repl.inject({
       myLed2: myLed2,
       myLed9: myLed9,
       piezo: piezo
   });

   myLed4.blink(500);
   myLed6.pulse(500);

   piezo.play({
       song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
       beats: 1 / 4,
       tempo: 20
   })
});