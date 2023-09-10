const express = require('express');
const { registerController, loginController, currentController, forgotPasswordController,updateProfileController,getOrdersController,getAllOrdersController,orderStatusController} =  require('../controllers/authControllers');
const {requireSignIn, isAdmin} = require('../middleware/authmiddleware');

const router = express.Router()

// routing
//REGISTER || Method POST
router.post('/register', registerController);

// Forget Password || POST
router.post('/forgot-password',  forgotPasswordController)

//LOGIN || Method POST
router.post('/login', loginController);

//CURRENT || Method GET
router.get('/current', requireSignIn, isAdmin,currentController);

//Protected route auth -- for user
router.get('/user-auth',requireSignIn, (req, res)=>{
    res.status(200).send({ok: true})
})

//Protected route auth -- for admin
router.get('/admin-auth',requireSignIn,isAdmin, (req, res)=>{
    res.status(200).send({ok: true})
})

//Update profile
router.put('/profile', requireSignIn, updateProfileController)

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);


module.exports = router;