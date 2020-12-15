// Load node modules
const express = require('express'); 

// Setup express server
const app = express();
app.use(express.static('public'));
const port = process.env.PORT || 3000;
app.listen(port);