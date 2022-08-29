const mongooose = require('mongoose');
const bcrypt = require("bcryptjs");

const UsersSchema = new mongooose.Schema({
  name: { type: String, required: true  },
  username: { type: String, required: true , unique: true },
  email: { type: String, required: true ,unique: true,lowercase: true },
  password: { type: String, required: true , select: false },
  photo: { type: String, required: true },
});

UsersSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const users = mongooose.model('users', UsersSchema);

module.exports = users;
