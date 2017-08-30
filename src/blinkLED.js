let five = require('johnny-five');
let board = new five.Board();
board.on("ready", () => {
    let led = new five.Led(11);
    led.blink(500);
    this.repl.inject(
        {
            myLED: led
        }
    )
});