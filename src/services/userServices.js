const { getOne, createOne, findOne } = require('../models/userModel');

const getOneUser =async(mail, pass)=>{

    const data = await getOne({email: mail}, {password: pass});
    return data;
}

const createOneUser =async(newUser)=>{
    const userSchema={
        name: newUser.name, 
        lastname: newUser.lastname,
        email: newUser.email,
        password: newUser.password
    }
    const data = await createOne([Object.values(userSchema)]);
    return data;
}

const findOneEmail= async(mail)=>{
    const data = await findOne({email: mail});
    return data;
}

module.exports={
    getOneUser,
    createOneUser,
    findOneEmail
}