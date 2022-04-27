const express = require('express')

const app = express()

app.get('/', (req, res)=>{
  res.send('hello world22211')
})


app.listen(80)
