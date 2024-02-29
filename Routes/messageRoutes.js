const express = require("express")
const MessageControl = require("../Controller/MessageController")
const messageRouter = express.Router()

messageRouter.post('/sendmssg' , MessageControl)

module.exports = messageRouter