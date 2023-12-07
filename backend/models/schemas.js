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

const ordersSchema = new Schema({
    numberofPage: {type: String, required: true},
    place: {type: String, required: true},
    size: {type: String, required: true},
    layout: {type: String, required: true},
    pageSelection: {type: String, required: true},
    side: {type: String, required: true},
    totalPage: {type: String, required: true}
})
const Orders = mongoose.model('orders', ordersSchema, 'orders')

const mySchema = {
    'printers': Printers,
    'users': Users,
    'orders': Orders,
}
module.exports = mySchema
// module.exports = Printers
// module.exports = Users