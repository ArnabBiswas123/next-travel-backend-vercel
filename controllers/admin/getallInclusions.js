const Inclusion=require('../../models/inclusions')
const getallInclusions=async(req,res)=>{
        try {
            const inclusions=await Inclusion.find({});
            return res.json({success:true, inclusions:inclusions})
        } catch (error) {
            console.log(error);
            res.json({success: false, msg: "Internal server error" })
        }
}
module.exports=getallInclusions