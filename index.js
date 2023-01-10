//dependncies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require("./helpers/environments");
const data = require("./lib/data");

//app object - module scaffolding
const app = {};

//testing fs
// data.delete("test", "newFile", (err) => {
//   console.log(`error was`, err);
// });

//create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log(`Listening to port ${environment.port}`);
  });
};

//handle request response
app.handleReqRes = handleReqRes;

//start the server
app.createServer();
