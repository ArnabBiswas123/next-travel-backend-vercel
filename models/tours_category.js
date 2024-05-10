const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TourCategorySchema=new Schema({
    name:{type:String, required:true},
    description: { type: String, required: true },
    isTopten:{type:Boolean, default:false},
    image:{type:String, required:true}
})

module.exports=mongoose.model("TourCategory",TourCategorySchema);