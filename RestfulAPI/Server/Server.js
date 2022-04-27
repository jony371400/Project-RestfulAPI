const express = require('express')
const cors = require('cors');
const DB = require('./Database.js');

// Express Start
const app = express()
const port = 3001

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true })

// Setting-CORS
const corsOptions = {
    // origin: [
    //     'http://www.example.com',
    //     'http://127.0.0.1:3001',
    // ],
    "origin": "*",
    // "preflightContinue": false,
    // "optionsSuccessStatus": 204,
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    // allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use(express.json());

// Testing
app.get('/', (req, res) => {
    res.send('Welcome Johnny!')
})

app.get('/API', (req, res) => {
    let value = "9999";
    res.send(value)
    // res.send('Hello API!')
})

// Restful API - ROBOT
app.post('/Robot', urlencodedParser, (req, res) => {
    console.log('-----------------Server.js Function(CREATE)-----------------')
    console.log('Connect Create API');
    // console.log('Req Body : ' + req.body.FID)
    // console.log('Req Body : ' + req.body.FNAME)

    let returnJSON = {
        BID: req.body.FID,
        BNAME: req.body.FNAME
    }

    DB.Create(req.body.FID, req.body.FNAME)
        .then((results) => {
            console.log('-----------------Server.js Function(CREATE)-----------------')
            console.log("\x1b[36m%s\x1b[0m", 'Create Success!')
            console.log('DATA from DbHandler : ', results)
            // console.log('RES : ', returnJSON)
            res.json(returnJSON)
        })
        .catch(() => {
            console.log('-----------------Server.js Function(CREATE)-----------------')
            console.log("\x1b[31m%s\x1b[0m", 'Create Error!')
            res.end()
        })
})

app.delete('/Robot', (req, res) => {
    console.log('-----------------Server.js Function(DELETE)-----------------')
    console.log('Connect Delete API');
    // console.log('Req Body : ' + req.body.FID)

    let returnJSON = {
        BID: req.body.FID,
    }

    DB.Delete(req.body.FID)
        .then(() => {
            console.log('-----------------Server.js Function(DELETE)-----------------')
            console.log("\x1b[36m%s\x1b[0m", 'Delete Success!')
            console.log('RES : ', returnJSON)
            res.json(returnJSON)
        })
        .catch(() => {
            console.log('-----------------Server.js Function(DELETE)-----------------')
            console.log("\x1b[31m%s\x1b[0m", 'Delete Error!')
            res.end()
        })
})

app.put('/Robot', urlencodedParser, (req, res) => {
    console.log('-----------------Server.js Function(UPDATE)-----------------')
    console.log('Connect Update API');
    // console.log('Req Body : ' + req.body.FID)
    // console.log('Req Body : ' + req.body.FNAME)

    let returnJSON = {
        BID: req.body.FID,
        BNAME: req.body.FNAME
    }

    DB.Update(req.body.FID, req.body.FNAME)
        .then(() => {
            console.log('-----------------Server.js Function(UPDATE)-----------------')
            console.log("\x1b[36m%s\x1b[0m", 'Update Success!')
            console.log('RES : ', returnJSON)
            res.json(returnJSON)
        })
        .catch(() => {
            console.log('-----------------Server.js Function(UPDATE)-----------------')
            console.log("\x1b[31m%s\x1b[0m", 'Update Error!')
            res.end()
        })
})

app.get('/Robot', (req, res) => {
    console.log('-----------------Server.js Function(READ)-----------------')
    console.log('Connect Read API')

    DB.Read()
        .then((results) => {
            console.log('-----------------Server.js Function(READ)-----------------')
            console.log("\x1b[36m%s\x1b[0m", 'Read Success!')
            console.log('DATA from DbHandler : ', results)
            res.json(results)
        })
        .catch(() => {
            console.log('-----------------Server.js Function(READ)-----------------')
            console.log("\x1b[31m%s\x1b[0m", 'Read Error!')
            res.end()
        })
})

// PORT
app.listen(port, () => {
    console.log('Backend Process Start!')
    console.log(`Listening at http://localhost:${port}`)
})