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
const createTourCategory=require('../controllers/admin/createTourCategory')
const getallTourCategory=require('../controllers/admin/getallTourCategory');
const deleteTourCategory = require('../controllers/admin/deleteTourCategory');
const editTourCategory = require('../controllers/admin/editTourCategory');
const createexclusion = require('../controllers/admin/createExclusion');
const createinclusion = require('../controllers/admin/createInclusion');
const getallInclusions=require('../controllers/admin/getallInclusions');
const getallExclusions = require('../controllers/admin/getallExclusions');
const deleteInclusion = require('../controllers/admin/deleteInclusions');
const editInclusion = require('../controllers/admin/editInclusions');
const deleteExclusion = require('../controllers/admin/deleteExclusion');
const editExclusion = require('../controllers/admin/editExclusions');



router.post('/signup',signup);
router.post('/login',login);
router.get('/getadmin',protect,getUser);
router.get('/pendingsupplier',protect,pendingSupplier);
router.put('/approvesupplier',protect,approveSupplier);
router.get('/acceptedsupplier',protect,acceptedSupplier);
router.get('/rejectedsupplier',protect,rejectedSupplier);
router.put('/rejectsupplier',protect,rejectSupplier);
router.post('/createtourcategory',protect,createTourCategory);
router.get('/getalltourcategory',protect,getallTourCategory);
router.delete('/deletetourcategory',protect,deleteTourCategory)
router.put('/edittourcategory',protect,editTourCategory)

router.post('/createexclusion',protect,createexclusion)
router.post('/createinclusion',protect,createinclusion)
router.get('/getallinclusions',protect,getallInclusions)
router.get('/getallexclusions',protect,getallExclusions)
router.delete('/deleteinclusions',protect,deleteInclusion)
router.put('/editinclusions',protect,editInclusion)
router.delete('/deleteexclusions',protect,deleteExclusion)
router.put('/editexclusions',protect,editExclusion)
module.exports=router;