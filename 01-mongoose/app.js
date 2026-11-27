const express = require('express')
const router = require('./routes')
const { mongooseErrorHandler, errorHandler} = require('./middleware/errorHandlers.mw')



const app = express()
app.use(express.json())
app.use('/',router)
app.use(mongooseErrorHandler, errorHandler)

module.exports = app