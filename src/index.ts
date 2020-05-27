import express from "express";
import morgan from "morgan";
import cors  from "cors";


//importing Routes
import IndexRoutes from './routes/user.routes';
import RequestCreditRoutes from './routes/requestCredit.routes';
import PaidCreditRoutes from './routes/paidCredit.routes';


// initalizations

const app = express();

import  "./database";


// setting
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({ origin:'http://localhost:4200'}))
//Routes
app.use('/api/user', IndexRoutes);
app.use('/api/requestC',RequestCreditRoutes);
app.use('/api/pagar',PaidCreditRoutes);


//Static files

//Starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
})
