const server = require('./endpoints/server');

const port = 4000;
server.listen(port, () => console.log(`\n\nServer is running on port ${port}\n\n`))