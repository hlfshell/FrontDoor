var twilio = require('twilio'),
	express = require('express'),
	app = express(),
	path = require('path'),

	myBaseURL = process.env.MY_BASE_URL,
	twilioAccountSID = process.env.TWILIO_ACCOUNT_SID,
	twilioAuthToken = process.env.TWILIO_AUTH_TOKEN,
	doorPhoneNumber = process.env.DOOR_PHONE_NUMBER,
	textOnEntry = process.env.TEXT_ON_ENTRY ? JSON.stringify(process.env.TEXT_ON_ENTRY) : null

app.use(twilio.webhook(twilioAuthToken, { validate: true }))

app.post('/frontDoor', function(req, res){
	console.log("Front door has been called!")

	var twilioResponse = twilio.TwimlResponse()

	twilioResponse.say('Please enter your password and press star.')
		.gather({
			action: myBaseURL + '/gather',
			finishOnKey: '*'
		})

	res.send(twilioResponse)
})

app.post('/gather', function(req, res){
	console.log("Gather has been called!")

	console.log('params', req.body)

	res.send(200)
})

console.log("Launching front door server")
app.listen(process.env.PORT || 8000)