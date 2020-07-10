const path = require('path')
const express = require('express')
const hbs = require('hbs')
const func = require('./https')

const app = express()
const port = process.env.PORT || 3000

const pathdirectory = path.join(__dirname , '../Public')

app.use(express.static(pathdirectory))

app.set('view engine', 'hbs')

app.get('' , (req, res) => {
    res.render('index', {
        Name: 'PARTH PARMAR'
    })
})

app.get('/joke',(req, res) => {

    func((error, {setup, punchline} = {}) => {
        res.send({
            setup,
            punchline
        })
    })
})

app.listen(port , (req, res) => {
    console.log('server is running on : ' +port)
})
