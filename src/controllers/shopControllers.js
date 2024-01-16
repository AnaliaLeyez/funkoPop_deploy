// const fs = require ('fs'); //file system permite leer archivos
// const path = require('path'); //este y fs serian necesarios si trajera los datos desde el archivo json
//Si no tuviera "Servicios" de intermediario haria:
//const { getOne} = require('../models/itemsModels');
const { getAllItemsByDate, getOneItem, findMatchItem } = require('../services/itemServices');

const shopcontrollers= {
    shop: async(req,res) => {
        //Si no tuviera BD:
        // const items = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/items.json')));
        const items = req.query.q === undefined ? await getAllItemsByDate() : await findMatchItem(req.query.q);
        // const items = await getAllItemsByDate();
        if(items.isError){
            items = 'Hubo un error'
        }
        res.render("shop/shop.ejs", 
    {
        items,
        view: {
            title: "SHOP | FUNKOSHOP"
        },
        q: req.query.q
    }
    )},


    itemGET: async(req,res)=>{
        const item = await getOneItem(req.params.id);
        const { data } = item;
        const items = await getAllItemsByDate();

        res.render("shop/item.ejs", 
        { 
            items,
            item: data[0] ? data[0] : false,
            view: {
                title: "SHOP | FUNKOSHOP"
            },
            slider:{ 
                items,
                        title: "Productos relacionados"
                    }
        }
        )
    },

    itemPOST:(req, res)=> res.send('Rout for item with POST'),

    cartGET: (req, res)=> res.render("shop/cart.ejs", 
    {
        view: {
            title: "SHOP | FUNKOSHOP"
        },
        item: false,
    }
    ),

    // cartPOST: (req, res)=> res.send('Rout for go to checkout page with POST')
    cartPOST: async(req, res)=> {
        const { data } = await getOneItem(req.body.productoID);
        
        res.render("shop/cart.ejs", 
    {
        view: {
            title: "SHOP | FUNKOSHOP"
        },
        item: data[0]
    }
    )},

    comingSoon: (req, res)=> res.render("shop/comingSoon.ejs", 
    {
        view: {
            title: "SHOP | FUNKOSHOP"
        },
    }
    ),

};

module.exports = shopcontrollers;