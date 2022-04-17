require("dotenv").config();
const http = require("http").createServer();
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;


http.listen(port, () => console.log(`server listening on port ${port}`));

