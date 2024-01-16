const session = require('cookie-session');
require('dotenv').config();

function initSession() {
  return session({
    secret: process.env.SESSION_NAME,
    resave: false, // la sesión solo se guarda si ha sido modificada (con true se guardaria en cada solicitud)
  saveUninitialized: false, //Indica si se debe guardar una sesión que aún no se ha inicializado. Si está configurado en true, se guardará una sesión nueva aunque no haya sido modificada.
  cookie: {
    maxAge: 60 *1000, // 1 minuto
    //maxAge: null //genera cookie de sesion, es decir que solo muere cuando el usuario cierra sesion
  },
  });
};

module.exports = {
    initSession
  };