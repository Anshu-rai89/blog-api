const Blog = require("../../../Modl/blog");

module.exports.getBlog = async function (req, res) {
  try {
    let blogs = await Blog.find({});

    return res.status(200).json({ msg: "Success", data: blogs });
  } catch (err) {
    console.log("err in getting blog", err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports.create = async function (req, res) {
  try {
    console.log("inside create", req.body);
    let blogs = await Blog.create(req.body);

    return res.status(200).json({ msg: "Success", data: blogs });
  } catch (err) {
    console.log("err in creating blog", err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};
