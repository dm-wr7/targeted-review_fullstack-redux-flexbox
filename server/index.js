require('dotenv').config();
const express = require('express');
const app = express();
const ctrl = require('./controller')
const massive = require('massive')

const { SERVER_PORT, DB_STRING } = process.env;

massive({
    connectionString: DB_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(dbInstance => {
    console.log('Db connected')
    app.set('db', dbInstance)
})


app.get('/api/cars', ctrl.getCars)

app.listen(SERVER_PORT, () => console.log('Server Running'))