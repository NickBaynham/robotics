
const five = require('johnny-five');
const weather = require('weather-js');
const twilio = require('twilio');
const client = new twilio(accountSid, authToken);
const schedule = require('node-schedule');

let sanFrancisco = 0;
weather.find({
        search: 'San Francisco, CA',
        degreeType: 'F'
    },
    (err, result) => {
        console.log('San Fancisco: ' + result[0].current.temperature);
        sanFrancisco = result[0].current.temperature;
    });

let orlando = 0;
weather.find({
        search: 'Orlando, FL',
        degreeType: 'F'
    },
    (err, result) => {
        console.log('Orlando: ' + result[0].current.temperature);
        orlando = result[0].current.temperature;
    });

let atlanta = 0;
weather.find({
        search: 'Atlanta, GA',
        degreeType: 'F'
    },
    (err, result) => {
        console.log('Atlanta: ' + result[0].current.temperature);
        atlanta = result[0].current.temperature
    });


const board = new five.Board();

board.on("ready", function(){
    const temp = new five.Thermometer({
        controller: "TMP36",
        pin: "A1"
    });

    const photocell = new five.Sensor('A0');
    let temperature = 0;
    temp.on('change', function(){
        temperature = this.fahrenheit;
        myLCD.cursor(0,0).print(temperature);
        const timer = schedule.scheduleJob('0 26 * * * *', function(){
            if (new Date(new Date().getMilliseconds() === 0)) {
                console.log('Timer invoked, temperature is : ' + temperature + ' degrees F, light is ' + light + '%');
                client.messages.create({
                    body: 'Inside Temperature: ' + temperature + ' degrees F; Light: ' + light + '%\n' +
                    'Atlanta: ' + atlanta + ' Orlando: ' + orlando + ' San Francisco: ' + sanFrancisco
                }).then(message => {
                    console.log(message);
                });

                client.messages.create({
                    body: 'Inside Temperature: ' + temperature + ' degrees F; Light: ' + light + '%\n' +
                        'Atlanta: ' + atlanta + ' Orlando: ' + orlando + ' San Francisco: ' + sanFrancisco
                }).then(message => {
                    console.log(message);
                });
            }
        });
    });

    let light = 0;
    photocell.on('data', function(){
        light = this.value;
        //console.log(light);
    });

    const myLCD = new five.LCD({
        pins: [12,11,5,4,3,2]
    });

    this.repl.inject({
        lcd: myLCD
    });

    // myLCD.useChar('heart');
    // myLCD.cursor(0,0).print('hello :heart:');
    // myLCD.blink();
});