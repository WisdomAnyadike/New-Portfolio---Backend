const { sendMessage, sendMessageToMe } = require("../Config/Mailer")


const MessageControl = async(req , res) => {

const { Name , Email , Subject , Message } = req.body

if( !Name || !Email || !Subject || !Message){
  res.status(400).send({message: 'All fields are mandatory'})
}else{
    sendMessage(Name , Email)
    sendMessageToMe(Name , Email , Subject , Message )
    res.status(200).send({message: 'Email Sent Succefully' , status:"okay"} )

}


}

module.exports = MessageControl