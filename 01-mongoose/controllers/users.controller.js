const createError = require('http-errors')
const {User, Post} = require('../models')

module.exports.create = async(req, res, next)=>{
  try{
    const user = await User.create(req.body)
    res.status(200).json(user)
  }catch(err){next(err)}
}


module.exports.getAll = async (req, res, next)=>{
try{
  const {page=1, limit = 10} = req.query

  const users = await User.find().sort({createdAt: - 1}).skip((page -1)* limit)
  .limit(Number(limit))
  res.json(users)
}catch(err){next(err)}
}


module.exports.getById = async(req, res, next)=>{
  try{
    const user = await User.findById(req.params.id)
    if(!user) {return next(createError(404, "User not found"))}
    res.json(user)
  }catch(err){next(err)}
}

module.exports.update = async (req, res, next)=>{
  try{
    const user = await findByIdAndUpdate(req.params.id, req.body,{
      new: true, runValidators: true,
    })
    if(!user){return next(createError(404, "User not found"))}
    res.json(user)
  }catch(err){next(err)}
}

module.exports.remove = async (req, res, next)=>{
  try{
    const user = await User.findByIdAndDelete(req.params.id)
    if(!user){return next(createError(404,"Uaser not found"))}
    res.status(204).end()
  }catch(err){next(err)}
}

module.exports.getUserPosts = async (req, res, next)=>{
  try{
    const user = (await User.find({author: req.params.id})).sort({createdAt: -1})
    res.json(posts)

  }catch(err){next(err)}
}