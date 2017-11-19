
const five = require('johnny-five');
const barcli = require('barcli');

const board = new five.Board();
const temp1 = new barcli({
   label: 'Fahrenheit',
   range: [20, 120]
});
const temp2 = new barcli({
   label: 'Celsius',
   range: [6, 50]
});

const temp3 = new barcli({
   label: 'Kelvin',
   range: [250, 325]
});

const graph = new barcli({
    label: 'photocell',
    range: [0, 1023]
});

board.on("ready", function(){
    const temp = new five.Thermometer({
        controller: "TMP36",
        pin: "A1"
    });
    const photocell = new five.Sensor('A0');

    temp.on('change', function(){
        temp1.update(this.fahrenheit);
        temp2.update(this.celsius);
        temp3.update(this.kelvin);
    });

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