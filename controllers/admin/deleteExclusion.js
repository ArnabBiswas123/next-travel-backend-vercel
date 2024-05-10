const Exclusion=require('../../models/exclusions')
const deleteExclusion=async(req,res)=>{
    try {
        const {id}=req.body
        const deletedexclusion=await Exclusion.findByIdAndDelete(id);
        if(!deletedexclusion){
          return  res.json({success:false, msg:'Exclusion not found'});
        }
        return res.json({success:true, msg:'Exclusion deleted successfully'})

    } catch (error) {
        console.log(error);
        res.json({ success: false, msg: "Internal server error" });
    }
}
module.exports=deleteExclusion