import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import mongoose from 'mongoose';
import userRouter from './user.router';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;
const mongoURL = process.env.DATABASE_ACCESS;
console.log(mongoURL);

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', userRouter);

app.listen(PORT, () =>
    console.log(`Server Started on [${PORT}] !`)
);
