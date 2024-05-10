const TourCategory=require('../../models/tours_category')
const createTourCategory=async(req,res)=>{
try {
    let {name,des,img}=req.body
    if(!name||!des||!img){
        return res.json({ success: false, msg: "Send all fields" });
    }
    name = name.charAt(0).toUpperCase() + name.slice(1);

    let categoryData = await TourCategory.findOne({ name });
    // console.log(categoryData)
    if(categoryData){
        return res.status(400).json({ success: false, msg: "Category already exists" });
    }

    const category = await TourCategory.create({
        name,
        description:des,
        image:img
      });

      return res.json({success:true, data:category, msg:'category created successfully'})


} catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Internal server error" });
}
}
module.exports=createTourCategory