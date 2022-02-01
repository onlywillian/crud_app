const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

require("./api/controller/controller")(app);

app.listen(3333, () => {
    console.log("Listening on localhost:3333");
});