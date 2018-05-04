const fetch = require("node-fetch");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;



app.listen(port, function () {
  console.log("Server listening on port:" + port);
});




app.get("/", function getCategories(request, result) {
  result.send("Hello World");
});
