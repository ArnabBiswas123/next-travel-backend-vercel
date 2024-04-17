const Supplier = require("../../models/supplier");
const acceptedSupplier=async(req,res)=>{
        try{
            
            const acceptedsuppliers=await Supplier.find({isvarified: 'accepted'});
            // if(acceptedsuppliers.length===0){
            // return    res.json({success:true, msg:'No accepted suppliers'});
            // }
            return res.json({success:true, suppliers:acceptedsuppliers});

        }catch(error){
            console.log(error);
            res.json({success: false, msg: "Internal server error" })
        }
}
module.exports=acceptedSupplier