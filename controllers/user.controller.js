const { userModel } = require('./../models')


const login = (req, res) => {
  const user = new userModel(req.body)
  user.save()
    .then(item => res.json({ message: "item was saved" }))
    .catch(err => { res.status(400).send("unable to save to database"); })
}

const signUp = (req, res) => {
  const user = new userModel(req.body)
  user.save()
    .then(item => res.json({ message: "item was saved" }))
    .catch(err => { res.status(400).json(err); })
}



module.exports = {
  login,
  signUp
}