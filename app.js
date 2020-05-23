const express = require('express')
const app = express()

//serve the index page
app.get('/', function (req, res, next) {
    var options = {
        root: __dirname
    }

    res.sendFile('index.html', options, function (err) {
        if (err) {
            next(err)
        }
    })
})

//serve the script
app.get('/script', function (req, res, next) {
    var options = {
        root: __dirname
    }

    res.sendFile('main.js', options, function (err) {
        if (err) {
            next(err)
        }
    })
})

//serve the json
app.get('/json', function (req, res, next) {
    var options = {
        root: __dirname
    }

    res.sendFile('entries.json', options, function (err) {
        if (err) {
            next(err)
        }
    })
})

module.exports = app;