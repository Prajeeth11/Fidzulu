const { log } = require("console");
const app = require("./app");

const http = require("http");

const port = process.env.PORT || 3022;

const server = http.createServer(app);

server.listen(port, () => {
    console.log("App started on port ", port)
});