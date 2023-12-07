const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

router.post('/nowlogin', async (req, res) => {
  const {username, password} = req.body
  
  try {
    schemas.users.findOne({name: username})
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
});

// router.post('/getprinters', async (req, res) => {
//   const {id, status, label, place} = req.body
//   printerData = {id:id, status:status, label:label, place:place}
//   const newPrinter = new schemas.Printer(printerData); // Assuming Printer is a model for the printers collection

//   try {
//     const savedPrinter = await newPrinter.save();
//     res.json(savedPrinter);
//   } catch (e) {
//       console.log(e)
//   }
// });

router.get('/users', async (req, res) => {
    const users = schemas.users

    const userData = await users.find()
    if (userData) {
      res.send(JSON.stringify(userData))
    }
})


router.get('/printers', async (req, res) => {
  const printers = schemas.printers
  const printerData = await printers.find()
  // res.json(printers);
  res.send(JSON.stringify(printerData));
})

module.exports = router