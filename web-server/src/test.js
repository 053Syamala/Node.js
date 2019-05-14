"use strict";

const express = require('express');
const port = 8000;

var app = express();

app.get('/', (req, res) => res.send('Hehhllo or!'))

app.listen(port, 
     (err) {
 console.log('[%s] Listening on http://localhost:%d', app.settings.env, port);
});