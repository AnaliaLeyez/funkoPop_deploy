const { conn } = require('../config/conn'); //importo la conexion

//Aca requiero la tabla item de la BD
const getAllByDate = async() =>{
    try{
        const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id ORDER BY product.create_time DESC;');
        return rows;

    }catch(e){
        const error ={
            isError: true,
            Message: `No se pudieron recuperar los datos de Producto por: ${e}`
        };
        return error;
    } finally {
        await conn.releaseConnection();
      }
};

const getAllByID = async() =>{
  try{
      const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id ORDER BY product.product_id ASC;');
      return rows;

  }catch(e){
      const error ={
          isError: true,
          Message: `No se pudieron recuperar los datos de Producto por: ${e}`
      };
      return error;
  } finally {
      await conn.releaseConnection();
    }
};

const getOne = async(params) =>{
    try {
        const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE ?;', params);
        const response = {
          isError: false,
          data: rows
        };
    
        return response;
      } catch (e) {
        const error = {
          isError: true,
          message: `No pudimos recuperar los datos.`
        };
    
        return error;
      } finally {
        await conn.releaseConnection();
      }
};

const createOne = async(params) =>{
    try{
        const [rows] = await conn.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, licence_id, category_id) VALUES ?', [params]);
        return rows;

    }catch(e){
        const error ={
            isError: true,
            Message: `No se pudo agregar el nuevo registro debido a: ${e}`
        }
        return error;
    }finally {
        await conn.releaseConnection();
      }
};

const deleteOne = async(params) =>{
    try{
        const [rows] = await conn.query('DELETE FROM product WHERE ?;', params); //otra opcion: params.id
        return rows;

    }catch(e){
        const error ={
            isError: true,
            Message: `No se pudo borrar el registro con id ${params} debido a: ${e}`
        }
        return error;
    }finally {
        await conn.releaseConnection();
      }
};

const editOne = async (params, id) => {
    try {
      const [rows] = await conn.query('UPDATE product SET ? WHERE ?;', [params, id]);
      return rows;
    } catch (e) {
      const error = {
        isError: true,
        message: `No pudimos modificar el item seleccionado, error: ${e}`
      };
      return error;
    } finally {
      await conn.releaseConnection();
    }
  };
  
 const findMatch= async(params)=>{
    try {
      const query = "SELECT product.*, category.category_name, licence.licence_name \
    FROM (product LEFT JOIN category ON product.category_id = category.category_id) \
    LEFT JOIN licence ON product.licence_id = licence.licence_id \
    WHERE product_name like ? OR product_id like ? OR licence_name like ?";
    const [rows] = await conn.query(query, ['%' + params + '%', '%' + params + '%', '%' + params + '%']);
    return rows;
    } catch (e) {
      const error = {
        isError: true,
        message: `No pudimos hallar coincidencia, error: ${e}`
      };
      return error;
    } finally {
      await conn.releaseConnection();
    }
}

module.exports={
    getAllByDate,
    getAllByID,
    getOne,
    createOne,
    deleteOne,
    editOne,
    findMatch
}