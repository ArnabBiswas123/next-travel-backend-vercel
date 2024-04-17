const getUser=async(req,res)=>{
    try {
        
        return res.json({success:true, user:req.user})
    } catch (error) {
        console.log(error);
        res.json({ success: false, msg: "Internal server error" });
    }
}
module.exports=getUser;