const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

router.post('/nowlogin', async (req, res) => {
  const {username, password} = req.body
  
  try {
    schemas.findOne({name: username})
    .then(user => {
      if (user) {
        console.log(user.auth)
        if (user.password == password) {
          if (user.auth == "admin") {
            res.json("ADMIN logged in")
          }
          else {
            res.json("STUDENT logged in")
          }
        }
        else {
          res.json("Incorrect password")
        }
      }
      else {
        res.json("not exist")
      }
    })
  }
  catch(e) {
    console.log(e)
  }
})

router.get('/users', async (req, res) => {
    const users = schemas

    const userData = await users.find()
    if (userData) {
      res.send(JSON.stringify(userData))
    }
})

module.exports = router