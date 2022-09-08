let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const  mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const app = express();


mongoose.connect(process.env.DATABASE,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("Connexion a MongoDB reussie"))
.catch(()=>console.log("Echec de connexion a mongoDB"));




let UtilisateurRouter = require('./Routes/UtilisateurRoutes')
let ProcedureRouter = require('./Routes/ProcedureRoutes') 
let EtudiantRouter = require('./Routes/EtudiantRoutes') 
let indexRouter = require('./Routes/index');


// view engine setup
 app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig'); 

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter)
app.use('/api/utilisateurs', UtilisateurRouter)
 app.use('/api/etudiants', EtudiantRouter) 
app.use('/api/procedure', ProcedureRouter) 


//je gère la partie de ma documentation
const swaggerOptions ={
    swaggerDefinition:{
        info :{
                titre: "API nexiosend",
                version: "version 1.0"
            },
    
    servers: [
        {
          url: "localhost:3030"
        }
      ]
    },
    apis: ['./Routes/UtilisateurRoutes*.js','./Routes/ProcedureRoutes*.js','./Routes/EtudiantRoutes*.js']
}
const swaggerDocs  = swaggerJsdoc(swaggerOptions)






 app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs))


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




app.listen(3030,()=>console.log("le serveur a bien démarré"))