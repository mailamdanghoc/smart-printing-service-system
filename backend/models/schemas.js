const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    auth: {type: String, required: true}
})

const Users = mongoose.model('users', userSchema)

const printerSchema = new Schema({
    id: {type: String},
    status: {type: String},
    lable: {type: String},
    place: {type: String}
})
const Printers = mongoose.model('printers', printerSchema,'printers')

module.exports = Printers
module.exports = Users