const Exclusion = require("../../models/exclusions");
const editExclusion = async (req, res) => {
  try {
    const { id, name, status } = req.body;
    if (!name || !status || !id) {
      return res.json({ success: false, msg: "Send all fields" });
    }

    const exclusionexists = await Exclusion.findOne({ name: name });
    if (exclusionexists && exclusionexists.status === status) {
      return res.json({ success: false, msg: "Exclusion already exists" });
    }
    const updatedExclusion = await Exclusion.findByIdAndUpdate(
      id,
      {
        name: name,
        status: status,
      },
      { new: true }
    );
    if (!updatedExclusion) {
      return res.json({ success: false, msg: "Exclusion not found" });
    }
    return res.json({
      success: true,
      msg: "Exclusion edited successfully",
      exclusions: updatedExclusion,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Internal server error" });
  }
};
module.exports = editExclusion;
