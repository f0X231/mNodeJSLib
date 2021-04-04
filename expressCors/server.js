const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
  next()
})

app.post("/foo", (req, res) => { res.send("post foo") })
app.get("/foo", (req, res) => { res.send("get foo")  })

app.listen(5000, () => console.info("server running!!! http://localhost:5000"))

