const {Schema, model } = require('mongoose')
const userSchema = new Schema({
  name:{type:String, required: true, trim: true, minLength: 2},
  email: { type:String, required: true, unique: true, lowercase: true, trim: true },
  role:{type:String, enum:['customer', 'creator']}
},
{timestamps:true, versionKey: false

})

module.exports = model('User',userSchema)