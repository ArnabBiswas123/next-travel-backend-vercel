const Supplier = require("../../models/supplier");
const pendingSupplier=async(req,res)=>{
        try{
            
            const pendingsuppliers=await Supplier.find({isvarified: 'pending'});
            // if(pendingsuppliers.length===0){
            // return    res.json({success:true, msg:'No pending suppliers'});
            // }
            return res.json({success:true, suppliers:pendingsuppliers});

        }catch(error){
            console.log(error);
            res.json({success: false, msg: "Internal server error" })
        }
}
module.exports=pendingSupplier