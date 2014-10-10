var twilio = require('twilio'),
	express = require('express'),
	app = express(),
	path = require('path'),

	twilioAccountSID = process.env.TWILIO_ACCOUNT_SID,
	twilioAuthToken = process.env.TWILIO_AUTH_TOKEN,
	doorPhoneNumber = process.env.DOOR_PHONE_NUMBER,
	textOnEntry = process.env.TEXT_ON_ENTRY ? JSON.stringify(process.env.TEXT_ON_ENTRY) : null

app.post('/frontDoor', twilio.webhook({ validate: false }), function(req, res){
	console.log("Front door has been called!")
	console.log(req.params)

	var twilioResponse = twilio.TwimlResponse()

	twilioResponse.say('Hello Keith! This program is currently working')

	res.send(twilioResponse)
})

console.log("Launching front door server")
app.listen(process.env.PORT || 8000)