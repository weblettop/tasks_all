const createError = require("http-errors")
const {Post, User} = require('../models')

module.exports.create = async(req, res, next)=>{
  try{
    const user = await User.findById(req.body.author)
    if(!user){return next(createError(404, 'Author not found'))}
    const post = await Post.create(req.body)
    res.status(201).json(post)
  }catch(err){next(err)}
}

module.exports.getAll = async (req, res, next)=>{
  try{
    const posts = await Post.find().populate("author", "name email")
    .sort({createdAt: -1})
    res.json(posts)
  }catch(err){next(err)}
}