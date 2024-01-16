const path = require('path');
const multer = require('multer');

// logica para guardar img en el server, configuro mi multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public_html/img/'));
    },
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const uploadFile = multer({ storage });

module.exports={
    uploadFile
}
