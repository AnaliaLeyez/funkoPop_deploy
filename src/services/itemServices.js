//Aca se contiene la "lógica de negocio"
const { getAllByDate, getAllByID, getOne, createOne, deleteOne, editOne, findMatch } = require('../models/itemModel');

const getAllItemsByDate =async()=>{

    const data = await getAllByDate();
    return data;
}

const getAllItemsByID =async()=>{

    const data = await getAllByID();
    return data;
}

const getOneItem =async(params)=>{

    const data = await getOne({product_id: params});
    return data;
}

const createOneItem =async(item, files)=>{
    const itemSchema= {
    product_name: item.name,
    product_description: item.description,
    price: item.price,
    stock: item.stock,
    discount: item.discount,
    sku: item.sku,
    dues: item.dues,
    image_front: '/'+files[0].filename,
    image_back: '/'+files[1].filename,
    licence_id: item.collection,
    category_id: item.category
    }

    const data = await createOne([Object.values(itemSchema)]);
    return data;
}

const deleteOneItem =async(id)=>{
    const result = await deleteOne({product_id: id});
    return result;
}

const editOneItem = async (item, files, id) => {
    const itemSchema = {
      product_name: item.name,
      product_description: item.description,
      price: item.price,
      stock: item.stock,
      discount: item.discount,
      sku: item.sku,
      dues: item.dues,
      image_front: '/'+files[0].filename,
      image_back: '/'+files[1].filename,
      licence_id: item.collection,
      category_id: item.category
    }
  
    const data = await editOne(itemSchema, {product_id: id});
    return data;
  }

const findMatchItem = async(search)=>{
    const data = await findMatch(search);
    return data;
}

module.exports={
    getAllItemsByDate,
    getAllItemsByID,
    getOneItem,
    createOneItem,
    deleteOneItem,
    editOneItem,
    findMatchItem
}