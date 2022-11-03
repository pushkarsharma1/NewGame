const express = require('express');
const router = express.Router();


const { mainPage,admin,newgame,statusupdate} = require('../controller/main.controller')


router.get("/" , mainPage);
router.get('/admin', admin);
router.post('/admin/newgame',newgame);
router.post('/admin/status',statusupdate);

module.exports = router;
