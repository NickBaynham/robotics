var five = require('johnny-five');
var board = new five.board();
board.on("ready", function() {
    var led = new five.Led(13);
    led.blink(500);
});
