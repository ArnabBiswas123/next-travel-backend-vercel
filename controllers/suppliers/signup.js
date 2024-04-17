const Supplier= require("../../models/supplier");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const signup=async(req,res)=>{
    try {
        let {name,email,password}=req.body;
        if (!name || !password || !email) {
            return res.json({ success: false, msg: "Send all fields" });
          }
          const userexists = await Supplier.findOne({ email });
          if (userexists) {
            return res.status(400).json({ success: false, msg: "Already Exists, please login to your account" });
          }
          const salt = await bcrypt.genSalt(10);
          const securepassword = await bcrypt.hash(password, salt);
          const supplier = await Supplier.create({
            name,
            email,
            password:securepassword
          })
          const data = {
            userData: {
                id: supplier.id
            }
        }
        // console.log(data);
        const authToken =await jwt.sign(data,process.env.JWT_SECRET,{
            expiresIn: "2h",
        })


      //   res.cookie('authToken', authToken, {
      //     httpOnly: true,
      //     expires: new Date(Date.now() + 3600000),
      //     // You can set other options like 'secure', 'sameSite', 'expires', etc. as needed
      // });

      return res.json({ success: true, token:authToken });


    } catch (error) {
        console.log(error);
        res.json({success: false, msg: "Internal server error" })
    }
}
module.exports = signup;