const router = require("../routes/routes");

module.exports = app => {
    app.use("/database", router);
};