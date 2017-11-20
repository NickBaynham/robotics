const weather = require('weather-js');

weather.find({
    search: 'San Francisco, CA',
    degreeType: 'F'
},
    (err, result) => {
        console.log('San Fancisco: ' + result[0].current.temperature);
    });

weather.find({
    search: 'Orlando, FL',
    degreeType: 'F'
},
    (err, result) => {
        console.log('Orlando: ' + result[0].current.temperature);
    });

weather.find({
    search: 'Atlanta, GA',
    degreeType: 'F'
},
    (err, result) => {
        console.log('Atlanta: ' + result[0].current.temperature);
    });
