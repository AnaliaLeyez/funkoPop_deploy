 const fs = require ('fs'); //file system permite leer archivos
 const path = require('path'); //este y fs serian necesarios si trajera los datos desde el archivo json
 var nodemailer= require('nodemailer');
//Si no tuviera "Servicios" de intermediario haria:
//const { getOne} = require('../models/itemsModels');
const { getAllItemsByDate} = require('../services/itemServices');
const { getAllLicences} = require('../services/licenceServices');


const mainControllers= {
    home: async(req,res)=>{
        //Si no tuviera BD:
        // const items = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/items.json')));
        // const colecciones = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/licences.json')));
        const items = await getAllItemsByDate();
        const colecciones = await getAllLicences();
        
        res.render("home.ejs",{
        items,
        colecciones,
        view:{
            title: "HOME | FUNKOSHOP"
        },
        slider:{
            title: "Últimos lanzamientos"
        },
        message: req.query.message === 'logout' ? 'Sesión finalizada correctamente' : '',
        sendForm: req.query.sendForm === 'ok' ? 'Mensaje enviado correctamente' : ''
    })},

    contact: (req, res)=> 
    res.render("contact.ejs",{
        view:{
            title: "CONTACT | FUNKOSHOP"
        },
    }),

    contactPOST: async(req,res)=>{
        var nombre=req.body.name;
        var email=req.body.emailAdd;
        var mensaje=req.body.message;
      
        var obj = {
          to: 'any15015@gmail.com',
          subject: 'Contacto por Tienda Funko Pop',
          html: nombre + ' se contactó a través de la web Funko y requiere más información a este correo: ' + email + ". <br> Además dejó este mensaje: " + mensaje
        }
      
        var transport =nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          }
        });
      
        var info= await transport.sendMail(obj);
      
    res.redirect("/home?sendForm=ok")
    },
    
    about: (req, res)=> res.send('Rout for about view'),
    faqs: (req, res)=> res.send('Rout for faqs view')
}

module.exports = mainControllers;