const express = require('express')

const app = express()

app.get('/', (req, res)=>{
  res.send('hello world2sss2211')
})


app.listen(80)
