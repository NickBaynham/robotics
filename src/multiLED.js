let five = require('johnny-five');
let board = new five.Board();

board.on("ready", function(){
    let myLed2 = new five.Led(2);
    let myLed4 = new five.Led(4);
    let myLed6 = new five.Led(6);
    let myLed9 = new five.Led(9);
    let myLed11 = new five.Led(11);

    this.repl.inject(
        {
            myLed2: myLed2,
            myLed9: myLed9,
            myLed11: myLed11
        }
    );

    myLed4.blink(500);
    myLed6.pulse(500);
});