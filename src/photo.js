
const five = require('johnny-five');
const barcli = require('barcli');

const board = new five.Board();
const graph = new barcli({
    label: 'photocell',
    range: [0, 1023]
});

board.on("ready", function(){
    const photocell = new five.Sensor('A0');
    photocell.on('data', function(){
        graph.update(this.value);
    });
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