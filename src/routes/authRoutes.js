const express = require ('express');
const router = express.Router();
const { body } = require('express-validator');
const { validateInput }= require('../middlewares/validator');
const authcontrollers= require('../controllers/authControllers');

const loginValidations = [
    body('email')
    .isEmail()
    .withMessage('Ingrese una dirección de correo electrónico válida'),
    // body('password')
    // .isLength({ min: 6 })
    // .withMessage('La contraseña debe tener al menos 6 caracteres, y solo admite letras y números')
   ];

router.get('/login', authcontrollers.loginGET);
router.post('/login', loginValidations, validateInput, authcontrollers.loginPOST);
router.get('/register', authcontrollers.registerGET);
router.post('/register', authcontrollers.registerPOST);
router.get('/logout', authcontrollers.logout);

module.exports =router;