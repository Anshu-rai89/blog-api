const User = require("../../../Modl/user");
const jwt = require("jsonwebtoken");
module.exports.register = async function (req, res) {
  try {
    let user = await User.create(req.body);

    return res.status(200).json({ msg: "Success", data: user.id });
  } catch (err) {
    console.log("err in creating  user", err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports.login = async function (req, res) {
  try {
    console.log("login ", req.body);
    let user = await User.find({ email: req.body.email });
    console.log("user in db ", user);

    if (user && user.password === req.body.password) {
      //
      let token = jwt.sign(user.toJSON(), "secret");
      console.log("token", token);
      return res
        .status(200)
        .json({ msg: "Success", data: { token: token, user: user.id } });
    }
  } catch (err) {
    console.log("err in creating  user", err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};
