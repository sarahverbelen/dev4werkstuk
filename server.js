const express = require('express')
const app = express()
const port = 3000

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

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))