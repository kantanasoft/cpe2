const express = require('express')
const app = express()
const port = 9999

app.get('/', (req, res) =>
  res.send('Greetings from Kantanasoft')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
