Estructura del sitio Web:

/proyecto
├── index.js
├── /config
│   └── conn.js (conexión a base de datos)
├── /controllers
│   ├── /adminControllers.js
│   ├── /authControllers.js
│   ├── /mainControllers.js
│   └── /shopControllers.js
├── /middlewares
│   ├── /login.js
│   ├── /uploadFiles.js
│   └── /validator.js
├── /models
│   ├── /categoryModel.js
│   ├── /itemModel.js
│   └── /licenceModel.js
├── /routes
│   ├── /adminRoutes.js
│   ├── /authRoutes.js
│   ├── /mainRoutes.js
│   └── /shopRoutes.js
├── /services
│   ├── /categoryServices.js
│   ├── /itemServices.js
│   └── /licenceServices.js
├── /utils
│   └── /session.js
├── /views
│   ├── /contact.ejs
│   ├── /home.ejs
│   ├── /admin
│   │   ├── /admin.ejs
│   │   ├── /create.ejs
│   │   └── /edit.ejs
│   ├── /auth
│   │   ├── /login.ejs
│   │   └── /register.ejs
│   ├── /partials
│   │   ├── /card.ejs
│   │   ├── /footer.ejs
│   │   ├── /header.ejs
│   │   └── /sliders.ejs
│   └── /shop
│       ├── /cart.ejs
│       ├── /item.ejs
│       └── /shop.ejs 