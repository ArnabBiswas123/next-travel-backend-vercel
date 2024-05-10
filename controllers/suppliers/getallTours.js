const Tour = require("../../models/Tour");

const getallTours = async (req, res) => {
  try {
    const allTours = await Tour.find({ supplier: req.user._id })
      .populate("supplier")
      .populate("tour_category");
    return res.json({ success: true, tours: allTours });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Internal server error" });
  }
};
module.exports = getallTours;
