//Aca se contiene la "lógica de negocio"
const { getAll } = require('../models/licenceModel');

const getAllLicences =async()=>{

    const data = await getAll();
    return data;
}


module.exports={
    getAllLicences
}