const express = require ('express');
const router = express.Router();
const shopcontrollers= require('../controllers/shopControllers');

router.get('/', shopcontrollers.shop);
router.get('/item/:id', shopcontrollers.itemGET);
router.post('/item/:id', shopcontrollers.itemPOST);
router.get('/cart', shopcontrollers.cartGET);
router.post('/cart', shopcontrollers.cartPOST);
router.get('/remeras', shopcontrollers.comingSoon);
router.get('/llaveros', shopcontrollers.comingSoon);

module.exports = router;