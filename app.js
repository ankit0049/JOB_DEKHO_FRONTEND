import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import userRouter from './routes/user.routes.js';
import applicationRouter from './routes/application.routes.js';
import jobRouter from './routes/job.routes.js';
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './middlewares/error.middleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, 'config', 'config.env') });

const app = express();

app.use(cors());

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}));

app.use(express.static(path.resolve(__dirname, 'dist')));

app.use('/api/v1/user', userRouter);
app.use('/api/v1/application', applicationRouter);
app.use('/api/v1/job', jobRouter);

dbConnection();

app.use(errorMiddleware);

export default app;


