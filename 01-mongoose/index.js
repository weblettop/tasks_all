const mongoose = require('mongoose')
const app = require('./app')

const PORT = process.env.PORT ?? 3000

const DB_URL = process.env.DB_URL ?? 'mongodb://localhost:27018/learn'

const start = async()=>{
  await mongoose.connect(DB_URL)
  console.log('MongoDB connected')
  app.listen(PORT,()=> console.log(`Server on port ${PORT}`))
}

start().catch((err)=>{
  console.err("Unable to start:", err)
  process.exit(1)
})



