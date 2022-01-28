const express = require("express");
const router = express.Router();
const User = require("../../database/models/model");

router.get("/users/all", async (req, res) => {
    const users = await User.find();

    if (!users) return res.send({ Error: "No Database" }).status(500);

    return res.send({ users: users }).status(200);
});

router.post("/users/new", async (req, res) => {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) return res.send({ error: "User already exist!" }).status(404);

    const user = new User(req.body);

    //Saving in Database
    await user.save();

    return res.send({ user: user }).status(200);
});

router.put("/users/update", async (req, res) => {
    const existingUser = await User.findOne({ _id: req.body.id });

    if (!existingUser) return res.send({ error: "User don't exist's" }).status(404);

    if (!req.body.newEmail) return res.send({ error: "No email" });

    User.updateOne({ _id: req.body.id }, { email: req.body.newEmail }, function (err) {
        if (err) return console.log(err);
    });

    return res.send({ sucess: "Update completed" }).status(200);
});

router.delete("/users/del", async (req, res) => {
    const existingUser = await User.findOne({ _id: req.body.id });

    if (!existingUser) return res.send({ error: "User don't exist's" }).status(404);

    User.deleteOne({ id: req.body._id }, err => {
        if (err) return res.send({ error: err });
    });

    return res.send({ sucess: "User deleted" }).status(200);
});

module.exports = router;