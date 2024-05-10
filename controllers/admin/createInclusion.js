const Inclusion=require('../../models/inclusions');

const createinclusion=async(req,res)=>{
try {
    const {name, status}=req.body
    if(!name||!status){
      return  res.json({success:false, msg:"send exclusion name"})
    }
    
    const inclusionexists=await Inclusion.findOne({name:name});
    if(inclusionexists){
      return res.json({success:false, msg:'Inclusion already exists'})
    }
    await Inclusion.create({
      name,
      status
    })
    return res.json({success:true, msg:"Inclusion created successfully"});
    


} catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Internal server error" });
}
}
module.exports=createinclusion