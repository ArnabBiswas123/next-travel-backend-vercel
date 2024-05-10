const TourCategory=require('../../models/tours_category')
const editTourCategory=async(req,res)=>{
try {
    let {id,name,des,img}=req.body;
    if(!name||!des||!img||!id){
        return res.json({ success: false, msg: "Send all fields" });
    }

    name = name.charAt(0).toUpperCase() + name.slice(1);
    const updatedCategory=await TourCategory.findByIdAndUpdate(id,{
        name:name,
        description:des,
        image:img
    },{new:true})
    if(!updatedCategory){
        return res.json({success:false, msg:'category not found'});
    }
    return res.json({success:true, msg:'category edited successfully', category:updatedCategory});
} catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Internal server error" });
}
}
module.exports=editTourCategory


