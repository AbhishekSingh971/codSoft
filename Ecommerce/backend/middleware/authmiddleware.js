const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//Protected Routes token base
const requireSignIn = async (req, res, next) => {
  try {
    const decode = await jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET||"abrraKaDabra"
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error)
  }
};

//admin access
const isAdmin = async (req, res, next)=>{
    try{
        const user = await userModel.findById(req.user._id)
        if(user.role !== 1){
            return res.status(401).send({
                success: false,
                message: "UnAuthorized Access"
            })
        }else{
            next()
        }
    }catch(error){
        console.log(error)
        res.status(401).send({
            success: false,
            error,
            message: "Error is admin middleware"
        })
    }
}

module.exports = {requireSignIn, isAdmin};
