var express = require('express')
var app = express()
const data = require('./data.json')
var fs = require('fs')


var bodyParser = require('body-parser')


app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())



app.get('/info', (req, res) => {
  
  fs.readFile('./VERSION', (err, content) => {
    if (err) {
      res.status(500).json(err).send()
    } else {
      res.status(200).json({
        version: content.toString('utf8')
      }).send()
    }
  })

})



app.get('/api/backends', (req, res) => {

  var backends = data
  // Enrich with https://hub.docker.com/v2/repositories/radyak/?page_size=100

  var filter = req.query.filter

  if (filter) {
    backends = backends.filter((backend) => backend.name === filter)
  }
  res.status(200).json(backends).send()
})



app.listen(process.env.PORT || 80)

module.exports = app
