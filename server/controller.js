let messages = []

module.exports = {
  addMessage: (req, res) => {
    let {message} = req.query
    let {user_id} = req.session.user
    let userMessage = {
      message: message,
      user_id: user_id
    }
    messages.push(userMessage)
    let userMessages = messages.filter(message => {
      return message.user_id === user_id
    })
    res.status(200).send(userMessages)
  }
}