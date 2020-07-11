const express = require('express')

const routes = express.Router();

routes.get('/', (req, res) => { res.send('alo galera do zap') });

module.exports = routes;