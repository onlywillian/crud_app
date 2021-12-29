const UserSchema = require("../schemas/schema");
const db = require("../db/db");

const User = db.model('User', UserSchema);

module.exports = User;