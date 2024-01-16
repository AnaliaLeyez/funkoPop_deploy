// const fs = require ('fs'); //file system permite leer archivos
// const path = require('path'); //este y fs serian necesarios si trajera los datos desde el archivo json
//Si no tuviera "Servicios" de intermediario haria:
// const { getOne, deleteOne} = require('../models/itemsModels');
const { getAllItemsByID, getOneItem, createOneItem, deleteOneItem, editOneItem, findMatchItem } = require('../services/itemServices');
const { getAllCategories } = require('../services/categorieServices');
const { getAllLicences } = require('../services/licenceServices');

const adminControllers= {
    admin: async(req,res)=>{
        //Opcion sin BD:
        // const items = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/items.json')));
        //veo si traigo todos los items o filtro por busqueda:
        const items = req.query.q === undefined ? await getAllItemsByID() : await findMatchItem(req.query.q);  
        res.render("admin/admin.ejs",{
        items,
        view:{
            title: "ADMIN | FUNKOSHOP"
        },
        userName: req.session.nombre,
        userLastname: req.session.lastname,
        q: req.query.q
    })},
    
    createGET: async(req, res)=> {
        const categories = await getAllCategories();
        const licences = await getAllLicences();
        res.render("admin/create.ejs",{
            view:{
                title: "ADMIN | FUNKOSHOP"
            },
            categories,
          licences
        })
    },
    
    createPOST: async(req, res)=>{
        await createOneItem(req.body, req.files);
        res.redirect('/admin');
    },

    editGET: async (req, res) => {
        const id = req.params.id;
        const categories = await getAllCategories();
        const licences = await getAllLicences();
        const { data } = await getOneItem(id);
        res.render('admin/edit.ejs', {
          view: {
            title: `Edit Product #${id} | Admin Funkoshop`
          },
          item: data[0],
          categories,
          licences
        });
      },


    editPUT: async (req, res) => {
        await editOneItem(req.body, req.files, req.params.id);
        res.redirect('/admin');
      },
    
    delete: async(req, res)=>{
        await deleteOneItem(req.params.id);
        res.redirect('/admin');
    },

}

module.exports = adminControllers;