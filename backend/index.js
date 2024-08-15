import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";

const app = express();

dotenv.config({
    path: "./config/.env"
});

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.listen(process.env.PORT, ()=>{
    console.log(`server is listening on port ${process.env.PORT}`);
})