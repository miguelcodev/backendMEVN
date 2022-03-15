// import express from "express";
// const app = express();
// app.get("/",(req,res)=>{
//     res.send("Hello world");
// });

// app.listen(3000);
// console.log("server port",3000);

import express from 'express';

 import morgan from 'morgan';
 import cors from 'cors';
 import path from 'path';
import mongoose from 'mongoose';

const dbUrl='mongodb://localhost:27017/test';
mongoose.connect(dbUrl)
.then(mongoose => console.log('conectado a la comisaria puerto 27017'))
.catch(err => console.log(err));

 const app=express();
 app.use(morgan('dev'));
 app.use(cors());
 
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use(express.static(path.join(__dirname,'public')))
 
// app.use('/api',router);
 app.set('port',process.env.PORT || 3000);
 
 app.listen(app.get('port'),()=>{
     console.log('server on port ' + app.get('port'));
     //console.log(path.join( __dirname,'public'))
 });
