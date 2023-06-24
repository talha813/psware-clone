import authRouter from './routes/authRoute.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import dbconnection from './dbconfig/config.js';
// ------------------identify the problem in route----------
import morgan from 'morgan';

const app = express();
dbconnection();
app.use(cors());

dotenv.config();
app.use(morgan('dev'));

app.use(express.json());
app.use('/api/v1/auth', authRouter);

// HTTP request logger middleware for Node.js

const port = process.env.PORT || 8080;
// app.get("/register",(req,res)=>{
//     res.send("<h1>Register page called</h1>")
// })

app.listen(port, () => {
  console.log(`Server connected at ${port}`);
});
