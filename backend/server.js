if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const connectDB = require('./config/db');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authMiddleware = require('./middleware/auth');

const server = express();

//connectDB
connectDB();

// Middleware
server.use(bodyParser.json());
server.use(
  bodyParser.urlencoded({
    extended: false
  })
);
server.use(cors({ credentials: true }));
server.use(authMiddleware.initialize);

// Routes
server.use([
  require('./routes/auth'),
  require('./routes/rooms'),
  require('./routes/user')
]);

const PORT = process.env.PORT || 5000;
// Read port and host from the configuration file
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
