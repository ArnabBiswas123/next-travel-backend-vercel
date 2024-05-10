const Inclusion=require('../../models/inclusions');
const editInclusion=async(req,res)=>{
try {
    const {id,name,status}=req.body;
    if(!name||!status||!id){
        return res.json({ success: false, msg: "Send all fields" });
    }

   const inclusionexists=await Inclusion.findOne({name:name});
    if(inclusionexists && inclusionexists.status===status){
        return res.json({success:false, msg:'Inclusion already exists'})
    }

    const updatedInclusion=await Inclusion.findByIdAndUpdate(id,{
        name:name,
       status:status
    },{new:true})
    if(!updatedInclusion){
        return res.json({success:false, msg:'Inclusion not found'});
    }
    return res.json({success:true, msg:'Inclusion edited successfully', inclusions:updatedInclusion});
} catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Internal server error" });
}
}
module.exports=editInclusion


