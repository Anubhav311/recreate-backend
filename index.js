require('dotenv').config();

const server = require('./endpoints/server');

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`\n\nServer is running on port ${port}\n\n`))