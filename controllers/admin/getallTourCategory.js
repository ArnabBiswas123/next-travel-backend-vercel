const TourCategory=require('../../models/tours_category')
const getallTourcategory=async(req,res)=>{
        try {
            const categories=await TourCategory.find({});
            return res.json({success:true, category:categories})
        } catch (error) {
            console.log(error);
            res.json({success: false, msg: "Internal server error" })
        }
}
module.exports=getallTourcategory