const Exclusion=require('../../models/exclusions');

const createexclusion=async(req,res)=>{
try {
    const {name, status}=req.body
    if(!name||!status){
      return  res.json({success:false, msg:"send exclusion name"})
    }
    
    const exclusionexists=await Exclusion.findOne({name:name});

    if(exclusionexists){
     
      return res.json({success:false, msg:'Exclusion already exists'})
    }
    await Exclusion.create({
      name,
      status
    })
    return res.json({success:true, msg:"Exclusion created successfully"});
    


} catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Internal server error" });
}
}
module.exports=createexclusion