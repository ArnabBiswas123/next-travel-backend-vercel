const express = require('express');
const router = express.Router()
const {protect}=require('../middleware/authTokenAdmin');
const signup=require('../controllers/admin/signup');
const login=require('../controllers/admin/login');
const getUser=require('../controllers/admin/getUser')
const pendingSupplier=require('../controllers/admin/pendingSupplier')
const approveSupplier=require('../controllers/admin/approveSupplier')
const acceptedSupplier=require('../controllers/admin/acceptedSupplier')
const rejectedSupplier=require('../controllers/admin/rejectedSupplier')
const rejectSupplier=require('../controllers/admin/rejectSupplier')

router.post('/signup',signup);
router.post('/login',login);
router.get('/getadmin',protect,getUser);
router.get('/pendingsupplier',protect,pendingSupplier);
router.put('/approvesupplier',protect,approveSupplier);
router.get('/acceptedsupplier',protect,acceptedSupplier);
router.get('/rejectedsupplier',protect,rejectedSupplier);
router.put('/rejectsupplier',protect,rejectSupplier);

module.exports=router;