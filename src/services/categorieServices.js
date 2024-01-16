const { getAll } = require('../models/categoryModel');

const getAllCategories =async(params)=>{

    const data = await getAll(params);
    return data;
}

module.exports={
    getAllCategories
}