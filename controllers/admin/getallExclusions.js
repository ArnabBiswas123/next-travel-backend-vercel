const Exclusion=require('../../models/exclusions')
const getallExclusions=async(req,res)=>{
        try {
            const exclusions=await Exclusion.find({});
            return res.json({success:true, exclusions:exclusions})
        } catch (error) {
            console.log(error);
            res.json({success: false, msg: "Internal server error" })
        }
}
module.exports=getallExclusions