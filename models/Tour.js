const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TourSchema = new Schema(
  {
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
      required: true,
    },
    tour_category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TourCategory",
      required: true,
    },
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    total_days: { type: Number, required: true },
    total_nights: { type: Number, required: true },
    image:{type:String, required:true}
  },
  { timestamps: true }
);
module.exports = mongoose.model("Tour", TourSchema);
