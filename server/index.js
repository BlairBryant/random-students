require('dotenv').config()
const express = require('express'),
      massive = require('massive'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      axios = require('axios'),
      ctrl = require('./controller')

const app = express()

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
})

app.use(bodyParser.json())
app.use(cors())


app.post('/api/poststudent', ctrl.postStudent)
app.delete('/api/removestudent/:name', ctrl.removeStudent)
app.get('/api/getstudents', ctrl.getStudents)
app.put('/api/updateyes', ctrl.updateYes)

const port = process.env.PORT
app.listen(port, () => console.log(`Yo Im on ${port}`))