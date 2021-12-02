
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static('./build'));
app.use(bodyParser.json({ extended: true }));


const api = require("./api.js");

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});


// app.get("/", async (request, response) => {
//   response.send('hi from index');
// });

app.use(api());
