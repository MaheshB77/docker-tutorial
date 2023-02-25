const keys = require('./keys');

// Express setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres client setup
const { Pool } = require('pg');
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
});

pgClient.on('error', () =>
    console.error('Error while connecting to postgres db')
);

pgClient
    .query('CREATE TABLE IF NOT EXISTS values (number INT)')
    .catch((error) => console.log('Error while creating the table'));
