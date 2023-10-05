const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 7000


const app = express()

app.get('/api/goals', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})
