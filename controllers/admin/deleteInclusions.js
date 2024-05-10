const Inclusion=require('../../models/inclusions');
const deleteInclusion=async(req,res)=>{
    try {
        const {id}=req.body
        const deletedinclusion=await Inclusion.findByIdAndDelete(id);
        if(!deletedinclusion){
          return  res.json({success:false, msg:'Inclusion not found'});
        }
        return res.json({success:true, msg:'Inclusion deleted successfully'})

    } catch (error) {
        console.log(error);
        res.json({ success: false, msg: "Internal server error" });
    }
}
module.exports=deleteInclusion