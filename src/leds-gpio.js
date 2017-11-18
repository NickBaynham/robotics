const five = require("johnny-five");

const board = new five.board();

board.on("ready", function(){
   const myLed2 = new five.Led(2);
   const myLed4 = new five.Led(4);
   const myLed6 = new five.Led(6);
   const myLed9 = new five.Led(9);

   this.repl.inject({
       myLed2: myLed2,
       myLed9: myLed9
   });

   myLed4.blink(500);
   myLed6.pulse(500);
});