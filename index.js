const express = require('express')
const res = require('express/lib/response')
const app = express()

const port = 8080

app.get("/", (req, res) => {
    res.send("yooooo!")
})

app.listen(port, () => {
    console.log('listening on port ${port}')
})

// HTTP => POST, GET, PUT/PATCH, 