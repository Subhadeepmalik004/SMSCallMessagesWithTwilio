// first login twilio and run node sendSMSall
require('dotenv').config();
const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
async function sendMessage() {
    const message = await twilio.messages.create({
        body: 'Hello Subhadeep by using Twilio',
        from: "+xxxxxxxxx", // twilio provide the number
        to: process.env.PHONE_NUMBER,
        // mediaUrl: ['https://images.unsplash.com/photo-1591302418462-eb55463b49d6?q=80&w=1251&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
    })
    console.log(message)
}

async function makeCall() {
    const call = await twilio.calls.create({
        // url: 'https://sounds.pond5.com/911-call-operator-sound-effect-287527589_nw_prev.m4a',
        // method: 'get',
        twiml: `
            <Response>
                <Say voice='man' language='bengul'>Hello, this is a text-to-speech message</Say>
                <Pause length='1'></Pause>
                <Say>Thank you for waiting</Say>
            </Response>
        `,
        from: "+xxxxxxxx", // twilio provide the number
        to: process.env.PHONE_NUMBER,
    })
    console.log(call)
}

// sendMessage()
makeCall()