const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SupplierSchema=new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    owner_name:{ type:String, default:null },
    company_name:{type:String, default:null},
    business_name:{type:String, default:null},
    registration_number:{type:Number, default:null},
    website:{type:String, default:null},
    tax_image:{type:String, default:null},
    isvarified: { type: String, enum: ['not-filled','pending', 'accepted', 'rejected'], default: 'not-filled' }
})

module.exports=mongoose.model("Supplier", SupplierSchema);