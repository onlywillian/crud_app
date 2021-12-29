const db = require("../db/db");

const UserSchema = new db.Schema({
    name: String,
    lastName: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = UserSchema;