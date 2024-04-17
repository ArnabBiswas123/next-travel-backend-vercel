const express = require('express');
const router = express.Router()


const signup=require('../controllers/suppliers/signup');
const login=require('../controllers/suppliers/login')
const {protect}=require('../middleware/authToken');
const getUser=require('../controllers/suppliers/getUser')
const detailsForm=require('../controllers/suppliers/detailsForm')


router.post('/signup',signup);
router.post('/login',login);
router.get('/getsupplier',protect,getUser)
router.put('/detailsform',protect,detailsForm)

module.exports=router;