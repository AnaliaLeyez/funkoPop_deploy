const { conn } = require('../config/conn'); //importo la conexion

//Aca requiero la tabla collection de la BD
const getOne = async(mail,pass) =>{
    try{
        const [rows] = await conn.query('SELECT * FROM user WHERE ?', mail, ' and ? ;',pass);
        return rows;

    }catch(e){
        const error ={
            isError: true,
            Message: `No se pudo recuperar el usuario por: ${e}`
        }
        return error;
    }  finally {
        await conn.releaseConnection();
      }
};

const createOne = async(params)=>{
    try{
        const [rows] = await conn.query('INSERT INTO user (name, lastname, email, password) VALUES ?',[params]);
        const response = {
            isError: false,
            data: rows
        };
        return response;
        // return rows;

    }catch(e){
        const error ={
            isError: true,
            Message: `No se pudo agregar el usuario por: ${e}`,
        }
        console.log(error);
        return error;
    }  finally {
        await conn.releaseConnection();
      }
}

const findOne= async(params)=>{
    try{
        const [rows] = await conn.query('SELECT * FROM user WHERE ?', params);
        return rows;

    }catch(e){
        const error ={
            isError: true,
            Message: `No encontramos usuario con el mail solicitado. Error: ${e}`
        }
        return error;
    }  finally {
        await conn.releaseConnection();
      }
}

module.exports={
    getOne,
    createOne,
    findOne
}