const Supplier = require("../../models/supplier");
const rejectedSupplier=async(req,res)=>{
        try{
            
            const rejectedsuppliers=await Supplier.find({isvarified: 'rejected'});
            // if(rejectedsuppliers.length===0){
            // return    res.json({success:false, msg:'No rejected suppliers'});
            // }
            return res.json({success:true, suppliers:rejectedsuppliers});

        }catch(error){
            console.log(error);
            res.json({success: false, msg: "Internal server error" })
        }
}
module.exports=rejectedSupplier