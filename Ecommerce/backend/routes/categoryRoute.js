const express = require('express');
const {isAdmin, requireSignIn} = require('../middleware/authmiddleware');
const {createCategoryController, updateCategoryController, categoryController, singleCategoryController, deleteCategoryController} = require('../controllers/categoryController');

const router = express.Router();

//routes
// create category
router.post('/create-category', requireSignIn, isAdmin, createCategoryController);

// Update category
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController);

//getAll category
router.get('/get-category',categoryController);

//single category
router.get('/single-category/:slug', singleCategoryController);

//delete category
router.delete('/delete-category/:slug',deleteCategoryController)

module.exports = router;