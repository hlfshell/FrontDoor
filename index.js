var twilio = require('twilio'),
	express = require('express'),
	app = express(),

	twilioAccountSID = process.env.TWILIO_ACCOUNT_SID,
	twilioAuthToken = process.env.TWILIO_AUTH_TOKEN,
	doorPhoneNumber = process.env.DOOR_PHONE_NUMBER,
	textOnEntry = process.env.TEXT_ON_ENTRY ? JSON.stringify(process.env.TEXT_ON_ENTRY) : null

app.post('/frontDoor', twilio.webhook({ validate: false }), function(req, res){
	console.log(req.params)
	res.send(req.params)
})

app.listen(process.env.PORT || 8000)