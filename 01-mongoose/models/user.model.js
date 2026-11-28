const {Schema, model} = require('mongoose')

const userSchema = new Schema({
  name:{ type: String, required: true, trim: true, minLength: 2 },
  email: {type: String, required: true, trim: true, unique: true, lowercase: true,},
  role: {type: String, enum: ['customer', 'creator'], default:"customer"},
  },
{
  timestamps: true, versionKey: false
})

module.exports = model('User', userSchema)