const { Schema, model} = require('mongoose')

const postSchema = new Schema({
  title:{type: String, required: true, trim: true},
  body:{type:String, default:''},
  author:{type: Schema.Types.ObjectId, ref:'User',requires: true }
},
{timestamps:true, versionKey: false})

module.exports = model('Post', postSchema)