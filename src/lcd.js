const five = require('johnny-five');
const board = new five.Board();

board.on("ready", function(){
    const myLCD = new five.LCD({
        pins: [12,11,5,4,3,2]
    });
    this.repl.inject({
        lcd: myLCD
    });

    myLCD.useChar('heart');
    myLCD.cursor(0,0).print('hello :heart:');
    myLCD.blink();
});