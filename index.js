const express = require('express')

const app = express()

app.get('/', (req, res)=>{
  res.send('hello world222')
})


app.listen(80)
