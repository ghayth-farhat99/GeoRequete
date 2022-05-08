
import express, { json } from 'express';
const app = express();
import mongoose from 'mongoose';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import statementrouter from "./routes/statement.js";
import routersUlrs from "./routes/routes.js";
import LoginRouter from "./routes/loginRouter.js";
import cors from 'cors';


config()
mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("database connected"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(json())
app.use(cors())
app.use('/app',statementrouter)
app.use('/app',routersUlrs)
app.use('/app',LoginRouter)
app.listen(4000,()=> console.log("server is up and running "))