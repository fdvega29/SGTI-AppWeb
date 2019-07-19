const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcryptjs = require('bcryptjs');

//Creo el esquema o estructura de la bd.
const usersSchema = new Schema({
    apeNom: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true},
    date: {type: Date, default:Date.now} 
});

//Funcion que encripta la contraseña, gracias al metodo getSalt y hash.
usersSchema.methods.encryptPassword = async (password) => {
    const salt = await bcryptjs.getSalt(10);
    const hash = bcryptjs.hash(password, salt);
    return hash;
};

//Funcion que compara contraseñas ingresadas desde Regist a Login, gracias al metedo compare.
usersSchema.methods.mathPassword = async function (password) {
    return await bcryptjs.compare(password, this.password);
};

//Exportamos el modelo para reutilizarlo y configurar en file principal. 
module.exports = mongoose.model('Users', usersSchema);