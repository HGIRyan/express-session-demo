require('dotenv').config()
const express = require('express')
const session = require('express-session')

const controller = require('./controller')

const {
  SERVER_PORT,
  SESSION_SECRET
} = process.env

const app = express()

let user_id = 1

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use((req, res, next) => {
  if(!req.session.user){
    req.session.user = {
      user_id: user_id
    }
    user_id++
  }
  next()
})

app.post('/messages', controller.addMessage, )

app.listen(SERVER_PORT, () => console.log('Run it on dat der port ' + SERVER_PORT))

