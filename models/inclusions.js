const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InclusionSchema = new Schema(
    {
    name:{type:String, required:true},
    status:{type:String,enum:['active','inactive'], required:true}
    },
    { timestamps: true }
  );
  module.exports = mongoose.model("Inclusion", InclusionSchema);