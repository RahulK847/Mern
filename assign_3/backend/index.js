const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/user.routes');
// Configuration
require('./src/config/db.config');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors('*'));
app.use('/user', userRoutes);
app.listen(8082, () => {
  console.log('listening on http://localhost:8082');
});