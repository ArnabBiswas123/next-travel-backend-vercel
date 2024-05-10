const Supplier = require("../../models/supplier");
const detailsForm=async(req,res)=>{

        try {
                const {owner_name,company_name,business_name,registration,website,tax}=req.body
                if(!owner_name||!company_name||!business_name||!registration||!website||!tax){
                        return res.json({success:false, msg:'send all fields'});
                }
                // console.log(req.user.id);
                const existingSupplier = await Supplier.findOne({ registration_number: registration });
                if (existingSupplier) {
                    return res.json({ success: false, msg: 'Supplier with this registration number already exists' });
                }
                const id=req.user.id;
                const updated_suppier=await Supplier.findByIdAndUpdate(id,{owner_name,company_name,business_name,registration_number:registration,website,tax_image:tax,isvarified:'pending'});
                if(!updated_suppier){
                        return res.json({success:false, msg:'Supplier not found'})
                }
                return res.json({success:true});
        } catch (error) {
                console.log(error);
                res.json({ success: false, msg: "Internal server error" }); 
        }
     

}
module.exports=detailsForm