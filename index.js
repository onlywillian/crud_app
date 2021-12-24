const express = require('express');
const app = express();

app.use(express.urlencoded());
app.use(express.json());

require("./api/controller/controller")(app);

app.listen(3333, () => {
    console.log("Listening on localhost:3333");
});