const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    auth: {type: String, required: true}
})

const Users = mongoose.model('users', userSchema)

const printerSchema = new Schema({
    id: {type: String, required: true},
    status: {type: String, required: true},
    queue: {type: String, required: true},
    lable: {type: String, required: true},
    place: {type: String, required: true}
})
const Printers = mongoose.model('printers', printerSchema,'printers')

const Orders = mongoose.model('orders', new Schema({
    user: {type: String, required: true},
    id: {type: String, required: true},
    status: {type: String, required: true},
    location: {type: String, required: true}
}))

const mySchema = {
    'printers': Printers,
    'users': Users,
    'orders': Orders,
}
module.exports = mySchema
// module.exports = Printers
// module.exports = Users