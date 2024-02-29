
const nodemailer = require('nodemailer')


const sendMessage = async( Name , Email) => {
    const messageTemplate = ` <div>
    <div>
      <h2 style="color: #00a859;"> Hello there! </h2>
    </div>
    <ul>
      <li>Name: ${Name}</li>
      <li>Email: ${Email}</li>
    </ul>
    <div>
      <p>
        Dear ${Name},
      </p>
      <p>
        Thanks for contacting AnyaCodes , we'll send you a feedback shortly.
      </p>
    
      <p>
        If you have any more questions or need assistance, feel free to contact us.
      </p>
    </div>
    <p style="color: #00a859;"><i> Anyacodes </i></p>
  </div>
`

const trasporter = nodemailer.createTransport({
    service: "gmail" ,
    auth: {
        user:process.env.GOOGLE_EMAIL ,
        pass:process.env.GOOGLE_PASSWORD
    }
})

const mailOption = {
    from: process.env.GOOGLE_EMAIL,
    to: Email , 
    subject:"Hi from Anyacodes",
    html: messageTemplate ,
    text:'Good Day'
}

try {
    trasporter.sendMail(mailOption)
console.log("email sent successfully")
} catch (error) {
    console.log("internal server error")
}


}




const sendMessageToMe = async( Name , Email , Message , Subject) => {
    const messageTemplate = ` <div>
  
    <ul>
      <li> Senders Name: ${Name}</li>
      <li> Senders Email: ${Email}</li>
    </ul>
    <div>
     
      <p>
       ${Message}
      </p>
    
     
    </div>
    <p style="color: #00a859;"><i> message from your website @Anyacodes </i></p>
  </div>
`

const trasporter = nodemailer.createTransport({
    service: "gmail" ,
    auth: {
        user:process.env.GOOGLE_EMAIL ,
        pass:process.env.GOOGLE_PASSWORD
    }
})

const mailOption = {
    from: process.env.GOOGLE_EMAIL,
    to: process.env.GOOGLE_EMAIL , 
    subject:`${Subject}`,
    html: messageTemplate ,
    text:'Good Day'
}

try {
    trasporter.sendMail(mailOption)
console.log("email sent successfully")
} catch (error) {
    console.log("internal server error")
}


}


module.exports = {sendMessage , sendMessageToMe}