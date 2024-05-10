const Tour = require("../../models/Tour");

const createTours=async(req,res)=>{
   try {
     let {name,des,categoryID,total_days,total_nights,img}=req.body

   

     if(!name||!des||!categoryID||!total_days||!total_nights||!img){
        return res.json({success:false, msg:"send all fields"});
     }

    //  console.log(req.user.isvarified);

     if(req.user.isvarified!=='accepted'){
        return res.json({success:"false", msg:"this supplier is not eligible to create product"})
     }

     name = name.charAt(0).toUpperCase() + name.slice(1);
     const existingtour=await Tour.findOne({name});
     if(existingtour){
        return res.json({success:false,msg:"This tour name already exists"});
     }
     const tour=await Tour.create({
        name,
        description:des,
        supplier:req.user._id,
        tour_category:categoryID,
        total_days,
        total_nights,
        image:img
     })
     return res.json({success:true, msg:"The tour is created", tour:tour})

   } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Internal server error" });
   }
}
module.exports=createTours