const express = require("express");
const router = express.Router();
const User = require("../../database/models/model");

router.get("/users/all", async (req, res) => {
    const users = User.find();

    if (!users) 

    res.send({ users: users }).status(200);
});

router.post("/users/new", async (req, res) => {
    const existingUser = await User.findOne({ id: req.body.id });

    if (existingUser) res.send({ error: "User Aleights exist!" }).status(404);

    const user = new User(req.body);

    //Saving in Database
    await user.save();

    res.send({ user: user }).status(200);
});

router.put("/users/update", (req, res) => {

});

router.delete("users/del", (req, res) => {

});

module.exports = router;