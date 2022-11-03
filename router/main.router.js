const express = require('express');
const router = express.Router();


const { mainPage,admin,newgame,statusupdate,template} = require('../controller/main.controller')


router.get("/" , mainPage);
router.get('/admin', admin);
router.post('/admin/newgame',newgame);
router.post('/admin/status',statusupdate);
router.get('/admin/temp',template)

module.exports = router;
