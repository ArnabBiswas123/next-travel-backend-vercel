const Supplier = require("../../models/supplier");

const approveSupplier = async (req, res) => {
  try {
    const {supplierID}=req.body;
    if (!supplierID) {
      return res.json({ success: false, msg: "send all fields" });
    }
    const acceptedSupplier = await Supplier.findByIdAndUpdate(
      supplierID,
      { isvarified: "accepted" },
      { new: true }
    );
    if (!acceptedSupplier) {
      return res.json({ success: false, msg: "Supplier not found" });
    }
    return res.json({
      success: true,
      msg: "Supplier is accepted successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Internal server error" });
  }
};
module.exports = approveSupplier;
