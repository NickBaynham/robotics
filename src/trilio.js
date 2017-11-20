const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

client.messages.create({
    body: '[node johnny-five] Inside Temperature: ' + '77.8' + ' degrees F; Light: 47.2%'
}).then(message => {
    console.log(message);
});

