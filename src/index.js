const path = require('path');
const express = require('express');

const app = express();

// static files
app.use(express.static('public'));

// start server
app.listen(process.env.PORT || 5000);
