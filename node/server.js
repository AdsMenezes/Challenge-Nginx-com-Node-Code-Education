const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

require('./typeorm')
const routes = require('./routes')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(routes)

app.listen(3000, () => {
  console.log('🎉 Server started! ')
})
