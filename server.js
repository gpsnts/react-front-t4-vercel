const express = require("express");
// eslint-disable-next-line no-unused-vars
// const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "build")));

let location = __dirname + "/build/index.html"

app.get('/', (_, res) => res.sendFile(location));

app.listen(port, () => console.log(`Server listening on port ${port}`));
