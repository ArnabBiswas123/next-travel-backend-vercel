const Supplier = require("../../models/supplier");

const rejectSupplier = async (req, res) => {
  try {
    const {supplierID}=req.body;
    if (!supplierID) {
      return res.json({ success: false, msg: "send all fields" });
    }
    const rejectedSupplier = await Supplier.findByIdAndUpdate(
      supplierID,
      { isvarified: "rejected" },
      { new: true }
    );
    if (!rejectedSupplier) {
      return res.json({ success: false, msg: "Supplier not found" });
    }
    return res.json({
      success: true,
      msg: "Supplier is Rejected successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Internal server error" });
  }
};
module.exports = rejectSupplier;
