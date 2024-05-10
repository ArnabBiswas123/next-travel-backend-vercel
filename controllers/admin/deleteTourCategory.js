const TourCategory=require('../../models/tours_category')
const deleteTourCategory=async(req,res)=>{
    try {
        const {id}=req.body
        const deletedcategory=await TourCategory.findByIdAndDelete(id);
        if(!deletedcategory){
          return  res.json({success:false, msg:'category not found'});
        }
        return res.json({success:true, msg:'Category deleted successfully'})

    } catch (error) {
        console.log(error);
        res.json({ success: false, msg: "Internal server error" });
    }
}
module.exports=deleteTourCategory