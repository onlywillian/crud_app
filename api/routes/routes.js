const express = require("express");
const router = express.Router();
const User = require("../../database/models/model");

router.get("/users/all", async (req, res) => {
    const users = await User.find();

    if (!users) return res.send({ Error: "No Database" }).status(500);

    return res.send({ users: users }).status(200);
});

router.post("/users/new", async (req, res) => {
    const existingUser = await User.findOne({ id: req.body._id });

    if (existingUser) return res.send({ error: "User Aleights exist!" }).status(404);

    const user = new User(req.body);

    //Saving in Database
    await user.save();

    return res.send({ user: user }).status(200);
});

router.put("/users/update", async (req, res) => {
    const existingUser = await User.findOne({ id: req.body._id });

    if (!existingUser) return res.send({ error: "User don't exist's" }).status(404);

    User.updateOne({ id: req.body._id }, { name: req.body.newName });

    return res.send({ success: "Update completed" }).status(200);
});

router.delete("users/del", async (req, res) => {
    const existingUser = await User.findOne({ id: req.body._id });

    if (!existingUser) return res.send({ error: "User don't exist's" }).status(404);

    User.deleteOne({ id: req.body._id }, err => {
        if (err) res.send({ error: "Complex error" })
    });

    return res.send({ sucess: "User deleted" }).status(200);
});

module.exports = router;