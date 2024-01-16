const { conn } = require('../config/conn'); //importo la conexion

//Aca requiero la tabla Category de la BD
const getAll = async() =>{
    try{
        const [rows] = await conn.query('SELECT * FROM category;');
        return rows;

    }catch(e){
        const error ={
            isError: true,
            Message: `No se pudieron recuperar los datos de Category por: ${e}`
        }
        return error;
    } finally {
        await conn.releaseConnection();
      } 
};

module.exports={
    getAll
}