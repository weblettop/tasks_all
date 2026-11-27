const mongoose = require('mongoose')

module.exports.mongooseErrorHandler = (err, req, res, next)=>{
  if(err instanceof mongoose.Error.ValidationError){
    const errors = Object.values(err.errors).map((e)=>({
      status:422,
      title: e.message,
    }))
    return res.status(422).send({errors})
  }

  if(err instanceof mongoose.Error.CastError){
return res.status(400).send({errors:[{status:400}, title:`Invalid ${err.path}`]})
  }
  if(err.code === 11000){
    return res.status(409).send({errors}: [{status:409, title:'Already exists'}])
  }
  next(err)
}

module.exports.errorHandler = (err,req, res,next)=>{
  if(res.headersSent){
    return
  }
  const status = err.status || 500
  res.status(status).send({errors:[{status, title: err.message || "Server Error"}]})
}